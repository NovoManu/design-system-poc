const config = require('../../rollup.config.js');
const vue = require('rollup-plugin-vue');

module.exports = config({
  dir: __dirname,
  packageJson: require('./package.json'),
  plugins: [vue()],
  external: ['vue'],
  dts: false
});
