export default [
  {
    path: '/',
    name: 'basicLayout',
    component: '@/layouts/index.tsx',
    routes: [
      { path: '/home', name: '首页', component: '@/pages/Home/Home.tsx' },
      {
        path: '/article',
        name: '文章管理',
        component: '@/pages/Article/Article.tsx',
      },
      {
        path: '/createarticle',
        name: '创建文章',
        hide: true,
        component: '@/pages/Article/components/CreateArticle/CreateArticle.tsx',
      },
      {
        path: '/label',
        name: '标签管理',
        component: '@/pages/Label/Label.tsx',
      },
      { path: '*', hide: true, component: '@/pages/404.tsx' },
    ],
  },
];
