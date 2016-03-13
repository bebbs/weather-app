var React = require('react');
var styles = require('../styles');

function Header (props) {
  return (
    <div style={styles.header}>
      <span style={styles.header.logo}>Sunshine</span>
    </div>
  )
};

module.exports = Header;