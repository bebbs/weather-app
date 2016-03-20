var React = require('react');

var ChooseCityContainer = require('../containers/ChooseCityContainer');

var styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5
  }
}

function Header (props) {
  return (
    <div style={styles.header}>
      <span>Sunshine</span>
      <ChooseCityContainer direction='row' />
    </div>
  )
};

module.exports = Header;