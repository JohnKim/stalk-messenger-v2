
import { Platform } from 'react-native';
import { applyMiddleware, createStore, compose }  from 'redux';
import { persistStore, autoRehydrate }            from 'redux-persist';
import { AsyncStorage }                           from 'react-native';
import { createLogger }   from 'redux-logger';  // (https://github.com/theaqua/redux-logger)
import thunk              from 'redux-thunk';   // (https://github.com/gaearon/redux-thunk)

import reducers           from './reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome, // 로깅 조건
  collapsed: true,
  duration: true,
});

function configureStore(onComplete) {

  const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(thunk, logger),
      autoRehydrate()
    )
  );

  persistStore(store, {storage: AsyncStorage}, onComplete);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

module.exports = configureStore;
