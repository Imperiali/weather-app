import * as axios from "axios";

const KEY = 'c63386b4f77e46de817bdf94f552cddf'

function getGeolocation(callback) {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(callback);
  } else {
    return "Geolocation is not supported by this browser.";
  }
}

function getLocationInfo(location) {
  return axios.get(`http://localhost:3000/geocode?location=${location}`)
    .then(res => {
      return {
        ...res.data,
        localName: resolveLocalName(res.data.name)
      }
    })
    .catch(err => err)
}

function getLocationName({latitude, longitude}) {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&` +
    `key=${KEY}&language=en`).then(res => {
    return {
      name: {
        city: res.data.results[0].components.city,
        state_code: res.data.results[0].components.state_code,
        contry_code: res.data.results[0].components.contry_code,
        formatted: res.data.results[0].formatted
      }
    }
  })
}

function getLocationCoords(locationName) {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${locationName}&` +
    `key=${KEY}&language=en`).then(res => {
    return {
      name:{
        city: res.data.results[0].components.city || res.data.results[0].components.country,
        state_code: res.data.results[0].components.state_code || res.data.results[0].components.country_code,
        contry_code: res.data.results[0].components.contry_code || res.data.results[0].components.continent,
        formatted: res.data.results[0].formatted
      },
      coords:{
        latitude: res.data.results[0].geometry.lat,
        longitude: res.data.results[0].geometry.lng,
      }
    }
  })
}

export default {getGeolocation, getLocationName, getLocationCoords}