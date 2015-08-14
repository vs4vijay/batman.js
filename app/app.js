var App = React.createClass({
  render: function() {
    var message = 'React message';
    return <p>{message}</p>;
  }
});

React.render(
  <App/>,
  document.getElementById('app')
);
