import fs, { Dirent } from 'fs'

const filesystemTools = require('gluegun/filesystem')
const stringTools = require('gluegun/strings')
const printTools = require('gluegun/print')

const compileCommand = require('@builder.io/mitosis-cli/dist/commands/compile')

const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')

const transformMitosisComponent = (to, out, filepath) => {
  compileCommand.run({
    parameters: {
      options: {
        from: 'mitosis',
        to,
        out,
        force: true,
        state: '',
        styles: ''
      },
      array: [filepath]
    },
    strings: stringTools.strings,
    filesystem: filesystemTools.filesystem,
    print: {...printTools.print, info: () => null}
  })
}

const compileFoundations = (indexFile) => {
  const foundationsFolder = './foundations'
  const modules = fs.readdirSync(foundationsFolder, {withFileTypes: true}).map((file: Dirent) => {
    if (file.name.includes('index')) return
    return file.name.split('.')[0]
  }).filter(m => m)
  const foundationsExport = `export { ${modules.join(', ')} } from '../../../foundations'\n`
  fs.appendFile(indexFile, foundationsExport, (err => {
    if (err) throw Error
  }))
}

export const compile = (options, componentFolder: string = null) => {
  let componentsPath = `./src/components/`
  if (componentFolder) componentsPath += componentFolder
  const indexFile = `./packages/${options.type}/src/index.ts`
  if (!componentFolder) {
    fs.writeFileSync(indexFile, '')
    compileFoundations(indexFile)
  }
  fs.readdirSync(componentsPath, {withFileTypes: true}).forEach((file: Dirent) => {
    if (file.isDirectory()) {
      compile(options, file.name)
    } else {
      const outputFolder = `./packages/${options.type}/src/`
      const fileName = `${file.name}.${options.ext}`.replace('.lite.tsx', '')
      const out = `${outputFolder}/${fileName}`
      if (file.name.includes('lite')) {
        transformMitosisComponent(options.type, out, `${componentsPath}/${file.name}`)
        const componentExport = `export { default as ${toPascalCase(fileName.split('.')[0])} } from './${fileName.replace('.tsx', '')}';\n`
        fs.appendFile(indexFile, componentExport, function (err) {
          if (err) throw err;
        });
      } else {
        fs.copyFileSync(`${componentsPath}/${file.name}`, `${outputFolder}/${file.name}`)
      }
    }
  })
}
