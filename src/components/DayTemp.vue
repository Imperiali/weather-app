<template>
  <div @click="tempCelsius = !tempCelsius">
    <p class="d-flex justify-start">{{dayTitle}}</p>
    <p class="d-flex justify-start ma-0">
      {{tempCelsius ? getCelcius(dayOption) : getFahrenheit(dayOption)}}</p>
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
      ...mapGetters(['getCelcius', 'getFahrenheit'])
    }
  }
</script>

<style scoped>

</style>