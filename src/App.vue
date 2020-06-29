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
  import Style from "./helpers/Style"
  import {mapGetters} from "vuex";

  export default {
    name: 'App',
    components: {
      Home,
    },
    data: () => ({
    }),
    created() {
      this.getLocalAddress()
      this.resolveImgUrl()
    },
    computed: {
      ...mapGetters(['getForecast', 'getImageUrl']),
      customBackground() {
        return {
          ...Style.imageFilter(this.getForecast.today.main.temp),
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

</style>