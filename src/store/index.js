import Vue from 'vue'
import Vuex from 'vuex'
import Geolocation from "../helpers/Geolocation";
import Weather from "../helpers/Weather";
import ImageUrlGenerator from "../helpers/ImageUrlGenerator";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    region: {
      name: {
        city: '',
        state_code: '',
        contry_code: '',
        formatted: '',
      },
      coords: {
        latitude: '',
        longitude: ''
      },
      status: 'Error'
    },
    forecast: {
      status: 'Error',
      today:{
        main: {
          temp: '',
          pressure: '',
          humidity: '',
        },
        weather: [
          {
            main: "",
            description: "",
          }
        ],
        wind: {
          speed: '',
        },
      },
      tomorrow:{
        main:{
          temp: '',
        },
      },
      afterTomorrow:{
        main:{
          temp: '',
        }
      },
    },
    image:{
      status: 'error',
      url: ''
    }
  },
  getters: {
    getRegionName: (state) => {
      return state.region.name
    },
    getRegionCoords: (state) => {
      return state.region.coords
    },
    getForecast: (state) => {
      return state.forecast
    },
    getFahrenheit: (state) => (day) => {
      return Weather.tempConverter(state.forecast[day].main.temp) + '°F'
    },
    getCelcius: (state) => (day) => {
      return state.forecast[day].main.temp + '°C'
    },
    getRegionStatus: (state) => {
      return state.region.status
    },
    getForecastStatus: (state) => {
      return state.forecast.status
    },
    getImageUrl:(state) => {
      return state.image
    }
  },
  mutations: {
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
      Weather.getWeather(state.region.localName).then(res => {
        state.forecast = res
      })
    },
    SET_FORMATTED_NAME(state, formattedName){
      state.region.name.formatted = formattedName
    },
    SET_URL_IMAGE(state, image){
      state.image = image
    }
  },
  actions: {
    RESOLVE_URL_IMAGE({commit}) {
      ImageUrlGenerator.getImage().then(res => {
        commit('SET_URL_IMAGE', res)
      })
    },
    RESOLVE_LOCAL_ADDRESS({commit}) {
      Geolocation.getGeolocation(({coords}) => {
        let position = {'latitude': coords.latitude, 'longitude': coords.longitude}
        commit('SET_COORDS', position)
        commit('SET_STATUS', {name: 'region', status:'ERROR'})
        Geolocation.getLocationName(position).then(res => {
          commit('SET_REGION', res)
          commit('SET_WEATHER')
        })
      })
    },
    RESOLVE_INPUT_ADDRESS({commit}, localName) {
      commit('SET_FORMATTED_NAME', localName)
      commit('SET_STATUS', {name: 'region', status:'ERROR'})
      Geolocation.getLocationCoords(localName).then(res => {
        commit('SET_REGION', res)
        commit('SET_WEATHER')
      })
    },
  },
})
