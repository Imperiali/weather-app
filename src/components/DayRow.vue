<template>
  <v-card class="d-flex elevation-0 justify-space-around" tile>
    <v-col cols="6">
      <slot name="left"></slot>
    </v-col>
    <v-col  cols="6">
      <slot name="right"></slot>
    </v-col>
  </v-card>
</template>

<script>

  export default {
    name: "NextDay",
  }
</script>

<style scoped>

</style>
