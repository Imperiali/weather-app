<template>
  <v-card class="card-custom" :style="backgroundCustom" tile>
    <InputArea/>
    <TodayWeather :style="forecastBackground.today"
                  :forecast="getForecast.today"/>

    <NextDay :style="forecastBackground.tomorrow"
             :day-title="$t('tomorrow')"
             day-option="tomorrow"/>

    <NextDay :style="forecastBackground.afterTomorrow"
             :day-title="$t('afterTomorrow')"
             day-option="afterTomorrow"/>
  </v-card>
</template>

<script>
  import InputArea from "../components/InputArea";
  import TodayWeather from "../components/TodayWeather";
  import {mapGetters} from "vuex";
  import NextDay from "../components/NextDay";
  import Style from "../assets/Style";

  export default {
    name: "Home",
    components: {
      InputArea,
      TodayWeather,
      NextDay
    },
    data: () => ({
      backgroundCustom: Style.backgroundCustom(),
      tempCelsius: true,
    }),
    computed: {
      ...mapGetters(['getForecast']),
      forecastBackground() {
        return {
          today: Style.backgroundColorTemp(this.getForecast.today.main.temp),
          tomorrow: Style.backgroundColorTemp(this.getForecast.tomorrow.main.temp),
          afterTomorrow: Style.backgroundColorTemp(this.getForecast.afterTomorrow.main.temp),
        }
      }
    },
  }
</script>

<style scoped>
  .card-custom{
    width: 60vw;
  }
  @media only screen and (max-width: 600px) {
    .card-custom{
      width: 100vw;
    }
  }
</style>
