import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { getConfigData } from '@/services/api'

export default new Vuex.Store({
  state: {
    configData: {}
  },
  getters: {
  },
  mutations: {
    updateKey (state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
    async getConfigInfoData ({ commit, state }) {
      const opts = {
        appType: 0
      }
      const { data } = await getConfigData(opts)
      let configMap = {}
      for (let key in data) {
        let moduleData = data[key]
        let subMap = {}
        moduleData.length && moduleData.forEach(item => {
          subMap = {
            ...subMap,
            ...item
          }
        })
        configMap = {
          ...configMap,
          [key]: subMap
        }
      }
      commit('updateKey', {
        key: 'configData',
        value: configMap
      })
    }
  }
})
