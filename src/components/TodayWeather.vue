<template>
  <div class="d-flex justify-space-around align-center px-3">
    <div class="col-6">
      <v-progress-circular indeterminate size="150" width="20" color="white" v-if="getForecastStatus === 'loading'"/>
      <v-icon size="150" color="white" v-else>mdi-{{weatherIcon}}</v-icon>
    </div>
    <div class="d-flex flex-column col-6 text--white">
      <DayTemp :day-title="$t('today')" day-option="today"/>

      <p :style="{textTransform:'capitalize'}">{{forecast.weather[0].description}}</p>

      <TempDetails>
        <small>{{ $t('wind') }}: </small>NO {{forecast.wind.speed}} km/h
      </TempDetails>
      <TempDetails>
        <small>{{ $t('humidity') }}: </small>{{forecast.main.humidity}}%
      </TempDetails>
      <TempDetails>
        <small>{{ $t('pressure') }}: </small> {{forecast.main.pressure}}hPA
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
