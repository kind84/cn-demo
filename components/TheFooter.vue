<template>
  <div class="status-footer">
    <div class="last-update">
      <p>Last udate: {{lastUpdate}}</p>
    </div>
    <div class="error-msg" v-if="error">
      <p>Error <a href="" @click="reload">Retry</a></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lastUpdate() {
      return this.$store.state.lastUpdate
    },
    error() {
      return this.$store.state.error
    }
  },
  methods: {
    reload() {
      location.reload()
    }
  }
}
</script>

<style>
.status-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: footer;
}
</style>
