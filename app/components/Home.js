var React = require('react');

var styles = require('../styles');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <h1 style={styles.container.h1}>Choose a city to get started</h1>
      </div>
    );
  }
});

module.exports = HelloWorld;