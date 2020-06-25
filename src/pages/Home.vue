<template>
    <div>
      <InputArea />
      <TodayWeather :forecast="forecast.today"/>
    </div>
    <NextDay day-title="Amanhã" :temperature="forecast.tomorrow.main.temp + '°C'"/>
    <NextDay day-title="Depois de amanhã" :temperature="forecast.afterTomorrow.main.temp + '°C'"/>
  </v-card>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>