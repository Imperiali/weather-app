<template>
  <v-card class="customCard mx-auto" tile>
    <div>
      <InputArea />
      <TodayWeather :forecast="forecast.today"/>
    </div>
    <NextDay day-title="Amanhã" :temperature="forecast.tomorrow.main.temp + '°C'"/>
    <NextDay day-title="Depois de amanhã" :temperature="forecast.afterTomorrow.main.temp + '°C'"/>
  </v-card>
</template>

<script>
  import InputArea from "../components/InputArea";
  import TodayWeather from "../components/TodayWeather";
  import {mapState} from "vuex";
  import NextDay from "../components/NextDay";

  export default {
    name: "Home",
    components: {
      InputArea,
      TodayWeather,
      NextDay
    },
    computed: mapState(['forecast']),
  }
</script>

<style scoped>
  .customCard {
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>