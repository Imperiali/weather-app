<template>
  <v-card class="mx-auto" :style="customCard" tile>
    <InputArea/>
    <TodayWeather :style="forecastBackground.today"
                  :forecast="forecast.today"
                  @click="changeTempScale()"/>

    <NextDay :style="forecastBackground.tomorrow"
             day-title="Amanhã"
             day-option="tomorrow"
             @click="changeTempScale()"/>

    <NextDay :style="forecastBackground.afterTomorrow"
             day-title="Depois de amanhã"
             day-option="afterTomorrow"
             @click="changeTempScale()"/>
  </v-card>
</template>

<script>
  import InputArea from "../components/InputArea";
  import TodayWeather from "../components/TodayWeather";
  import {mapState} from "vuex";
  import NextDay from "../components/NextDay";
  import Style from "../helpers/Style";

  export default {
    name: "Home",
    components: {
      InputArea,
      TodayWeather,
      NextDay
    },
    data: () => ({
      customCard: Style.backgroundCustom(),
      tempCelsius: true,
    }),
    computed: {
      ...mapState(['forecast']),
      forecastBackground() {
        return {
          today: Style.backgroundColorTemp(this.forecast.today.main.temp),
          tomorrow: Style.backgroundColorTemp(this.forecast.tomorrow.main.temp),
          afterTomorrow: Style.backgroundColorTemp(this.forecast.afterTomorrow.main.temp),
        }
      }
    },
    methods: {
      changeTempScale() {
        this.tempCelsius = !this.tempCelsius
      }
    }
  }
</script>

<style scoped>

</style>