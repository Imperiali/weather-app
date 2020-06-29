import * as axios from "axios";

const tempConverter = (temp) => {
  return temp * 9 / 5 + 32
}

const getWeather = (local) => {
  return axios.get(`${process.env.VUE_APP_API_URL}/weather?location=${local}`).then(res => res.data)
    .catch(error => {
    console.log('Error in Get Weather', error)
  })
}

export default { getWeather, tempConverter }
