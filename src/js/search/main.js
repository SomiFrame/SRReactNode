var $ = require('jquery');
var React = require('react');
var moduleName = $('#main').find('>div').attr('id');
var mountNode = document.getElementById(moduleName);
var DouBanAPP = require('./components/Search');

React.render(<DouBanAPP />, mountNode);