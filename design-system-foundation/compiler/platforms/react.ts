import { compile } from '../base'

const options = {
  type: 'react',
  ext: 'tsx'
}

export const compileReact = () => {
  compile(options)
}
