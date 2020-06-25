import * as axios from "axios";

function getGeolocation(callback) {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(callback);
  } else {
    return "Geolocation is not supported by this browser.";
  }
}

async function getLocationName({lat, long}) {
  const KEY = 'c63386b4f77e46de817bdf94f552cddf'
  let result = ''
  await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&` +
    `key=${KEY}&language=en`).then(res => {
    result = {
      'city': res.data.results[0].components.city,
      'state_code': res.data.results[0].components.state_code,
      'contry_code': res.data.results[0].components.contry_code,
    }
  })

  return result
}

export default {getGeolocation, getLocationName}