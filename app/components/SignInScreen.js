import React, { PropTypes } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const SignInScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      IntroScreen
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Main' })}
      title="Main"
    />
  </View>
);

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SignInScreen.navigationOptions = {
  title: 'Main',
};

export default SignInScreen;
