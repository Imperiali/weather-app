import * as axios from "axios";

function getWeather(local) {
  const KEY = '7ba73e0eb8efe773ed08bfd0627f07b8'
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${local}&` +
    `cnt=17&units=metric&lang=pt_br&APPID=${KEY}`).then(res => {
    return {
      today: res.data.list[0],
      tomorrow: res.data.list[8],
      afterTomorrow:res.data.list[16]
    }
  }).catch(error => {
    console.log('Error in Get Weather', error)
    return {
      today: '',
      tomorrow: '',
      afterTomorrow: ''
    }
  })
}

function tempConverter(temp){
  return temp * 9 / 5 + 32
}

export default { getWeather, tempConverter }