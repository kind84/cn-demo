<template>
  <section class="container">
    <PriceTracker :price="price" />
  </section>
</template>

<script>
import PriceTracker from '@/components/PriceTracker'

export default {
  components: {
    PriceTracker
  },
  data() {
    return {
      price: 0
    }
  },
  mounted() {
    this.$axios.$get('https://blockchain.info/it/ticker')
    .then(ticker => {
      throw "Error!"
      this.price = ticker.EUR.last
      const now = new Date()
      this.$store.dispatch("setLastUpdate", `${now.getHours()}:${now.getMinutes()}`)
    })
    .catch(err => {
      this.$store.dispatch("setError", err)
    })
  }
}
</script>

<style>


</style>
