import * as axios from "axios";

const excludedValues = [
  'ISO',
  '(^_)',
  'formatted',
  'continent'
]

function resolveLocalName(local) {
  return Object.keys(local).map(val => {
    if (validName(val) && local[val] && local[val] !== '') {
      return local[val]
    }
  }).join().replace(/^,+/g,'');
}

function validName(val) {
  return !(new RegExp(excludedValues.join('|')).test(val))
}

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