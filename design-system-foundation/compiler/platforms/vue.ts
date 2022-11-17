import { compile } from '../base'

const options = {
  type: 'vue2',
  ext: 'vue'
}

export const compileVue = () => {
  compile(options)
}
