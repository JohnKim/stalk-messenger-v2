import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import S5Icon from "./S5Icon";
import S5Button from "./S5Button";
import S5Colors from "./S5Colors";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : 0;

export default connect(null, dispatch => ({
  goBack: () => dispatch(NavigationActions.back())
}))(props => {
  let headerLeft = null;
  if (props.left != "NONE") {
    headerLeft = <S5Icon style={{ marginLeft: 10 }} size={40} color={"#FFFFFF"} name={props.left || "close"} onPress={() => props.goBack()} />;
  }

  let enabled = props.enabled || false;

  let headerRight = (
    <S5Button title={props.right || "Next"} color={"#FFFFFF"} buttonStyle={{ marginRight: 10 }} disabled={!enabled} onPress={() => props.onSubmit()} />
  );

  return (
    <View>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={[styles.navBar, { paddingTop: STATUSBAR_HEIGHT }, props.style]}>
        <View>
          <View style={styles.navButtonLeft}>
            {headerLeft}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.navText]}> {props.title || " "} </Text>
        </View>
        <View>
          <View style={styles.navButtonRight}>
            {headerRight}
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    backgroundColor: S5Colors.primary,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  navButtonLeft: {
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 2,
    paddingLeft: 8
  },
  navButtonRight: {
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 2,
    paddingRight: 8
  },
  navButtonIcon: {
    marginHorizontal: 8
  },
  navText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 2,
    paddingLeft: 12
  }
});
