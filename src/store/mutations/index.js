import Weather from "../../helpers/Weather";

export default {
  SET_COORDS(state, position){
    state.region.coords = position
  },
  SET_STATUS(state, definition){
    state[definition.name].status = definition.status
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
  SET_FORMATTED_NAME(state, formattedName){
    state.region.name.formatted = formattedName
  },
  SET_URL_IMAGE(state, image){
    state.image = image
  }
}
