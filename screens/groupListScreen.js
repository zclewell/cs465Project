import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';

import GroupCardItem from '../components/GroupCardItem'
import ActionButton from 'react-native-action-button';

const groups = require('../constants/Groups')

export default class GroupListScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#85d9bf',
      height: 30
    },
    title: 'Groups',
  }
  constructor() {
    super()
    this.state = {
      groups: groups
    }
  }
  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)
    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          keyExtractor={(item, index) => item.key = ''+index}
          renderItem={({item}) => <GroupCardItem item={item} navigation={this.props.navigation} addToGroups={this.addToGroups.bind(this)}/>}
          extraData={this.groups}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('Create', {addToGroups: this.addToGroups})}/>
      </View>
    );
  }

  addToGroups(newGroup) {
    groups = this.state.groups
    groups.push(newGroup)
    this.state.groups = groups
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});