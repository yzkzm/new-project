/**
 * Created by pc on 2017/4/20.
 */
const state = {}

const getters = {}

module.exports = {
  getters,
  state,
  mutations: require('./mutations').mutations,
  actions: require('./actions').actions
}
