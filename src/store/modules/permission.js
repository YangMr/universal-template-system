import { publicRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach(name => {
        const data = privateRoutes.filter(item => item.name === name)
        routes.push(...data)
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      console.log('routes====>', routes)
      commit('setRoutes', routes)
      return routes
    }
  }
}
