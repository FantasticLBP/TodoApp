<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'todo-app',
    mounted () {
      this.$nextTick(() => {
      })
    }
  }
</script>

<style>
  /* CSS */
</style>
