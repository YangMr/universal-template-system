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
      if (!store.getters.hasUserInfo) {
        // 调用获取信息接口
        const response = await store.dispatch('user/getUserInfo')
        if (response) {
          // 获取用户所拥有的路由权限
          const { permission } = response
          // 调用vuex里面filterRoutes 在这个方法里面过滤出当前用户所拥有的私有路由表数据
          // 获取到当前登录用户所拥有的私有路由表
          const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus)
          // 遍历用户所拥有的私有路由表, 并且将用户所拥有的私有路由表添加到完整的路由中
          filterRoutes.forEach(item => {
            router.addRoute(item)
          })
          // 指定要进入的路由, 注意: next 里面一定要指定进入的路由, 如果不指定,就会出现白屏问题
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
