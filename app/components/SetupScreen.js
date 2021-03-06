import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { S5Colors, S5Icon, S5Button, S5Header } from "s5-components";
import { connect } from "react-redux";

class SetupScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
  }

  _onPressStart = () => {
    this.props.navigation.navigate("Email");
  };

  _onChangeText = text => {
    this.setState({ text }, () => {
      if (text) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <S5Header enabled={this.state.enabled} onSubmit={this._onPressStart} style={{ backgroundColor: S5Colors.primary }} />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Text style={styles.message}>{"Your Messenger Server URL"}</Text>
          </View>
          <View style={{ height: 43 }}>
            <TextInput
              style={{ height: 43, flex: 1, color: "#FFFFFF", fontSize: 20 }}
              selectionColor={"#FFFFFF"}
              onChangeText={this._onChangeText}
              placeholder={"messenger.stalk.io"}
              autoCapitalize={"none"}
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
          <View>
            <Text style={styles.message}>{"This is the address you use to sign in to your own service."}</Text>
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

module.exports = connect()(SetupScreen);
