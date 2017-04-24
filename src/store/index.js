/**
 * Created by pc on 2017/4/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import main from './main/index'
import news from './news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    news
  }
})
