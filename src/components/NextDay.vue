<template>
  <v-card class="d-flex flex-row " tile>
    <v-spacer class="col-6"></v-spacer>
    <div class="col-6">
      <p class="d-flex justify-start">{{dayTitle}}</p>
      <p class="d-flex justify-start ma-0">{{temperature}}</p>
    </div>
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