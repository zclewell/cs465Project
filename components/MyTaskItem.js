import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MyTaskItem extends React.Component {
  render() {
    let item = this.props.item
    let completed = item ? item.completed : false
    let completedText = completed ? 'completed' : 'in-progress'
    let icon = completed ? <Icon name={'check'} style={{color: 'green', paddingRight: 10}} size={25}/> : <Icon name={'times'} style={{color: 'red', paddingRight: 15}} size={25}/>
    let title = item ? item.title : 'null title' 
    let group = item ? item.group: 'null group'
    return (
          <TouchableOpacity onPress={() => {if(!completed) {this.props.onPress()}}}>
            <View style={styles.container}>
              <View style={styles.titleGroupContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.group}>{group}</Text>
              </View>
              <View style={styles.completedContainer}>
                {icon}
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
    fontWeight: 'bold',
    margin: 5
  },
  group: {
    fontSize: 15,
    margin: 5,
    marginTop: 0
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