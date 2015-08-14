var App = React.createClass({displayName: "App",
  render: function() {
    var message = 'React message';
    return React.createElement("p", null, message);
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('app')
);
