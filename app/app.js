/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Home = require('./Home'),
    Batman = require('./Batman'),
    CoBrowseButton = require('./CoBrowseButton'),
    HelloMessage = require('./HelloMessage');

var Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/"handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="home" path="/home" handler={Home} />
    <Route name="batman" path="/batman" handler={Batman} />
    <Route name="hello" path="/hello" handler={HelloMessage} />
  </Route>
);

//var TogetherJSConfig_toolName = 'Co-Browse';

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// Or, if you'd like to use the HTML5 history API for cleaner URLs:
// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.body);
// });

React.render(<App/>, document.getElementById('app'));
