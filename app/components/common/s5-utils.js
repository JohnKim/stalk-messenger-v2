/**
 * @providesModule s5-utils
 */
import React from "react";
import { S5Colors, S5Icon, S5Button } from "s5-components";

export function checkEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) return false;
  return true;
}

export function naviOptionsForSetup(navigation, _left, _right) {
  const headerStyle = { position: "absolute", /*backgroundColor: "transparent",*/ zIndex: 100, top: 0, left: 0, right: 0 };
  let headerLeft = null;
  if (_left != "NONE") {
    headerLeft = <S5Icon style={{ marginLeft: 15 }} size={40} color={"#FFFFFF"} name={_left || "close"} onPress={() => navigation.goBack()} />;
  }

  let headerRight = (
    <S5Button
      title={_right || "Next"}
      color={"#FFFFFF"}
      buttonStyle={{ marginRight: 10 }}
      disabled={navigation.state.params ? navigation.state.params.disabled : true}
      onPress={() => navigation.state.params.handleSave()}
    />
  );

  return { headerStyle, headerLeft, headerRight };
}
