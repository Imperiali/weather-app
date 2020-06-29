'use strict';

const express = require('express');
const axios = require('axios')
const {geocodeKey, weatherKey, path, port} = require('./config')

// Constants
const PORT = port || 3000;
const HOST = path || '0.0.0.0';

// App
const app = express();

app.use(function (req, res, next) {
  res.header('Accept', "*/*")
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Credentials', "true")
  next()
})

app.get('/image', async (request, response) => {
  let data = ''

  await axios('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    .then(res => {
      data = {status: 'SUCCESS', url:`https://www.bing.com${res.data.images[0].url}`}
      console.log('Returning data: ', data)
    }).catch(res => {
      data = {status: 'ERROR', url: 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' }
      console.error('Error: ', res.data)
    })
  response.status(200).send(data);
});

app.get('/geocode', async (request, response) => {
  let data = ''
  let params = request.query.location
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${params}&key=${geocodeKey}&language=en`
  console.log('Trying... ', url)

  await axios(url).then(res => {
      data = {
        status : 'SUCCESS',
        name: {
          ...res.data.results[0].components,
          formatted: res.data.results[0].formatted
        },
        coords: {
          latitude: res.data.results[0].geometry.lat,
          longitude: res.data.results[0].geometry.lng,
        }
      }
      console.log('Returning data: ', data)
    }).catch(res => {
      data = {status: 'ERROR', message: JSON.stringify(res)}
      console.error('Error: ', res)
    })
  response.status(200).send(data);
});

app.get('/weather', async (request, response) => {
  let data = ''
  let params = request.query.location
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${params}&` +
            `cnt=17&units=metric&lang=pt_br&APPID=${weatherKey}`
  console.log('Trying... ', url)

  await axios(url).then(res => {
    data =  {
      status: 'SUCCESS',
      today: res.data.list[0],
      tomorrow: res.data.list[8],
      afterTomorrow:res.data.list[16]
    }
    console.log('Returning data: ', data)
  }).catch(res => {
    data = {status: 'ERROR', message: JSON.stringify(res)}
    console.error('Error: ', res)
  })
  response.status(200).send(data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
