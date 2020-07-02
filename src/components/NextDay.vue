<template>
  <DayRow :day="dayOption">
    <template v-slot:left>
      <v-spacer></v-spacer>
    </template>
    <template v-slot:right>
      <DayTemp :day-title="dayTitle" :day-option="dayOption"/>
    </template>
  </DayRow>
</template>

<script>
  import DayTemp from "./DayTemp";
  import DayRow from "./DayRow";

  export default {
    name: "NextDay",
    components:{
      DayTemp,
      DayRow
    },
    props: ['dayTitle', 'dayOption'],
  }
</script>
