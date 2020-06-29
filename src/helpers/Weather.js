import * as axios from "axios";

function getWeather(local) {
  return axios.get(`http://localhost:3000/weather?location=${local}`).then(res => res.data)
    .catch(error => {
    console.log('Error in Get Weather', error)
  })
}

function tempConverter(temp){
  return temp * 9 / 5 + 32
}

export default { getWeather, tempConverter }