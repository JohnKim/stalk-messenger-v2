import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, TabNavigator } from "react-navigation";

import IntroScreen from "./components/IntroScreen";
import LoginScreen from "./components/LoginScreen";
import MainScreen from "./components/MainScreen";
import ProfileScreen from "./components/ProfileScreen";

import ChatTab from "./components/tabs/chat";
import FeedTab from "./components/tabs/feed";
import GroupTab from "./components/tabs/group";
import MemberTab from "./components/tabs/member";
import ProfileTab from "./components/tabs/profile";

export const MainScreenNavigator = TabNavigator(
  {
    Chat: { screen: ChatTab },
    Feed: { screen: FeedTab },
    Group: { screen: GroupTab },
    Member: { screen: MemberTab },
    Profile: { screen: ProfileTab }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

export const AppNavigator = StackNavigator({
  Intro: { screen: IntroScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  Tab: { screen: MainScreenNavigator }
});

const AppWithNavigationState = ({ dispatch, nav }) => <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
