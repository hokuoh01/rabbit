//createRouter  创建路由的实例
//createWebHistory  创建history模式的路由 

// 在许多现代前端框架中，如React Router或Vue Router，都有类似"history"模式的路由选项。
// 这种模式允许你在不带有哈希(#)的URL中使用路由，
// 使你的应用程序看起来更像是一个传统的网站而不是一个单页应用程序。

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
