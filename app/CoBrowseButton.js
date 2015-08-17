/** @jsx React.DOM */

var React = require('react');

TogetherJS.config('toolName', 'CoBrowse');
TogetherJS.config('hubBase', 'http://127.0.0.1:8080/');

var CoBrowseButton = React.createClass({

  _handleClick: function(e) {
    TogetherJS(this);
    e.stopPropagation();
    //return false;
  },

  render: function() {
    var endSessionText = 'End Co-Browse';
    return (
      <button onClick={this._handleClick} data-end-togetherjs-html={endSessionText}>Start Co-Browse</button>
    );
  }
});

module.exports = CoBrowseButton;
