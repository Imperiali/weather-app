const dotenv = require('dotenv');
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
});
module.exports = {
  geocodeKey: process.env.GEOCODE_KEY,
  weatherKey: process.env.WEATHER_KEY,
  port: process.env.PORT,
  host: process.env.HOST,
};
