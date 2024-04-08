import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'rc-terminal',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/rc-terminal/dist/',
  hash: true,
  history: {type: 'hash',},
});
