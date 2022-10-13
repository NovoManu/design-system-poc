// Configuration: https://github.com/BuilderIO/mitosis/blob/main/docs/configuration.md#typescript-configuration
// Targets list: https://github.com/BuilderIO/mitosis/blob/main/packages/core/src/targets.ts

const seedrandom = require('seedrandom');
const rng = seedrandom('vue-sdk-seed');

const getSeededId = () => {
  const rngVal = rng();
  return Number(String(rngVal).split('.')[1]).toString(36);
};

module.exports = {
  files: 'src/**',
  targets: ['reactNative', 'vue2', 'vue3', 'webcomponent', 'svelte', 'react'],
  options: {
    vue: {
      cssNamespace: getSeededId,
    },
  },
};
