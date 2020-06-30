<template>
  <v-card class="card-custom" :style="backgroundCustom" tile>
    <InputArea/>
    <TodayWeather :forecast="getForecast.today"/>

    <NextDay :day-title="$t('tomorrow')"
             day-option="tomorrow"/>

    <NextDay :day-title="$t('afterTomorrow')"
             day-option="afterTomorrow"/>
  </v-card>
</template>

<script>
  import InputArea from "../components/InputArea";
  import TodayWeather from "../components/TodayWeather";
  import {mapGetters} from "vuex";
  import NextDay from "../components/NextDay";
  import Style from "../assets/Style";

  export default {
    name: "Home",
    components: {
      InputArea,
      TodayWeather,
      NextDay
    },
    data: () => ({
      backgroundCustom: Style.backgroundCustom(),
    }),
    computed: {
      ...mapGetters(['getForecast']),
    },
  }
</script>

<style scoped>
  .card-custom{
    width: 60vw;
  }
  @media only screen and (max-width: 600px) {
    .card-custom{
      width: 100vw;
    }
  }
</style>
