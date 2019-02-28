var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/CityWeatherConstants');

module.exports = {

  receiveCity: function(response) {
    AppDispatcher.handleServerAction({
      actionType: CityWeatherConstants.GET_CITY_RESPONSE,
      response: response
    });
  },
};
