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
        weather: [],
        temperature: []
      }
      const n = action.response.cnt;
      for(var i=0; i<n; i++){
        results.weather.push(action.response.list[i].weather[0].description);
        results.temperature.push(action.response.list[i].main.temp-273.15);
      }
      //console.log(results.weather[0]);
      var days = "";
      for(i=0; i<n; i++){
        days = "This day have " + results.weather[i] +
        ". With a temperature of " + results.temperature[i] + ".";
        _store.list.push(days);
      }
      /*var newTodo = 'Call '
        + action.response.results[0].user.name.first
        + ' about real estate in '
        + action.response.results[0].user.location.city;*/
      //_store.list.push(days);
      CityWeatherStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = CityWeatherStore;
