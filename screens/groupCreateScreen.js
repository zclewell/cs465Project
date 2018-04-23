import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ActionButton from 'react-native-action-button';

export default class GroupCreateScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#85d9bf',
      height: 30
    }
  }
  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state
    let item = params.item ? params.item : null
    let memberArr = item ? item.members : []
    let challengeArr = item ? item.challenges : []
    let name = item ? item.name : ''
    let id = item ? item.id : -1
    this.state = {
      name: name,
      members: memberArr,
      challenges: challengeArr,
      tempChallenge: '',
      tempMember: '',
      id: id
    }
  }
  render() {
    const { params } = this.props.navigation.state
    let item = params ? params.item : null
    let name = item ? item.name : ''
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Group Name'
          style={{margin: 5}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <View style={{flex: 1, margin: 5, borderRadius: 10}}>
          <View style={{backgroundColor: '#85d9bf', flexDirection: 'row', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
            <TextInput
              placeholder='Enter new member...'
              placeholderTextColor='#626262'
              style={{margin: 5,flex:1}}
              onChangeText={(text) => this.setState({tempMember: text})}
              value={this.state.tempMember}
              onSubmitEditing={() => this.addToMembers()}
            />
            <TouchableOpacity onPress={() => this.addToMembers()}>
              <Icon name={'plus'} style={{fontSize: 20, width: 20, height: 20, margin: 10}}/>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.members}
            keyExtractor={(item, index) => item.key = ''+index}
            renderItem={({item}) => 
              <View style={{flexDirection: 'row'}}>
                <Text style={{margin: 5,marginBottom: 0, flex: 4}}>{item.name}</Text>
                <TouchableOpacity onPress={() => this.removeFromMembers(item.name)}>
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 20,width: 20, margin: 5}}>
                    <Icon name={'times'} style={{fontSize: 20}}/>
                  </View>
                </TouchableOpacity>
              </View>
            }
            extraData={this.state}
          />
        </View>
        <View style={{flex: 1, margin: 5, borderRadius: 10,backgroundColor: '#eee'}}>
          <View style={{backgroundColor: '#85d9bf', flexDirection: 'row', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
            <TextInput
              placeholder='Enter new challenge...'
              placeholderTextColor='#626262'
              style={{margin: 5, flex: 1}}
              onChangeText={(text) => this.setState({tempChallenge: text})}
              value={this.state.tempChallenge}
              onSubmitEditing={() => this.addToChallenges()}
            />
            <TouchableOpacity onPress={() => this.addToChallenges()}>
              <Icon name={'plus'} style={{fontSize: 20, width: 20, height: 20, margin: 10}}/>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.challenges}
            keyExtractor={(item, index) => item.key = ''+index}
            renderItem={({item}) => 
              <View style={{flexDirection: 'row'}}>
                <Text style={{margin: 5,marginBottom: 0, flex: 4}}>{item.name}</Text>
                <TouchableOpacity onPress={() => this.removeFromChallenges(item.name)}>
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 20,width: 20, margin: 5}}>
                    <Icon name={'times'} style={{fontSize: 20}}/>
                  </View>
                </TouchableOpacity>
              </View>
            }
            extraData={this.state}
          />
        </View>
        {item == null ? <ActionButton buttonColor="rgba(231,76,60,1)" renderIcon={() => <Icon name='check' size={25} style={{color: 'white'}}/>} onPress={() => {this.createGroup(); this.props.navigation.navigate('Home')}}/> : null }
      </View>
    );
  }

  addToMembers() {
    if( this.props.navigation.state.params.setMembers) {
      this.props.navigation.state.params.manipulationFunctions.addMemberToGroup(this.state.id, this.state.tempMember)
      this.props.navigation.state.params.setMembers(this.state.members)
    } else {
      newMembers = this.state.members
      newMembers.push({name: this.state.tempMember})
      this.state.members = newMembers
    }
    this.setState({tempMember: ''})
  }

  addToChallenges() {
    if(this.props.navigation.state.params.setChallenges) {
      this.props.navigation.state.params.manipulationFunctions.addChallengeToGroup(this.state.id, this.state.tempChallenge)
      this.props.navigation.state.params.setChallenges(this.state.challenges) 
    } else {
      newChallenges = this.state.challenges
      newChallenges.push({name: this.state.tempChallenge})
      this.state.challenges = newChallenges
    }
    this.setState({tempChallenge: ''})
  }

  removeFromMembers(name) {
    currMembers = this.state.members
    newMembers = []
    currMembers.forEach(function(curr) {if(curr.name !== name) { newMembers.push(curr)}})
    this.state.members = newMembers
    this.setState({members: newMembers})
    this.props.navigation.state.params.manipulationFunctions.removeMemberFromGroup(this.state.id, name)
    this.props.navigation.state.params.setMembers(this.state.members)
  }

  removeFromChallenges(name) {
    currChallenges = this.state.challenges
    newChallenges = []
    currChallenges.forEach(function(curr) { if(curr.name !== name) { newChallenges.push(curr)}})
    this.setState({challenges: newChallenges})
    this.props.navigation.state.params.manipulationFunctions.removeChallengeFromGroup(this.state.id, name)
    this.props.navigation.state.params.setChallenges(newChallenges)
  }

  createGroup() {
    newGroup = {
      id: Math.random(),
      name: this.state.name,
      members: this.state.members,
      challenges: this.state.challenges,
      color: '#'+Math.floor(Math.random()*16777215).toString(16),
      rankings: ['','','']
    }
    this.props.navigation.state.params.manipulationFunctions.addToGroups(newGroup)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});