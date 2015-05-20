var $ = require('jquery');
var DOUBAN_API_URL = 'http://api.douban.com/v2/';
var DOUBAN_API_KEY = '06fdb5473fa41ed514f91fd5beec5c7f';
var COMMON_QUERY_STRING = {apikey: DOUBAN_API_KEY, start: 0, count: 20};
var DOUBAN_API_MOVIE_QUERYSTRING = DOUBAN_API_URL + '/movie/search';

// Wrapper for DOUBAN ajax request using jQuery.
var $get = function(url, querystring) {
  querystring = $.extend(querystring, COMMON_QUERY_STRING);
  return $.ajax({
    url: url,
    method: 'GET',
    dataType: 'jsonp',
    cache: false,
    processData: true,
    data: querystring
  });
};

module.exports = {
  ACTION_TYPE: {
    'ALL': 'GET_ALL_MOVIE',
    'SEARCH:NAME': 'GET_MOVIE_BY_NAME',
    'SEARCH:TAG': 'GET_MOVIE_BY_TAG'
  },
  WebAPIUtils: {
    getMoviesByName: function(name) {
      name = {q: name};
      return $get(DOUBAN_API_MOVIE_QUERYSTRING, name)
              .fail(function(jqXHR, error, errorThrow) {});
    },
    getMoviesByTag: function(tag) {
      tag = {tag: tag};
      return $get(DOUBAN_API_MOVIE_QUERYSTRING, tag)
              .fail(function(jqXHR, error, errorThrow){});
    }
  }
};