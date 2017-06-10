import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import Swiper from "react-native-swiper";

import { S5Colors, S5Icon, S5Button } from "s5-components";
import LinearGradient from "react-native-linear-gradient";

import { connect } from "react-redux";

const startColor = "rgba(62,70,74,0.33)";
const endColor = "rgba(57,148,193,0.97)";

class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onPressBack = () => {
    this.props.navigator.pop();
  };

  _onPressStart = () => {
    this.props.skipIntro().then(() => this.props.navigator.resetTo({ name: null }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          height={windowHeight}
          loop={false}
          showsButtons={false}
          showsPagination={true}
          dotColor="rgba(255,255,255,0.4)"
          activeDotColor="rgba(255,255,255,1.0)">

          <View style={styles.item}>
            <Image style={styles.item} source={{ uri: "https://lorempixel.com/720/1280/" }}>
              <LinearGradient colors={[startColor, endColor]} style={styles.overlay}>
                <View style={styles.textWrap}>
                  <View style={styles.slideImage}>
                    {/* Image */}
                  </View>
                  <Text style={styles.slideTitle}>
                    {"Slide No 1"}
                  </Text>
                  <Text style={styles.slideDesc}>
                    {"Slide No 1 Description"}
                  </Text>
                </View>
              </LinearGradient>
            </Image>
          </View>

          <View style={styles.item}>
            <Image style={styles.item} source={{ uri: "https://lorempixel.com/720/1280/" }}>
              <LinearGradient colors={[startColor, endColor]} style={styles.overlay}>
                <View style={styles.textWrap}>
                  <View style={styles.slideImage}>
                    {/* Image */}
                  </View>
                  <Text style={styles.slideTitle}>
                    {"Slide No 2"}
                  </Text>
                  <Text style={styles.slideDesc}>
                    {"Slide No 2 Description"}
                  </Text>
                </View>
              </LinearGradient>
            </Image>
          </View>

          <View style={styles.item}>
            <Image style={styles.item} source={{ uri: "https://lorempixel.com/720/1280/" }}>
              <LinearGradient colors={[startColor, endColor]} style={styles.overlay}>
                <View style={styles.textWrap}>
                  <View style={styles.slideImage}>
                    {/* Image */}
                  </View>
                  <Text style={styles.slideTitle}>
                    {"Slide No 2"}
                  </Text>
                  <Text style={styles.slideDesc}>
                    {"Slide No 2 Description"}
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <S5Button caption="Start" onPress={this._onPressStart} style={{ margin: 10 }} />
                </View>
              </LinearGradient>
            </Image>

          </View>
        </Swiper>
      </View>
    );
  }
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: windowWidth,
    height: windowHeight,
    opacity: 1.0
  },
  overlay: {
    flex: 1
  },
  textWrap: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 47.5
  },
  slideImage: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  slideTitle: {
    marginTop: 100,
    color: "white",
    fontSize: 37.5,
    fontWeight: "700"
  },
  slideDesc: {
    marginTop: 32,
    color: "white",
    fontSize: 17,
    fontWeight: "300"
  },
  buttons: {
    //alignItems: "center",
    //alignSelf: "center",
    //justifyContent: "center",
    flexDirection: "row",
    marginBottom: 50
  }
});

function actions(dispatch) {
  return {};
}

module.exports = connect(null, actions)(IntroScreen);
