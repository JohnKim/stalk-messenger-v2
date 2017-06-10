import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Intro'));

function nav(state = initialNavState, action) {
  //const nextState = AppNavigator.router.getStateForAction(action, state);

  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({ index: 0, actions: [ NavigationActions.navigate({ routeName: 'Tab'}) ] }),
        state
      );
      break;
    case 'Logout':
      return initialNavState;
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

module.exports = nav;
