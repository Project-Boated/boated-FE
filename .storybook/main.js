const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../styles/**/*.stories.mdx',
    '../styles/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../');

    return config;
  },
};
