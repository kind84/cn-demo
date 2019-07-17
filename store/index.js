export const state = () => ({
  lastUpdate: "-",
  error: null
})

export const mutations = {
  setLastUpdate(state, lu) {
    state.lastUpdate = lu
  },
  setError(state, error) {
    state.error = error
  }
}

export const actions = {
  setLastUpdate({ commit }, lu) {
    commit('setLastUpdate', lu)
  },
  setError({ commit }, error) {
    commit('setError', error)
  }
}
