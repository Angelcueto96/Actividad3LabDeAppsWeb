var CityWeatherServerActions = require('../actions/CityWeatherServerActions');
var request = require('superagent');

module.exports = {

  get: function() {
    request.get('http://api.randomuser.me/')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        CityWeatherServerActions.receiveCity(response.body);
      });
  }
};
