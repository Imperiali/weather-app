<template>
  <v-card class="card-custom" tile>
    <InputArea/>
    <TodayWeather :forecast="getForecast.today"/>

    <NextDay :day-title="$t('tomorrow')"
             day-option="tomorrow"/>

    <NextDay :day-title="$t('afterTomorrow')"
             day-option="afterTomorrow"/>
  </v-card>
</template>

<script>
  import InputArea from "../components/InputArea";
  import TodayWeather from "../components/TodayWeather";
  import {mapGetters} from "vuex";
  import NextDay from "../components/NextDay";

  export default {
    name: "Home",
    components: {
      InputArea,
      TodayWeather,
      NextDay
    },
    computed: {
      ...mapGetters(['getForecast']),
    },
  }
</script>

<style scoped lang="scss">
  @import "src/assets/style";
</style>
