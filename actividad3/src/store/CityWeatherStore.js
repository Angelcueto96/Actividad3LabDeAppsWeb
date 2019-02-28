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
  console.log("payload");
  console.log(action);

  switch(action.actionType) {

    case AppConstants.GET_CITY_RESPONSE:
      //_store.editing = true;
      console.log("GET CITY  RESPONSE TRIGGERED");
      Store.emit(CHANGE_EVENT);
      break;

    case AppConstants.GET_CITY:
      var newCity = 'Call '
        + action.response.results[0].user.name.first
        + ' about real estate in '
        + action.response.results[0].user.location.city;

      // Add the new todo to the list
      _store.list.push(newTodo);
      TodoStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = CityWeatherStore;
