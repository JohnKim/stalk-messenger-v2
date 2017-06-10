import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import S5Colors from "./S5Colors";
import S5Icon from "./S5Icon";

export default class S5Button extends React.Component {

  _onPress = () => {
    if (this.props.disabled) return;
    if (this.props.onPress) this.props.onPress();
  };

  render() {
    let opacity = 0.8;
    if (this.props.disabled) opacity = 1.0;

    let type = this.props.type;

    let icon;
    if (this.props.icon) {
      icon = (
        <S5Icon
          name={this.props.icon}
          height="30"
          width="30"
          fill={textStyle.color}
        />
      );
    }

    let wrapperStyle = {};
    let buttonStyle = { backgroundColor: "#FFFFFF" };
    let textStyle = { color: S5Colors.primaryText };
    if (this.props.color) {
      buttonStyle = { backgroundColor: this.props.color };
      if (this.props.textColor) {
        textStyle = { color: this.props.textColor };
      } else {
        textStyle = { color: "#FFFFFF" };
      }
    } else if (this.props.colors) {
      // 배열로 색상이 들어오면, LinearGradient !
      type = "gradient";
      if (this.props.textColor) {
        textStyle = { color: this.props.textColor };
      } else {
        textStyle = { color: "#FFFFFF" };
      }
    }

    if (this.props.paddingHorizontal) {
      textStyle["paddingHorizontal"] = this.props.paddingHorizontal;
    }

    if (this.props.width) {
      buttonStyle["width"] = this.props.width;
    }

    if (this.props.height) {
      wrapperStyle["height"] = this.props.height;
      buttonStyle["height"] = this.props.height;
    }

    if (this.props.fontSize) textStyle["fontSize"] = this.props.fontSize;

    if (type === "default" || type === undefined) {
      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this._onPress}
          activeOpacity={opacity}
          style={[styles.buttonWrapper, wrapperStyle, this.props.style]}
        >
          <View style={[styles.button, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>
              {this.props.caption}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else if (type === "gradient") {
      textStyle["backgroundColor"] = "transparent";

      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this._onPress}
          activeOpacity={opacity}
          style={[styles.buttonWrapper, wrapperStyle, this.props.style]}
        >
          <LinearGradient
            start={{ x: 0.5, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={this.props.colors}
            style={[styles.button, buttonStyle]}
          >
            <Text style={[styles.buttonText, textStyle]}>
              {this.props.caption}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    } else if (type === "rect") {
      buttonStyle["borderRadius"] = 2;

      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this._onPress}
          activeOpacity={opacity}
          style={[styles.buttonWrapper, wrapperStyle, this.props.style]}
        >
          <View style={[styles.button, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>
              {this.props.caption}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else if (type === "border") {
      var textColor = this.props.textColor;

      buttonStyle["borderRadius"] = 2;
      buttonStyle["borderWidth"] = 1;
      buttonStyle["borderColor"] = textColor;
      (buttonStyle["backgroundColor"] = "transparent"), (textStyle[
        "color"
      ] = textColor);

      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this._onPress}
          activeOpacity={opacity}
          style={[styles.buttonWrapper, wrapperStyle, this.props.style]}
        >
          <View style={[styles.button, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>
              {this.props.caption}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

S5Button.propTypes = {
  type: React.PropTypes.oneOf(["default", "gradient", "rect", "border"]),
  icon: React.PropTypes.string,
  caption: React.PropTypes.string,
  style: React.PropTypes.any,
  onPress: React.PropTypes.func.isRequired
};

const HEIGHT = 40;
const DEFAULT_HEIGHT = 40;

var styles = StyleSheet.create({
  buttonWrapper: {
    height: DEFAULT_HEIGHT,
    backgroundColor: "transparent"
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    height: DEFAULT_HEIGHT
  },
  buttonText: {
    //fontFamily: 'sans-serif-medium', // FOR ANDROID
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center"
  }
});
