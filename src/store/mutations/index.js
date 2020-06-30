import Weather from "../../helpers/Weather";

export default {
  SET_COORDS(state, position){
    state.region.coords = position
  },
  SET_REGION_STATUS(state, status){
    state.region.name.status = status
  },
  SET_REGION(state, region){
    state.region = {...state.region, ...region}
  },
  SET_WEATHER(state){
    state.forecast.status = 'loading'
    Weather.getWeather(state.region.localName).then(res => {
      state.forecast = {...state.forecast, ...res}
    })
  },
  SET_WEATHER_STATUS(state, status){
    state.forecast.status = status
  },
  SET_FORMATTED_NAME(state, formattedName){
    state.region.name.formatted = formattedName
  },
  SET_URL_IMAGE(state, image){
    state.image = image
  }
}
