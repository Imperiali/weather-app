<template>
  <DayRow day="today">
    <template v-slot:left>
      <v-progress-circular indeterminate size="150" width="20" v-if="forecastStatus.loading"/>
      <v-icon class="icon-custom" v-else>mdi-{{weatherIcon}}</v-icon>
    </template>
    <template v-slot:right>
      <DayTemp :day-title="$t('today')" day-option="today"/>
      <p :style="{textTransform:'capitalize'}" v-if="forecastStatus.success">{{forecast.weather[0].description}}</p>

      <TempDetails v-if="forecastStatus.success">
        <template v-slot:key>{{ $t('wind') }}:</template>
        <template v-slot:value>
          NO {{forecast.wind.speed}} km/h
        </template>
      </TempDetails>
      <TempDetails v-if="forecastStatus.success">
        <template v-slot:key>  {{ $t('humidity') }}: </template>
        <template v-slot:value> {{forecast.main.humidity}}% </template>
      </TempDetails>
      <TempDetails v-if="forecastStatus.success">
        <template v-slot:key> {{ $t('pressure') }}: </template>
        <template v-slot:value> {{forecast.main.pressure}}hPA </template>
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
      forecastStatus() {
        return {
          loading: this.getForecastStatus === 'loading',
          success: this.getForecastStatus === 'SUCCESS',
          error: this.getForecastStatus === 'ERROR',
        }
      },
      weatherIcon() {
        const climate = this.forecast ? this.forecast.weather[0].main.toLowerCase() : ''
        if (this.forecastStatus.error) {
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

<style scoped lang="scss">
  @import "src/assets/style";
</style>
