<template>
  <v-card :class="forecastBackground" class="d-flex elevation-0 justify-space-around" tile>
    <v-col align-self="center" class="d-flex justify-center" cols="6">
      <slot name="left"></slot>
    </v-col>
    <v-col cols="6">
      <slot name="right"></slot>
    </v-col>
  </v-card>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "NextDay",
    props: ['day'],
    computed: {
      ...mapGetters(['getForecast']),
      forecastBackground() {
        let temp = this.getForecast[this.day] ? this.getForecast[this.day].main.temp : ''
        if (!temp) {
          return 'default'
        } else if (temp >= 30) {
          return 'hot'
        } else if (temp <= 15) {
          return 'cold'
        } else {
          return 'normal'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/style";
</style>
