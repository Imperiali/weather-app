<template>
    <div>
      <InputArea />
      <TodayWeather :forecast="forecast.today"/>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>