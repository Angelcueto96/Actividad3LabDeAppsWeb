var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/CityWeatherConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  list: [],
  editing: false
};

var CityWeatherStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function() {
    return _store;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case AppConstants.GET_CITY:
      _store.editing = true;
      CityWeatherStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.GET_CITY_RESPONSE:
      var results = {
        city: '',
        country: '',
        temperature: [],
        pressure: [],
        humidity: [],
        weather: [],
        wind: [],
		date: [],
      }
      const n = action.response.cnt;
      //const n = 5;
	  results.city = action.response.city.name;
      results.country = action.response.city.country;
      for(var i=0; i<n; i++){
        results.temperature.push(Math.round(action.response.list[i].main.temp-273.15));
        results.pressure.push(action.response.list[i].main.pressure);
        results.humidity.push(action.response.list[i].main.humidity);
        results.weather.push(action.response.list[i].weather[0].description);
        results.wind.push(action.response.list[i].wind.speed);
		results.date.push(action.response.list[i].dt_txt);
      }
      var days = "";
      for(i=0; i<n; i++){
        days = "In the city of "+ results.city + " in " +
               results.country + " on " + results.date[i] +
               ", the temperature is " + results.temperature[i] + "°C, " +
               "with " + results.weather[i] + ". " +
               "The pressure is " + results.pressure[i] + "hPa, " +
               " humidity is " + results.humidity[i] + "%, " +
               "and the wind speed is " + results.wind[i] + "m/s.";
        _store.list.push(days);
      }
      CityWeatherStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = CityWeatherStore;
