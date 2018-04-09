import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import OtherTaskItem from '../components/OtherTaskItem.js'

const friendTasks = require('../constants/FriendTasks')

export default class FriendHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={friendTasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <OtherTaskItem item={item}/>}
        />
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