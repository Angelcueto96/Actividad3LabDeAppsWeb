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
      // Get weather from response
      console.log("hi from hell");
      var results = {
        weather: [],
        temperature: []
      }

      for(var i=0; i<5; i++){ //change maybe to display all
        results.weather.push(action.response.list[i].weather[0]);
        results.temperature.push(action.response.list[i].main.temp);
        //console.log(action.response.list[i].weather[0]);
      }
      var days = "day1";
      /*var newTodo = 'Call '
        + action.response.results[0].user.name.first
        + ' about real estate in '
        + action.response.results[0].user.location.city;*/
      _store.list.push(days);
      CityWeatherStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = CityWeatherStore;
