import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GroupDetailScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    let item = params ? params.item : null
    console.log(params)
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <ActionButton buttonColor='rgba(231,76,60,1)' icon={<Icon name='pencil' size={25} style={{color:  'white'}}/>} onPress={() => navigate('Create')}/>
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