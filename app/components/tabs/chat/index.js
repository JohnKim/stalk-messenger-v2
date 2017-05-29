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

const ChatScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Chat
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
  </View>
);

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ChatScreen.navigationOptions = {
  title: 'Chat',
};

export default ChatScreen;
