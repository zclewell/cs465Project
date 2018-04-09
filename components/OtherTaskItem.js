import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class OtherTaskItem extends React.Component {
  render() {
    let item = this.props.item
    let completed = item ? item.completed : false
    let completedText = completed ? 'completed' : 'did not complete'
    let title = item ? item.title : 'null title' 
    let group = item ? item.group : 'null group'
    let name = item ? item.user : 'null name' 

    let sentence = name + ' ' + completedText + ' ' + title + ' in ' + group

    return (
      <TouchableOpacity onPress={() => {if(completed) {this.props.onPressComplete()} else {this.props.onPressIncomplete()}}}>
        <View style={styles.container}>
          <View style={styles.titleGroupContainer}>
            <Text style={styles.title}>{sentence}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    margin: 10,
    marginBottom: 0,
    elevation: 5,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    margin: 5
  },
  titleGroupContainer: {
    flex: 3,
  },
  completedContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});