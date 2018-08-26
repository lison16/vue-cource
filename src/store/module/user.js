const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  getters,
  state,
  mutations,
  actions
}
