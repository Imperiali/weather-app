<template>
  <v-card class="d-flex flex-row elevation-0" tile>
    <v-spacer class="col-6"></v-spacer>
    <DayTemp class="col-6" :day-title="dayTitle" :day-option="dayOption"/>
  </v-card>
</template>

<script>
  import DayTemp from "./DayTemp";

  export default {
    name: "NextDay",
    components:{
      DayTemp,
    },
    props: ['dayTitle', 'dayOption'],
  }
</script>

<style scoped>

</style>