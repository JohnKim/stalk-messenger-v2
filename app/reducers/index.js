var { combineReducers } = require('redux');

module.exports = combineReducers({
  nav:    require('./nav'),
  auth:   require('./auth'),
});
