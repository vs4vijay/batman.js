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
        <button onClick="TogetherJS(this); return false;">Start TogetherJS</button>
      </p>
    );
  }
});

module.exports = Home;
