export const state = () => ({
  price: 0,
  lastUpdate: "-",
  error: null
})

export const mutations = {
  setLastUpdate(state, lu) {
    state.lastUpdate = lu
  },
  setError(state, error) {
    state.error = error
  },
  setLastPrice(state, price) {
    state.price = price
  }
}

export const actions = {
  getLastPrice({ commit }) {
    this.$axios.$get('https://blockchain.info/it/ticker')
    .then(ticker => {
      // throw "Error!"
      commit("setLastPrice", ticker.EUR.last)
      const now = new Date()
      commit("setLastUpdate", `${now.getHours()}:${now.getMinutes()}`)
    })
    .catch(err => {
      commit("setError", err)
    })
  }
}
