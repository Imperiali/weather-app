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
  import ImageUrlGenerator from "./helpers/ImageUrlGenerator";
  import {mapState} from "vuex";
  import Style from "./helpers/Style"

  export default {
    name: 'App',
    components: {
      Home,
    },
    data: () => ({
      imageBackground: {
        url: '',
      },
      customBackground: '',
    }),
    created() {
      this.getLocalAddress()
      this.resolveImgUrl()
    },
    computed: {
      ...mapState(['forecast']),
    },
    watch: {
      imageBackground() {
        this.customBackground = {
          ...Style.imageFilter(this.forecast.today.main.temp),
          background: 'no-repeat',
          backgroundImage: `url('${this.imageBackground.url}')`,
          position: 'fixed',
          left: '0',
          right: '0',
          zIndex: '1',
          display: 'block',
          width: '100vw',
          height: '100vh',
        }
      }
    },
    methods: {
      resolveImgUrl() {
        ImageUrlGenerator.getImage().then(res => {
          this.imageBackground = res
        })
      },
      getLocalAddress() {
        this.$store.dispatch('RESOLVE_LOCAL_ADDRESS')
      },
    }
  };
</script>

<style scoped>

</style>