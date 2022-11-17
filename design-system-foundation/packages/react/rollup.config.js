const config = require('../../rollup.config.js');

module.exports = config({
  dir: __dirname,
  packageJson: require('./package.json'),
  babelPresets: ['@babel/preset-react'],
  compilerOptions: {
    jsx: 'react',
    jsxImportSource: null
  }
});
