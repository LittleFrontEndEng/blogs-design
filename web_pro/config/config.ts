import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: false,
  dynamicImport: {},
  history: {
    type: 'browser',
  },
  antd: {
  },
  fastRefresh: {},
  routes: routes,
});