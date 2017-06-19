import React, { PropTypes } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { S5Colors, S5Icon, S5Button, S5Header } from "s5-components";

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

const FeedScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      FeedScreen....
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
  </View>
);

FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

FeedScreen.navigationOptions = {
  title: 'Feed',
  tabBarLabel: 'Home',
  // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  tabBarIcon: ({ tintColor }) => ( // chatboxes-outline
    <S5Icon size={25} color={"gray"} name={"chatboxes-outline"} />
  ),
};

export default FeedScreen;
