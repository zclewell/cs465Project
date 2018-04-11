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
    if ((this.props.verified && item.verified) || (!this.props.verified && !item.verified)) {
    return (
        <TouchableOpacity onPress={() => {if(item.verified) {this.props.onPressComplete()}}}>
          <View style={styles.container}>
            <View style={styles.titleGroupContainer}>
              <Text style={styles.title}>{sentence}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    margin: 10,
    marginTop: 0,
    elevation: 5,
    flexDirection: 'row',
    borderRadius: 10,
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