<template>
  <v-card class="d-flex elevation-0 justify-space-around" :style="forecastBackground" tile>
    <v-col cols="6">
      <slot name="left"></slot>
    </v-col>
    <v-col  cols="6">
      <slot name="right"></slot>
    </v-col>
  </v-card>
</template>

<script>

  import Style from "../assets/Style";
  import {mapGetters} from "vuex";

  export default {
    name: "NextDay",
    props: ['day'],
    computed: {
      ...mapGetters(['getForecast']),
      forecastBackground() {
        let temp = this.getForecast[this.day] ? this.getForecast[this.day].main.temp : ''
        return Style.backgroundColorTemp(temp)
      }
    }
  }
</script>

<style scoped>

</style>
