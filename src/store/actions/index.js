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
      commit('SET_STATUS', {name: 'region', status:'ERROR'})
      Geolocation.getLocationName(position).then(res => {
        commit('SET_REGION', res)
        commit('SET_WEATHER')
      })
    })
  },
  resolveInputAddress({commit}, localName) {
    commit('SET_FORMATTED_NAME', localName)
    commit('SET_STATUS', {name: 'region', status:'ERROR'})
    Geolocation.getLocationCoords(localName).then(res => {
      commit('SET_REGION', res)
      commit('SET_WEATHER')
    })
  },
}
