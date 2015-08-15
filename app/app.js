/** #React.DOM */

var React = require('react');
var HelloMessage = require('./HelloMessage');

var App = React.createClass({
  render: function() {
    var message = 'xReact';
    return <p>{message} <HelloMessage/></p>;
  }
});

React.render(
  <App/>,
  document.getElementById('app')
);
