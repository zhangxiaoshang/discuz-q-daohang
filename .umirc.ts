import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', title: 'Discuz Q 导航站', component: '@/pages/index.jsx' },
  ],
});
