var AppDispatcher = require('../dispatcher/AppDispatcher');
var CityWeatherConstants = require('../constants/CityWeatherConstants');
var CityWeatherAPI = require('../utils/CityWeatherAPI');

module.exports = {
  getCity: function(city) {
    AppDispatcher.handleViewAction({
      actionType: CityWeatherConstants.GET_CITY,
      city: city,
  });

    CityWeatherAPI.get();
  }

};
