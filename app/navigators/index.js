import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import IntroScreen from '../components/IntroScreen';
import SetupScreen from '../components/SetupScreen';
import SignInScreen from '../components/SignInScreen';

import ChatTab from '../components/tabs/chat';
import FeedTab from '../components/tabs/feed';
import GroupTab from '../components/tabs/group';
import MemberTab from '../components/tabs/member';
import ProfileTab from '../components/tabs/profile';


export const MainScreenNavigator = TabNavigator({
  Chat: { screen: ChatTab },
  Feed: { screen: FeedTab },
  Group: { screen: GroupTab },
  Member: { screen: MemberTab },
  Profile: { screen: ProfileTab },
});

export const AppNavigator = StackNavigator({
  Intro: { screen: IntroScreen },
  Setup: { screen: SetupScreen },
  SignIn: { screen: SignInScreen },
  Main: { screen: MainScreenNavigator},
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
