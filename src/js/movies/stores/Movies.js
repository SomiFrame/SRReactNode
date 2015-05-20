var DOUBAN_Dispatcher = require('../dispatcher/DouBanDispatcher');
var DOUBAN_Movie_APIUtils = require('../../constants/common');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _movies = [];
var _MoviesDataSource = {
  fill: function(data) {
    _movies = data;
  }
};

var MovieDTO = {
  getMoviesByName: function(name) {
    return DOUBAN_Movie_APIUtils.WebAPIUtils.getMoviesByName(name).done(function(data) {
      _MoviesDataSource.fill(data);
      MovieStore.emitChange();
    });
  }
};

var MovieStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addEventListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _movies;
  },

  dispatcherIndex: DOUBAN_Dispatcher.register(function(payload) {
    var action = payload.action;
    var queryParam = payload.queryParam;
    switch(action) {
      case DOUBAN_Movie_APIUtils.ACTION_TYPE['SEARCH:NAME']:
        MovieDTO.getMoviesByName(queryParam);
        break;
      case DOUBAN_Movie_APIUtils.ACTION_TYPE['SEARCH:TAG']:
        MovieDTO.getMoviesByTag(queryParam);
        break;
    }
  })
});

module.exports = MovieStore;