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

const IntroScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      IntroScreen
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Setup' })}
      title="Set Up"
    />
  </View>
);

IntroScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

IntroScreen.navigationOptions = {
  title: 'Intro',
};

export default IntroScreen;
