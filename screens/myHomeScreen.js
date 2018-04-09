import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MyTaskItem from '../components/MyTaskItem.js'

const myTasks = require('../constants/UserTasks')

export default class MyHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={myTasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <MyTaskItem item={item}/>}
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