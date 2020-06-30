<template>
  <v-card-title class="cardTitleCustom">
    <v-text-field
      :value="region.name.formatted"
      :label="$t('address')"
      data-test="inputTest"
      @change="searchAddress">
      <v-icon @click="requestLocation"
              slot="prepend"
              :title="$t('AskLocation')">
        mdi-compass-outline
      </v-icon>
    </v-text-field>
  </v-card-title>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "InputArea",
    computed: mapState(['region']),
    methods: {
      searchAddress(e){
        this.$store.dispatch('resolveInputAddress', e)
      },
      requestLocation(){
        this.$store.dispatch('resolveLocalAddress')
      }
    }
  }
</script>

<style scoped>
  .cardTitleCustom {
    background-color: rgba(255, 255, 255, 1);
  }
</style>
