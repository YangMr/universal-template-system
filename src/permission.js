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
  // 获取用户信息
  const userInfo = store.getters.userInfo
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (userInfo) {
        next()
      } else {
        // 调用获取信息接口
        const response = await store.dispatch('user/getUserInfo')
        if (response) {
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
