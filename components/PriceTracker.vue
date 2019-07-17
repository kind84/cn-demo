<template>
  <div class="price-container">
    <h1>{{ price.toFixed(2) }}€</h1>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
export default {
  props: ['price'],
  computed: {
    status() {
      const s =  this.price === 0 ? "Loading price" : "since last visit"
      return s
    }
  }
}
</script>

<style scoped>
.price-container {
  margin: 2rem 1rem;
}

@media(min-width: 600px) {
  .price-container {
    margin: 3rem 2rem;
  }
}
</style>

