import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';

import GroupCardItem from '../components/GroupCardItem'
import ActionButton from 'react-native-action-button';

const groups = require('../constants/Groups')

export default class GroupListScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)
    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          keyExtractor={(item, index) => item.key = ''+index}
          renderItem={({item}) => <GroupCardItem item={item} navigation={this.props.navigation}/>}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('Create')}/>
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