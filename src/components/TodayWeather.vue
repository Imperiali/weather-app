<template>
  <div class="d-flex justify-space-around align-center px-3">
    <div class="col-6">
      <v-icon size="150" color="white">mdi-weather-{{weatherIcon}}</v-icon>
    </div>
    <div class="d-flex flex-column col-6 text--white">
      <DayTemp day-title="hoje" day-option="today" />
      <p>{{forecast.weather[0].description.toLocaleString()}}</p>
      <p><small>Vento:</small> NO {{forecast.wind.speed}} km/h</p>
      <p><small>Humidade:</small>{{forecast.main.humidity}}%</p>
      <p><small>Pressão</small> {{forecast.main.pressure}}hPA</p>
    </div>
  </div>
</template>

<script>

  import DayTemp from "./DayTemp";

  export default {
    name: "TodayWeather",
    props: ['forecast'],
    components:{
      DayTemp
    },
    data:() => ({
    }),
    computed: {
      weatherIcon() {
        const climate = this.forecast.weather[0].main.toLowerCase()
        switch (climate) {
          case 'clouds':
            return 'cloudy'
          case 'clear':
            return 'sunny'
          case 'rain':
            return 'rainy'
          default:
            return 'sunny-off'
        }
      }
    }
  }
</script>

<style scoped>

</style>