import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { S5Colors, S5Icon, S5Button, S5Header } from "s5-components";
import { checkEmail } from "s5-utils";
import { connect } from "react-redux";

class EmailScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
  }

  _onPressStart = () => {
    console.log(this.props);
    this.props.navigation.navigate("Confirm", { email: this.state.email });
  };

  _onChangeText = email => {
    this.setState({ email }, () => {
      if (checkEmail(email)) {
        this.setState({ enabled: true });
      }else{
        this.setState({ enabled: false });
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <S5Header left={"arrow-round-back"} enabled={this.state.enabled} onSubmit={this._onPressStart} style={{ backgroundColor: S5Colors.primary }} />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Text style={styles.message}>{"E-mail Address"}</Text>
          </View>
          <View style={{ height: 43 }}>
            <TextInput
              style={{ height: 43, flex: 1, color: "#FFFFFF", fontSize: 20 }}
              selectionColor={"#FFFFFF"}
              onChangeText={this._onChangeText}
              placeholder={"Email Address"}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
          <View>
            <Text style={styles.message}>
              {"We suggest using your work email if you're creating a team for your business, department or project."}
            </Text>
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

module.exports = connect()(EmailScreen);
