<template>
  <v-card class="d-flex flex-row elevation-0" tile>
    <v-spacer class="col-6"></v-spacer>
    <DayTemp class="col-6" :day-title="dayTitle" :day-option="dayOption"/>
  </v-card>
</template>

<script>
  export default {
    name: "NextDay",
    props: ['dayTitle', 'temperature']
  }
</script>

<style scoped>

</style>