/** @jsx React.DOM */

var React = require('react'),
    Batman = require('./Batman'),
    HelloMessage = require('./HelloMessage');

var Home = React.createClass({
  render: function() {
    var message = 'Home';
    return (
      <p>
        {message}
        <HelloMessage/>
        <Batman/>
      </p>
    );
  }
});

module.exports = Home;
