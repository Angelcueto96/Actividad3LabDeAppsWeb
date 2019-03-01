var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/CityWeatherConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  list: [],
  editing: false
};

var CityWeatherStore = ObjectAssign( {}, EventEmitter.prototype, {
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
      // Add the data defined in the TodoActions
      // which the View will pass as a payload
      _store.editing = true;
      CityWeatherStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.GET_CITY_RESPONSE:
      // Get weather from response
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
