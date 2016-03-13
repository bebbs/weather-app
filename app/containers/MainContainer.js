var React = require('react');
var HelloWorld = require('../components/HelloWorld');

var MainContainer = React.createClass({
  render: function() {
    return (
      <HelloWorld />
    );
  }
});

module.exports = MainContainer;