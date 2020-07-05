<template>
  <div class="full-width center-content">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Hello from './components/Hello.vue'

export default {
  components: {
    // Hello
  }
}
</script>

<style scoped>

</style>
