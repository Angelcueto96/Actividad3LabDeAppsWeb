var AppDispatcher = require('../dispatcher/AppDispatcher');
var CityWeatherConstants = require('../constants/CityWeatherConstants');
var CityWeatherAPI = require('../utils/CityWeatherAPI');

module.exports = {
  getCity: function(city) {
    console.log(city + " received");
    AppDispatcher.handleViewAction({
      actionType: CityWeatherConstants.GET_CITY,
      city: city,
    });
    CityWeatherAPI.get(city);
  }
};
