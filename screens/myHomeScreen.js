import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MyTaskItem from '../components/MyTaskItem.js'

const tasks = [
  {
    title: 'Run a Mile',
    group: 'Fitness Friends',
    completed: true
  },
  {
    title: 'Finish Presentation',
    group: 'Study Buddies',
    completed: true
  },
  {
    title: 'Take out the Garbage',
    group: 'Roomies',
    completed: true
  },
  {
    title: 'Write Study Guide',
    group: 'Study Buddies',
    completed: true
  },
]

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={tasks}
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