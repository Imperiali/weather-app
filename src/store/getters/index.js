import Weather from "../../helpers/Weather";

export default {
  getRegionName: (state) => {
    return state.region.name
  },
  getRegionCoords: (state) => {
    return state.region.coords
  },
  getForecast: (state) => {
    return state.forecast
  },
  getFahrenheit: (state) => (day) => {
    return Weather.celsiusToFahrenheit(state.forecast[day].main.temp) + '°F'
  },
  getCelcius: (state) => (day) => {
    return state.forecast[day].main.temp + '°C'
  },
  getRegionStatus: (state) => {
    return state.region.status
  },
  getForecastStatus: (state) => {
    return state.forecast.status
  },
  getImageUrl: (state) => {
    return state.image.url
  }
}
