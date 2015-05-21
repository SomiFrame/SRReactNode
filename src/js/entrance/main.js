var $ = require('jquery');
var React = require('react');
var moduleName = $('#main').find('>div').attr('id');
var mountNode = document.getElementById(moduleName);
var EntranceAPP = require('./components/Entrances');

React.render(<EntranceAPP />, mountNode);