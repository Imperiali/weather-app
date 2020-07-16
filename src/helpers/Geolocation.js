import axios from "axios";

const excludedValues = [
  'ISO',
  '(^_)',
  'formatted',
  'continent'
]

const resolveLocalName = (local) => {
  return Object.keys(local).map(val => {
    if (validName(val) && local[val] && local[val] !== '') {
      return local[val]
    }
  }).join().replace(/^,+/g,'');
}

const validName = (val) => {
  return !(new RegExp(excludedValues.join('|')).test(val))
}

const getGeolocation = (accepted, rejected) => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(accepted, rejected);
  } else {
    return "Geolocation is not supported by this browser.";
  }
}

const getLocationInfo = async(location) => {
  let data = ''
  let params = `?location=${location}`
  await axios(`${process.env.VUE_APP_API_URL}/geocode${params}`)
    .then(res => {
      data = {
        ...res.data,
        status: res.data.status,
        localName: resolveLocalName(res.data.name)
      }
    })
    .catch(err => err)
  return data
}

const getLocationName = async ({latitude, longitude}) => {
  try {
    return await getLocationInfo(latitude + ',' + longitude)
  }catch (e) {
    console.log('Error in Get Location Name', e)
  }
}

const getLocationCoords = async(locationName) => {
  locationName = typeof locationName === 'string' ? locationName : resolveLocalName(locationName)
  try {
    return await getLocationInfo(locationName)
  }catch (e) {
    console.log('Error: ', e)
  }
}

export default {getGeolocation, getLocationName, getLocationCoords}
