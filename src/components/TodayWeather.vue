<template>
  <div class="d-flex justify-space-around align-center px-3" :style="todayBackground">
    <div class="col-6">
      <v-icon size="150" color="white">mdi-weather-{{weatherIcon}}</v-icon>
    </div>
    <div class="d-flex flex-column col-6">
      <p>Hoje</p>
      <p>{{forecast.main.temp}}°C</p>
      <p>{{forecast.weather[0].description.toLocaleString()}}</p>
      <p><small>Vento:</small> NO {{forecast.wind.speed}} km/h</p>
      <p><small>Humidade:</small>{{forecast.main.humidity}}%</p>
      <p><small>Pressão</small> {{forecast.main.pressure}}hPA</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TodayWeather",
    props: ['forecast'],
    data: () => ({
      todayBackground: {
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
        color: 'white'
      }
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