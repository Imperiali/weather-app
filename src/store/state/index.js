export default {
  region: {
    name: {
      city: '',
      state_code: '',
      contry_code: '',
      formatted: '',
    },
    coords: {
      latitude: '',
      longitude: ''
    },
    status: ''
  },
  forecast: {
    status: 'loading',
    today:{
      main: {
        temp: '',
        pressure: '',
        humidity: '',
      },
      weather: [
        {
          main: "",
          description: "",
        }
      ],
      wind: {
        speed: '',
      },
    },
    tomorrow:{
      main:{
        temp: '',
      },
    },
    afterTomorrow:{
      main:{
        temp: '',
      }
    },
  },
  image:{
    status: '',
    url: ''
  }
}
