import React, { Component } from "react";
import { Animated, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { S5Colors, S5Icon } from "s5-components";
import ProfileParallaxView from "./profileParallaxView.js"

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ProfileScreen extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {

    return (
      <View style={styles.fill}>
        <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.251)" />
        <ProfileParallaxView
          source={{uri:"https://static.gsshop.com/planprd/banner_MAINCORNER/33600658_01.jpg"}}
          title={'ABCDE DFSEBDF'}>
          {this._renderScrollViewContent()}
        </ProfileParallaxView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#03A9F4",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  }
});
