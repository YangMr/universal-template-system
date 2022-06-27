import UserApi from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
    }
  }
}
