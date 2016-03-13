var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var MainContainer = require('../containers/MainContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer} />
  </Router>
)

module.exports = routes;