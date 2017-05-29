/**
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithNavigationState from './navigators';
import configureStore from './store/configureStore';

export default class S5Messenger extends React.Component {

  state = {
    isLoading: true,
    store: null,
  };

  componentDidMount() {
    var store = configureStore(() => this.setState({isLoading: false}));
    this.setState({store});
  }

  render() {

    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default S5Messenger;
