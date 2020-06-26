'use strict';

const express = require('express');
const axios = require('axios')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

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

app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}`);