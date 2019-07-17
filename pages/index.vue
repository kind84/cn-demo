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
  computed : {
    price() {
      return this.$store.state.price
    }
  },
  mounted() {
    this.$store.dispatch("getLastPrice")
  }
}
</script>

<style>


</style>
