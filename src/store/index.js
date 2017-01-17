import Vue from 'vue'
import Vuex from 'vuex'

import grid from './modules/Grid'

Vue.use(Vuex)

console.log('index.js')

export default new Vuex.Store({
  modules: {
    grid
  }
})
