<template>
  <v-app id="app-container">
    <v-img src="../assets/grad-head.svg" class="grad-head-img" max-height="200" position="top center"></v-img>
    <p class="scraper-title">ImpactLess</p>
    <v-btn class="scrape-btn" @click="scrapeWindow()" color="#69F0AE" depressed rounded>START ASSESSMENT</v-btn>
    <vue-circle class="circle"
        :progress="finalData"
        :size="150"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="false"
        >
          <!-- <p>Slot!</p> -->
      </vue-circle>
    <div class="dataDisplay">
      <p class="dataDisplay--p">{{ finalData }}</p>
    </div>
  </v-app>
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'
import scoreData from './scoreData.js'
export default {
  components: {
    VueCircle
  },
  data() {
    return {
      finalData: scoreData.data,
      fill : { gradient: ["#EC008C", "#FF512F"] }
    }
  },
  methods: {
    scrapeWindow() {
      chrome.tabs.reload();
      this.$swal(
        'Great!',
        'Scraping Completed!',
        'success'
      )
    },
    // progress(event,progress,stepValue) {
    //     this.finalData = progress + stepValue;
    //     // console.log(stepValue);
    // },
    // progress_end(event){
    //   this.finalData = 100 + event * 0;
    // }
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
