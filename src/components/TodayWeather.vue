<template>
  <div class="d-flex justify-space-around align-center px-3">
    <div class="col-6">
      <v-icon size="150" color="white">mdi-{{weatherIcon}}</v-icon>
    </div>
    <div class="d-flex flex-column col-6 text--white">
      <DayTemp day-title="hoje" day-option="today" />
      <p>{{forecast.weather[0].description.toLocaleString()}}</p>

      <TempDetails>
        <small>Vento:</small> NO {{forecast.wind.speed}} km/h
      </TempDetails>
      <TempDetails>
        <small>Humidade:</small>{{forecast.main.humidity}}%
      </TempDetails>
      <TempDetails>
        <small>Pressão</small> {{forecast.main.pressure}}hPA
      </TempDetails>
    </div>
  </div>
</template>

<script>

  import DayTemp from "./DayTemp";
  import {mapGetters} from "vuex";
  import TempDetails from "./TempDetails";

  export default {
    name: "TodayWeather",
    props: ['forecast'],
    components: {
      DayTemp,
      TempDetails
    },
    computed: {
      ...mapGetters(['getForecastStatus']),
      weatherIcon() {
        const climate = this.forecast.weather[0].main.toLowerCase()
        if (this.getForecastStatus !== 'SUCCESS') {
          return 'alert-decagram-outline'
        }
        switch (climate) {
          case 'clouds':
            return 'weather-cloudy'
          case 'clear':
            return 'weather-sunny'
          case 'rain':
            return 'weather-rainy'
          default:
            return 'alert-decagram-outline'
        }
      }
    }
  }
</script>

<style scoped>

</style>