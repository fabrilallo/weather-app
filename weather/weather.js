const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/f8dd94fc25cd09567200813c721325f2/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
      if (error) {
        callback('Unable to connect to Forecast.io Servers.');
      }
      else if (!error && response.statusCode === 200) {
        callback(undefined,{
          realTemperature: body.currently.temperature,
          apparentTemperature:  body.currently.apparentTemperature
        });
      }
      else {
        callback('Unable to fetch weather.');
      }
  });

}

module.exports = {
  getWeather
}
