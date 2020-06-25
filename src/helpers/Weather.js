import * as axios from "axios";

async function getWeather({city, state_code, country_code}) {
  const KEY = '7ba73e0eb8efe773ed08bfd0627f07b8'
  let result = ''
  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city || ''},${state_code || ''},${country_code | ''}&` +
    `cnt=17&units=metric&lang=pt_br&APPID=${KEY}`).then(res => {
    result = {
      'today': res.data.list[0],
      'tomorrow': res.data.list[8],
      'afterTomorrow':res.data.list[16]
    }
  })

  return result
}

export default { getWeather }