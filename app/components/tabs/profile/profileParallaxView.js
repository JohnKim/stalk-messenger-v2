import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default class ProfileParallaxView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const HEADER_SCROLL_DISTANCE = this.props.headerHeight - (Platform.OS === "ios" ? 60 : 73);

    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [-50, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }], { useNativeDriver: true })}>

          {this.props.children}

        </Animated.ScrollView>

        <Animated.View style={[styles.header, { height: this.props.headerHeight }, { transform: [{ translateY: headerTranslate }] }]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              { height: this.props.headerHeight },
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={this.props.source}
          />
        </Animated.View>

        {this.props.title &&
          <Animated.View
            style={[
              styles.bar,
              {
                transform: [{ scale: titleScale }, { translateY: titleTranslate }]
              }
            ]}>
            <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
          </Animated.View>}

      </View>
    );
  }
}

ProfileParallaxView.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  headerHeight: PropTypes.number,
  source: PropTypes.any,
};

ProfileParallaxView.defaultProps = {
  headerHeight: 300
};

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
    overflow: "hidden"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    resizeMode: "cover",
    backgroundColor: "transparent"
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
  }
});
