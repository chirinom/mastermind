import Vue from 'vue'
import Vuex from 'vuex'

import mastermind from './modules/mastermind'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mastermind
  }
})
