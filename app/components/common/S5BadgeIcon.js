import React from "react";
import { StyleSheet, Text, View } from "react-native";
import S5Icon from "./S5Icon";
import { connect } from "react-redux";

export default connect(state => ({
  notificationCount: (state.notifications && state.notifications.count) || 12
}))(props => {
  let badgeStyle = { fontSize: 13, fontWeight: "700" };
  if (props.notificationCount > 9) badgeStyle = { fontSize: 10, fontWeight: "600" };

  return (
    <View>
      <S5Icon style={props.style} size={props.size} color={props.color} name={props.name} />
      {props.notificationCount > 0
        ? <View
            style={[
              {
                position: "absolute",
                right: -12,
                top: -2,
                backgroundColor: "red",
                borderRadius: 9,
                width: 18,
                height: 18,
                justifyContent: "center",
                alignItems: "center"
              },
              props.badgeStyle
            ]}>
            <Text style={[{ color: "white", backgroundColor: "transparent" }, badgeStyle]}>{props.notificationCount}</Text>
          </View>
        : null}
    </View>
  );
});
