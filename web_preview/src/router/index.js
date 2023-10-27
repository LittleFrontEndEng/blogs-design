import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'
import AppLayout from '@/layout/AppLayout.vue'
const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '首页',
        meta: { requiresAuth: false },
        component: () => import('@/views/HomeList/HomeList.vue')
      },
      {
        path: 'article',
        name: '文章内容',
        meta: { requiresAuth: true },
        component: () => import('@/views/Article/Article.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(), // web history模式
  routes
})

router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  const store = useStore();
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !store.state.user) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})

export default router