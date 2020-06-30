<template>
  <DayRow>
    <template v-slot:left>
      <v-progress-circular indeterminate size="150" width="20" v-if="getForecastStatus === 'loading'"/>
      <v-icon class="icon-custom" v-else>mdi-{{weatherIcon}}</v-icon>
    </template>
    <template v-slot:right>
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
    </template>
  </DayRow>
</template>

<script>

  import DayTemp from "./DayTemp";
  import {mapGetters} from "vuex";
  import TempDetails from "./TempDetails";
  import DayRow from "./DayRow";

  export default {
    name: "TodayWeather",
    props: ['forecast'],
    components: {
      DayTemp,
      DayRow,
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
  .icon-custom{
    font-size: 200px;
  }
  @media only screen and (max-width: 420px) {
    .icon-custom{
      font-size: 150px;
    }
  }
</style>
