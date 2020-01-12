<template>
  <v-app id="app-container">
    <v-img src="../assets/grad-head.svg" class="grad-head-img" max-height="200" position="top center"></v-img>
    <p class="scraper-title">Impact-Less</p>
    <v-btn class="scrape-btn" @click="scrapeWindow()" color="#69F0AE" depressed rounded>START SCRAPING</v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    scrapeWindow() {
      chrome.tabs.reload();
      this.$swal(
        'Great!',
        'Scraping Completed!',
        'success'
      );
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
