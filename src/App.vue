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
          ...Style.customBackground(temp, this.getImageUrl),
        }
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
