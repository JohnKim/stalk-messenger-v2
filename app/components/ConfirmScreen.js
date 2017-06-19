import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { S5Colors, S5Icon, S5Button, S5Header } from "s5-components";
import { connect } from "react-redux";

class ConfirmScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
  }

  _onPressStart = () => {
    const confirmedNumber = this.state.N1 + this.state.N2 + this.state.N3 + this.state.N4 + this.state.N5;
    console.log(confirmedNumber, "TODO 구현해야 함");
    this.props.navigation.navigate("Name", { email: this.props.navigation.state.params.email });
  };

  render() {
    let confirmNumbers = [];
    for (i = 1; i <= 5; i++) {
      let currentRef = "N" + i;
      let nextRef = i < 5 ? "N" + (i + 1) : false;

      confirmNumbers.push(
        <TextInput
          key={currentRef}
          ref={currentRef}
          style={styles.textInput}
          maxLength={1}
          selectionColor={"#FFFFFF"}
          keyboardType="numeric"
          returnKeyType="next"
          blurOnSubmit={false}
          autoFocus={i == 1 && true}
          onChangeText={val => {
            let _code = {};
            _code[currentRef] = val || false;
            this.setState(_code, () => {
              if (this.state.N1 && this.state.N2 && this.state.N3 && this.state.N4 && this.state.N5) {
                this.setState({enabled: true});
              } else {
                this.setState({enabled: false});
              }
              if (nextRef) {
                if (val) this.refs[nextRef].focus();
              } else {
                this.refs[currentRef].blur();
              }
            });
          }}
        />
      );
    }

    const B = props => <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;

    return (
      <View style={{ flex: 1 }}>
        <S5Header left={"arrow-round-back"} enabled={this.state.enabled} onSubmit={this._onPressStart} style={{ backgroundColor: S5Colors.primary }} />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Text style={styles.message}>{"Your Confirmation Code"}</Text>
          </View>
          <View style={styles.textInputWrap}>
            {confirmNumbers}
          </View>
          <View>
            <Text style={styles.message}>
              {"We've sent a five-digit confirmation code to "}<B>{this.props.navigation.state.params.email}</B>
              {". Enter it hear to confirm your email address."}
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
  textInputWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  textInput: {
    margin: 10,
    height: 42,
    width: 48,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    borderRadius: 4,
    borderColor: "#FFFFFF",
    borderWidth: 2
  },
  message: {
    color: "#FFFFFF"
  }
});

module.exports = connect()(ConfirmScreen);
