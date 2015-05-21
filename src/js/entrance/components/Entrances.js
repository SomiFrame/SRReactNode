var React = require('react');
var Common = require('../../constants/common');

var topics = [
  {'route':'/movie', 'name': 'DouBan Movie Search APP'},
  {'route':'/chartsocketio', 'name': 'Multi People Chart APP'}
];

/**
 * Dou Bai APP
 * @type {*|Function}
 */
var Entrances =
  React.createClass({
    render: function(){
      var topicsJSX = [];
      topics.forEach(function(topic) {
        topicsJSX.push(<a href={topic.route} className="list-group-item">{topic.name}</a>);
      });
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Demos</h3>
          </div>
          <div className="panel-body">
            <div className="list-group">
              {topicsJSX}
            </div>
          </div>
        </div>
      )
    }
  });

module.exports = Entrances;