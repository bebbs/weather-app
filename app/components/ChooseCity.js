var React = require('react');
var PropTypes = React.PropTypes;

function ChooseCity (props) {
  return (
    <div className="col-sm-6">
      <form onSubmit={props.onSubmitCity}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="City name, eg. London"
            onChange={props.onUpdateCity}
            value={props.city}
            type="text" />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button className="btn btn-success">Search</button>
        </div>
      </form>
    </div>
  )
};

ChooseCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = ChooseCity;