import * as axios from "axios";

const celsiusToFahrenheit = (temp) => {
  return (temp * 9 / 5 + 32).toFixed(2)
}

const getWeather = (local) => {
  return axios.get(`${process.env.VUE_APP_API_URL}/weather?location=${local}`).then(res => res.data)
    .catch(error => {
    console.log('Error in Get Weather', error)
  })
}

export default { getWeather, celsiusToFahrenheit }
