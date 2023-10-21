import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: JSON.parse(localStorage.getItem("userInfo") || 'null')
    }
  },
  mutations: {
    addUserInfo (state, payload) {
      state.user = payload
    }
  },
  actions: {},
  modules: {},
})

export default store;