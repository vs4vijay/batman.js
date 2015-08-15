/** @jsx React.DOM */

var React = require('react'),
    request = require('superagent');

var Batman = React.createClass({
  render: function() {
    var batMessage = 'zzzz';

    request
      .get('http://vijaysoni.co.in')
      .end(function(data) {
        batMessage = data;
      });

    return (<div>{batMessage}</div>);
  }
});

module.exports = Batman;
