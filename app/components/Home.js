var React = require('react');
var styles = require('../styles');

var ChooseCityContainer = require('../containers/ChooseCityContainer');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <h1 style={styles.container.h1}>Choose a city to get started</h1>
        <ChooseCityContainer />
      </div>
    );
  }
});

module.exports = Home;