import ImageUrlGenerator from "../../helpers/ImageUrlGenerator";
import Geolocation from "../../helpers/Geolocation";

export default {
  resolveUrlmage({commit}) {
    ImageUrlGenerator.getImage().then(res => {
      commit('SET_URL_IMAGE', res)
    })
  },
  resolveLocalAddress({commit}) {
    Geolocation.getGeolocation(({coords}) => {
      let position = {'latitude': coords.latitude, 'longitude': coords.longitude}
      commit('SET_COORDS', position)
      commit('SET_REGION_STATUS', 'ERROR')
      Geolocation.getLocationName(position).then(res => {
        commit('SET_REGION', res)
        commit('SET_WEATHER')
      })
    }, (err) => {
      console.log('Error on request location', err)
      commit('SET_REGION_STATUS', 'ERROR')
      commit('SET_WEATHER_STATUS', 'ERROR')
    })
  },
  resolveInputAddress({commit}, localName) {
    commit('SET_FORMATTED_NAME', localName)
    commit('SET_REGION_STATUS', 'ERROR')
    Geolocation.getLocationCoords(localName).then(res => {
      commit('SET_REGION', res)
      commit('SET_WEATHER')
    })
  },
}
