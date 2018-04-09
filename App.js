import RootNavigator from './navigation/rootNavigator'

// export default rootNavigator

import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});