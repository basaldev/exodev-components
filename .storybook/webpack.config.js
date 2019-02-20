const path = require('path');
const parser = require('react-docgen-typescript/lib/parser');

module.exports = async (baseConfig, env, config) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          require.resolve('awesome-typescript-loader'),
          require.resolve('react-docgen-typescript-loader')
        ],
        include: [
          path.resolve(__dirname, '../src/')
        ],
        enforce: 'pre',
      }
    ]
  },
  resolve: {
    ...config.resolve,
    extensions: [
      ...config.resolve.extensions,
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    alias: {
      ...config.resolve.alias,
      '@emotion/core': require.resolve('styled-components'),
      '@emotion/styled': require.resolve('styled-components')
    }
  }
});
