var AppDispatcher = require('../dispatcher/AppDispatcher');
var CityWeatherConstants = require('../constants/CityWeatherConstants');

module.exports = {

  receiveCity: function(response) {
    AppDispatcher.handleServerAction({
      actionType: CityWeatherConstants.GET_CITY_RESPONSE,
      response: response
    });
  },
};
