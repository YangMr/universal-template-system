/**
 *
 * 登录 token
 *  进入到登录  跳转到登录之前的页面
 *  进入到登录以后页面  可以进入
 *
 * 未登录
 *  没有token
 *    进入的是登录 进入
 *    进入的不是登录页 跳转到登录页
 *
 */
import router from './router'
import store from './store'

// 定义一个用户未登录情况下可以访问的白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      console.log('===', store.getters.hasUserInfo)
      if (!store.getters.hasUserInfo) {
        // 调用获取信息接口
        const response = await store.dispatch('user/getUserInfo')
        if (response) {
          const { permission } = response
          const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus)
          filterRoutes.forEach(item => {
            router.addRoute(item)
          })
          return next(to.path)
        } else {
          next('/login')
        }
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

/**
           * 私有路由表通过router.addRoute 动态添加到路由表中
           *
           * 浏览器刷新页面无法加载问题
           *
           * 退出的时候删除添加的路由表
           */
