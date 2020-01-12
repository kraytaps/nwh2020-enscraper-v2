<template>
  <!-- <scraper-window /> -->
  <div id="app">
    <Helloworld/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {}
  }
}
</script>

<style>
  html {
    width: 400px;
    height: 600px;
  }
</style>
