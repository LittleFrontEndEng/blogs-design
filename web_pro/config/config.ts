import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  dynamicImport: {},
  history: {
    type: 'browser',
  },
  antd: {
  },
  fastRefresh: {},
  routes: routes,
});