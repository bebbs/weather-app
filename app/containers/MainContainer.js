var React = require('react');

var Header = require('../components/Header');

var MainContainer = function (props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

module.exports = MainContainer;