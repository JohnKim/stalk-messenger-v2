import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, TextInput, KeyboardAvoidingView, Keyboard } from "react-native";
import { S5Colors, S5Icon, S5Button, S5Header } from "s5-components";
import { connect } from "react-redux";

class NameScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);

    let email = props.navigation.state.params.email;
    let username = email.substring(0, email.indexOf("@"));

    this.state = {
      username,
      enabled: (username ? true : false),
    };
  }

  _onPressStart = () => {
    // TODO 로직 구현 필요!
    Keyboard.dismiss();
    this.props.navigation.navigate("Tab");
  };

  _onChangeText = username => {
    this.setState({ username }, () => {
      if (username) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <S5Header left={"arrow-round-back"} enabled={this.state.enabled} onSubmit={this._onPressStart} style={{backgroundColor: S5Colors.primary}} />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Text style={styles.message}>{"Choose a Username"}</Text>
          </View>
          <View style={{ height: 43 }}>
            <TextInput
              style={{ height: 43, flex: 1, color: "#FFFFFF", fontSize: 20 }}
              selectionColor={"#FFFFFF"}
              value={this.state.username}
              onChangeText={this._onChangeText}
              placeholder={"Your Name"}
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 12,
    backgroundColor: S5Colors.primary
  },
  message: {
    color: "#FFFFFF"
  }
});

module.exports = connect()(NameScreen);
