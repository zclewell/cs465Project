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
    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          keyExtractor={(item, index) => item.key = ''+index}
          renderItem={({item}) => <GroupCardItem item={item} navigation={this.props.navigation} manipulationFunctions={this.manipulationFunctions}/>}
          extraData={this.state}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('Create', {manipulationFunctions: this.manipulationFunctions})}/>
      </View>
    );
  }

  manipulationFunctions = {
    addToGroups: this.addToGroups.bind(this),
    addChallengeToGroup: this.addChallengeToGroup.bind(this),
    removeChallengeFromGroup: this.removeChallengeFromGroup.bind(this),
    addMemberToGroup: this.addMemberToGroup.bind(this),
    removeMemberFromGroup: this.removeMemberFromGroup.bind(this)
  }

  addToGroups(newGroup) {
    groups = this.state.groups
    groups.push(newGroup)
    this.state.groups = groups
    console.log(this.state.groups)
  }

  addChallengeToGroup(id, challenge) {
    groups = this.state.groups
    groups.forEach(function(curr) {
      if (curr.id == id) {
        curr.challenges.push({name: challenge})
      }
    })
    this.state.groups = groups
  }

  removeChallengeFromGroup(id, challenge) {
    groups= this.state.groups
    newGroups = []
    groups.forEach(function(curr) {
      if (curr.id == id) {
        challenges = curr.challenges
        newChallenges = []
        curr.challenges.forEach(function(currStr) {
          if (currStr.name != challenge) {
            newChallenges.push(currStr)
          }
        })
        curr.challenges = newChallenges
      }
      newGroups.push(curr)
    })
    this.state.groups = newGroups
  }

  addMemberToGroup(id, name) {
    groups = this.state.groups
    groups.forEach(function(curr) {
      if (curr.id == id) {
        curr.members.push({name: name})
      }
    })
    this.state.groups = groups
  }

  removeMemberFromGroup(id, name) {
    groups = this.state.groups
    newGroups = []
    groups.forEach(function(curr) {
      if (curr.id == id) {
        members = curr.members
        newMembers = []
        curr.members.forEach(function(currStr) {
          if (currStr.name != name) {
            newMembers.push(currStr)
          }
        })
        curr.members = newMembers
      }
      newGroups.push(curr)
      console.log(curr)
    })
    this.state.groups = newGroups
    // console.log(this.state.groups)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});