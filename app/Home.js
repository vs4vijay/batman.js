/** @jsx React.DOM */

var React = require('react'),
    Batman = require('./Batman'),
    HelloMessage = require('./HelloMessage'),
    CoBrowseButton = require('./CoBrowseButton');

var Home = React.createClass({
  render: function() {
    var message = 'Home';
    return (
      <p>
        {message}
        <HelloMessage />
        <Batman />
        <CoBrowseButton />
      </p>
    );
  }
});

module.exports = Home;
