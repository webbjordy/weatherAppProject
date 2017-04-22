var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0b1923316484ad353275b23874abd3a7&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error("This isn't the weather you're looking for :(");
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error("This isn't the weather you're looking for :(");
    })
  }
}



// API key 0b1923316484ad353275b23874abd3a7
