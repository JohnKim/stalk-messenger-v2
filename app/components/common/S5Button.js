import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

/**
 *
 * Example usage:
 *
 * ```
 * <S5Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 */

// Material design blue from https://material.google.com/style/color.html#color-color-palette
let defaultBlue = "#2196F3";
if (Platform.OS === "ios") {
  // Measured default tintColor from iOS 10
  defaultBlue = "#007AFF";
}

export default class S5Button extends Component {
  props: {
    title: string,
    onPress: () => any,
    color?: ?string,
    accessibilityLabel?: ?string,
    disabled?: ?boolean,
    testID?: ?string
  };

  static propTypes = {
    /**
     * Text to display inside the button
     */
    title: PropTypes.string.isRequired,
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: PropTypes.string,
    /**
     * Color of the text (iOS), or background color of the button (Android)
     */
    color: PropTypes.string,
    /* for 'rect' */
    buttonColor: PropTypes.string,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onPress: PropTypes.func.isRequired,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
    /**
     * (Added) preset type
     */
    type: PropTypes.string
  };

  render() {
    const { accessibilityLabel, color, buttonColor, onPress, title, disabled, testID, type, buttonStyle, textStyle } = this.props;
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    const formattedTitle = Platform.OS === "android" ? title.toUpperCase() : title;
    const accessibilityTraits = ["button"];
    if (disabled) accessibilityTraits.push("disabled");

    let buttonStyles = [];
    let textStyles = [];

    if (type == "rect") {

/*
      buttonStyles = {
        backgroundColor: defaultBlue,
        borderRadius: 2
      };
*/
    } else {
      buttonStyles = [styles.button];
      textStyles = [styles.text];

      if(Platform.OS === "ios") {
        if(color) textStyles.push({ color: color});
        if(buttonColor) buttonStyles.push({ backgroundColor: buttonColor});
      } else {
        if (color || buttonColor) {
          buttonStyles.push({ backgroundColor: buttonColor || color });
        }
      }

    }

    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
    }

    if(buttonStyle) buttonStyles.push(buttonStyle);
    if(textStyle) textStyles.push(textStyle);

    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        testID={testID}
        disabled={disabled}
        onPress={onPress}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>{formattedTitle}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: defaultBlue,
      borderRadius: 2
    }
  }),
  text: Platform.select({
    ios: {
      color: defaultBlue,
      textAlign: "center",
      padding: 8,
      fontSize: 18
    },
    android: {
      textAlign: "center",
      color: "white",
      padding: 8,
      fontWeight: "500"
    }
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: "#dfdfdf"
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: "#cdcdcd"
    },
    android: {
      color: "#a1a1a1"
    }
  })
});
