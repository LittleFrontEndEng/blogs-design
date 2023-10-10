export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: '@/pages/Login/Login.tsx'
  },
];
