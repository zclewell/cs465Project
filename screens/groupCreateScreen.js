import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GroupCreateScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    let item = params ? params.item : null
    console.log(params)
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
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