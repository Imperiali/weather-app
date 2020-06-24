<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <Home/>
    </v-container>
  </v-app>
</template>

<script>
import Home from './pages/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({

  }),

};
</script>

<style scoped>

</style>