/** @jsx React.DOM */


var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
    var message = 'Hello message';
    return <p>{message}</p>;
  }
});

module.exports = HelloMessage;
