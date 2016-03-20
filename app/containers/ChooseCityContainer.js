var React = require('react');

var ChooseCity = require('../components/ChooseCity');

var ChooseCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleUpdateCity: function(e) {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity: function(e) {
    e.preventDefault();
    var city = this.state.city
    this.setState({
      city: ''
    });
    this.context.router.push('/weather/' + this.state.city);
  },
  render: function() {
    return (
      <ChooseCity 
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }

});

module.exports = ChooseCityContainer;