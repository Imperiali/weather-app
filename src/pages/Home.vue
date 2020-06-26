<template>
  <v-card class="mx-auto" :style="customCard" tile>
    <div>
      <InputArea/>
      <TodayWeather :style="forecastBackground.today"
                    :forecast="forecast.today"
                    :temperature="tempCelsius ? this.$store.getters.getFahrenheit('today') : this.$store.getters.getCelcius('today')"
                    @click="changeTempScale()"
      />
    </div>
    <NextDay :style="forecastBackground.tomorrow" day-title="Amanhã"
             :temperature="tempCelsius ? this.$store.getters.getFahrenheit('tomorrow') : this.$store.getters.getCelcius('tomorrow')"
             @click="changeTempScale()"/>
    <NextDay :style="forecastBackground.afterTomorrow" day-title="Depois de amanhã"
             :temperature="tempCelsius ? this.$store.getters.getFahrenheit('afterTomorrow') : this.$store.getters.getCelcius('afterTomorrow')"
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
      temp: ''
    }),
    computed: {
      ...mapState(['forecast']),
      forecastBackground() {
        return {
          today: Style.imageFilter(this.forecast.today.main.temp),
          tomorrow: Style.imageFilter(this.forecast.tomorrow.main.temp),
          afterTomorrow: Style.imageFilter(this.forecast.afterTomorrow.main.temp),
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