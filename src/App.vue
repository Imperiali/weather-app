<template>
  <v-app>
    <div :style="customBackground"></div>
    <transition name="fade" appear>
      <v-container class="d-flex justify-center" style="z-index: 2">
        <Home/>
      </v-container>
    </transition>
  </v-app>
</template>

<script>
  import Home from './pages/Home';
  import Style from "./assets/Style"
  import {mapGetters} from "vuex";

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
      customBackground() {
        let temp = this.getForecast.status === 'ERROR' ? null : this.getForecast.today.main.temp
        return {
          ...Style.imageFilter(temp),
          ...Style.homeBackground(this.getImageUrl.url),
        }
      }
    },
    methods: {
      getLocalAddress() {
        this.$store.dispatch('RESOLVE_LOCAL_ADDRESS')
      },
      resolveImgUrl() {
        this.$store.dispatch('RESOLVE_URL_IMAGE')
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
