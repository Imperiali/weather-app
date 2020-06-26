import Vue from 'vue'
import Vuex from 'vuex'
import Geolocation from "../helpers/Geolocation";
import Weather from "../helpers/Weather";

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
      }
    },
    forecast: {
      today:{
        main: {
          temp: 27.34,
          pressure: 1013,
          humidity: 57,
        },
        weather: [
          {
            main: "Clouds",
            description: "nublado",
          }
        ],
        wind: {
          speed: 3.09,
        },
      },
      tomorrow:{
        main:{
          temp: 27.34,
        },
      },
      afterTomorrow:{
        main:{
          temp: 27.34,
        }
      },
    },
  },
  getters: {
    getRegionName: (state) => {
      return state.region.name
    },
    getRegionCoords: (state) => {
      return state.region.coords
    },
    getWeather: (state) => {
      return state.forecast
    },
    getFahrenheit: (state) => (day) => {
      return Weather.tempConverter(state.forecast[day].main.temp) + '°F'
    },
    getCelcius: (state) => (day) => {
      return state.forecast[day].main.temp + '°C'
    }
  },
  mutations: {
    RESOLVE_LOCAL_ADDRESS(state) {
      Geolocation.getGeolocation(({coords}) => {
        state.region.coords = {'latitude': coords.latitude, 'longitude': coords.longitude}
        Geolocation.getLocationName(state.region.coords).then(res => {
          state.region = {...state.region, ...res}
          Weather.getWeather(state.region.localName).then(res => {
            state.forecast = res
          })
        })
      })
    },
    RESOLVE_INPUT_ADDRESS(state, localName) {
      state.region.name.formatted = localName
      Geolocation.getLocationCoords(localName).then(res => {
        state.region = {...state.region, ...res}
        Weather.getWeather(state.region.localName).then(res => {
          state.forecast = res
        })
      })
    },
  },
  actions: {
    RESOLVE_LOCAL_ADDRESS({commit}) {
      commit('RESOLVE_LOCAL_ADDRESS')
    },
    RESOLVE_INPUT_ADDRESS({commit}, payload) {
      commit('RESOLVE_INPUT_ADDRESS', payload)
    },
  },
})
