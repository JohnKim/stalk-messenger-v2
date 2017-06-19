import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, TabNavigator } from "react-navigation";
import { S5Colors, S5Icon, S5BadgeIcon } from "s5-components";

import IntroScreen from "./components/IntroScreen";
import SetupScreen from "./components/SetupScreen";
import EmailScreen from "./components/EmailScreen";
import ConfirmScreen from "./components/ConfirmScreen";
import NameScreen from "./components/NameScreen";

import ChatTab from "./components/tabs/chat";
import FeedTab from "./components/tabs/feed";
import GroupTab from "./components/tabs/group";
import NotificationTab from "./components/tabs/notification";
import ProfileTab from "./components/tabs/profile";

export const MainScreenNavigator = TabNavigator(
  {
    Feed: {
      screen: FeedTab,
      navigationOptions: {
        title: "Feed",
        tabBarLabel: "Feed",
        tabBarIcon: ( // Note: By default the icon is only shown on iOS. Search the showIcon option below.
          { focused, tintColor }
        ) => <S5Icon size={25} color={tintColor} name={"paper"+(!focused?"-outline":"")} />
      }
    },
    Group: {
      screen: GroupTab,
      navigationOptions: {
        title: "Group",
        tabBarLabel: "Group",
        tabBarIcon: (
          { focused, tintColor }
        ) => <S5Icon size={25} color={tintColor} name={"contacts"+(!focused?"-outline":"")} />
      }
    },
    Chat: {
      screen: ChatTab,
      navigationOptions: {
        title: "Chat",
        tabBarLabel: "Chat",
        tabBarIcon: (
          { focused, tintColor }
        ) => <S5Icon size={25} color={tintColor} name={"chatboxes"+(!focused?"-outline":"")} />
      }
    },
    Notification: {
      screen: NotificationTab,
      navigationOptions: {
        title: "Notification",
        tabBarLabel: "Notification",
        tabBarIcon: (
          { focused, tintColor }
        ) => <S5BadgeIcon size={25} color={tintColor} name={"notifications"+(!focused?"-outline":"")} />
      }
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: {
        title: "Group",
        tabBarLabel: "Group",
        tabBarIcon: (
          { focused, tintColor }
        ) => <S5Icon size={25} color={tintColor} name={"happy"+(!focused?"-outline":"")} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: S5Colors.background
      }
    }
  }
);

export const AppNavigator = StackNavigator(
  {
    Intro: { screen: IntroScreen },
    Setup: { screen: SetupScreen },
    Email: { screen: EmailScreen },
    Confirm: { screen: ConfirmScreen },
    Name: { screen: NameScreen },
    Tab: { screen: MainScreenNavigator }
  },
  {
    mode: "card",
    headerMode: "screen"
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
