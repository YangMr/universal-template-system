import { createStore } from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import tagsview from './modules/tagsview'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user,
    permission,
    tagsview
  }
})
