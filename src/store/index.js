import Vue from 'vue'
import Vuex from 'vuex'

import { getUserInfo } from '@/api/user'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userInfo: null
  },
  getters: {
    userInfo: (state) => {
      return state.userInfo
    }
  },
  mutations: {
    SET_userInfo(state, data) {
      state.userInfo = data
    }
  },
  actions: {
    getUser({ commit }) {
      return new Promise((resolve, reject) =>{
        getUserInfo(1).then(res => {
          commit('SET_userInfo', res)
          resolve(res)
        }, err => {
          reject(err)
        })
      })
    }
  }
})

