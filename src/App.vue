<template>
  <v-app>
    <div class="home" :class="customBackground + '-filter'" :style="imageBackground"></div>
    <transition name="fade" appear>
      <v-container class="d-flex justify-center" style="z-index: 2">
        <Home/>
      </v-container>
    </transition>
  </v-app>
</template>

<script>
  import Home from './pages/Home';
  import {mapGetters} from "vuex";
  import Weather from "./helpers/Weather"

  export default {
    name: 'App',
    components: {
      Home,
    },
    created() {
      this.getLocalAddress()
      this.resolveImgUrl()
    },
    computed: {
      ...mapGetters(['getForecast', 'getImageUrl']),
      imageBackground(){
        return {backgroundImage: `url('${this.getImageUrl}')`}
      },
      customBackground() {
        let temp = this.getForecast.status === 'ERROR' ? null : this.getForecast.today.main.temp
        return Weather.defineTemp(temp)
      }
    },
    methods: {
      getLocalAddress() {
        this.$store.dispatch('resolveLocalAddress')
      },
      resolveImgUrl() {
        this.$store.dispatch('resolveUrlmage')
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "assets/style";
</style>
