export default [
  {
    path: '/login',
    name: 'login',
    component: '@/pages/Login/Login.tsx',
  },
  {
    path: '/',
    name: 'basicLayout',
    component: '@/layouts/index.tsx',
    routes: [
      { path: '/home', name: '首页', component: '@/pages/Home/Home.tsx' },
      { path: '/article', name: '文章管理', component: '@/pages/Article/Article.tsx' },
      { path: '/label', name: '标签管理', component: '@/pages/Label/Label.tsx' },
      {path: '*', component: '@/pages/404.tsx' },
    ],
  },
];
