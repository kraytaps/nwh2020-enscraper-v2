<template>
  <v-app id="app-container">
    <v-btn class="scrape-btn" @click="scrapeWindow()" dark>START SCRAPING</v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    scrapeWindow() {
      // window.location.reload(false);
      console.log("test");
      window.onload = function(){
        const re = new RegExp('cotton', 'gi')
        const matches = document.documentElement.innerHTML.match(re)
        // console.log(matches)
        var images = document.getElementsByTagName('img')
        var rect = images[10].getBoundingClientRect();
        // console.log(rect.x)
        // console.log(rect.y)
        // console.log(images[0])
        var box = document.createElement('input')
        box.style.position = 'absolute'
        box.style.left = rect.x
        box.style.top = rect.y
        if(matches != null){
            const div = document.createElement('div')
            div.textContent = 'Eco-score: 60'
            box.textContent = 'Eco-score: 60'
        }
        else{
            const div = document.createElement('div')
            div.textContent = 'Eco-score: 100'
            box.textContent = 'Eco-score: 100'
        }
      } 
    }
  }
}
</script>

<style scoped>
/* .scrape-btn {
  margin: 0 auto;
  top: 80%;
  z-index: 100;
} */
</style>
