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
  return getLocationInfo(latitude + ',' + longitude)
    .then(res => res )
    .catch(error => {
      console.log('Error in Get Location Name', error)
      return error
    })
}

function getLocationCoords(locationName) {
  locationName = typeof locationName === 'string' ? locationName : resolveLocalName(locationName)
  return getLocationInfo(locationName)
    .then(res => res)
    .catch(error => {
      console.log('Error in Get Location Coords', error)
      return error
    })
}

export default {getGeolocation, getLocationName, getLocationCoords}