var AppDispatcher = require('../dispatcher/AppDispatcher');
var CityWeatherConstants = require('../constants/CityWeatherConstants');
var CityWeatherAPI = require('../utils/CityWeatherAPI');

module.exports = {

  searchCity: function() {
    AppDispatcher.handleViewAction({
      actionType: CityWeatherConstants.SEARCH_CITY
    });
  },

  getCity: function() {
    AppDispatcher.handleViewAction({
      actionType: CityWeatherConstants.GET_CITY
    });

    CityWeatherAPI.get();
  }

};
