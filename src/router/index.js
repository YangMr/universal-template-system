import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'

// 一级路由 最外层的路由 /login /user /article /
// 要想拿到所有的字路由, 就必须先拿所有一级的路由的children (所有的子数据在一级的children里面)

// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'chart'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]

// 私有路由表
const privateRoutes = [
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('../views/user-manage'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('../views/permission-list'),
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('../views/import')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: () => Layout,
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('../views/article-detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
