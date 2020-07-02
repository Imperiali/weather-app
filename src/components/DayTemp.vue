<template>
  <div @click="tempCelsius = !tempCelsius" class="mb-5 day-temp">
    <strong class="d-flex justify-start mb-0">{{dayTitle.toUpperCase()}}</strong>

    <v-progress-linear indeterminate color="black" v-if="getForecastStatus === 'loading'"/>

    <p class="d-flex justify-start ma-0" v-else-if="getForecastStatus === 'SUCCESS'">
      {{tempCelsius ? getCelcius(dayOption) : getFahrenheit(dayOption)}}
    </p>

    <p v-else>{{$t('WeatherError')}}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "DayTemp",
    props: ['dayTitle', 'dayOption'],
    data:() => ({
      tempCelsius: true
    }),
    computed:{
      ...mapGetters(['getCelcius', 'getFahrenheit', 'getForecastStatus'])
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/style";
</style>
