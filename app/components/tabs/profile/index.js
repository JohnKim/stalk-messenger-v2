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

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      ProfileScreen
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
  </View>
);

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
