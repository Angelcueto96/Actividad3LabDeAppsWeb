var CityWeatherServerActions = require('../actions/CityWeatherServerActions');
var request = require('superagent');

module.exports = {

  get: function(city) {
    request.get('http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&APPID=6e3b79cd5b053d2d98c781ac041b22b5')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        console.log(response.body);
        CityWeatherServerActions.receiveCity(response.body);
      });
  }
};
