import React from 'react';
import { Provider } from 'react-redux';
import AppReducer from './reducers';
import AppWithNavigationState from './navigator';
import configureStore from './store';

export default class s5messenger extends React.Component {

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
