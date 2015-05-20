var $ = require('jquery');
var React = require('react');
var moduleName = $('#main').find('>div').attr('id');
var mountNode = document.getElementById(moduleName);
var DouBanMovieSearchResult = require('./components/SearchResult');

React.render(<DouBanMovieSearchResult />, mountNode);
