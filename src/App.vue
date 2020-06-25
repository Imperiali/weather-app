<template>
  <v-app>
    <div :style="customBackground"></div>
    <v-container class="d-flex justify-center" style="z-index: 2">
      <Home/>
    </v-container>
  </v-app>
</template>

<script>
import Home from './pages/Home';
import Geolocation from "./helpers/Geolocation";

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    location: ''
  }),

  created() {
    Geolocation.getGeolocation(this.showLocation)
  },

  methods: {
    showLocation(position) {
      console.log({'lat': position.coords.latitude, 'long': position.coords.longitude})
        return {'lat': position.coords.latitude, 'long': position.coords.longitude}
    }
  }

};
</script>

<style scoped>

</style>