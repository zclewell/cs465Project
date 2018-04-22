import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    let memberArr = params ? params.item.members : []
    let challengeArr = params ? params.item.challenges : []
    let name = params ? params.item.name : ''
    this.state = {
      name: name,
      members: memberArr,
      challenges: challengeArr,
      tempChallenge: '',
      tempMember: '',
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
              value={this.state}
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
      </View>
    );
  }

  addToMembers() {
    currMembers = this.state.members
    currMembers.push({name: this.state.tempMember})
    console.log(currMembers)
    this.state.members = currMembers
    this.setState({members: currMembers, tempMember: ''})
    console.log(this.state)
  }

  addToChallenges() {
    currChallenges = this.state.challenges
    currChallenges.push({name: this.state.tempChallenge})
    this.setState({challenges: currChallenges, tempChallenge: ''})
  }

  removeFromMembers(name) {
    currMembers = this.state.members
    newMembers = []
    currMembers.forEach(function(curr) {if(curr.name !== name) { newMembers.push(curr)}})
    console.log(newMembers)
    this.state.members = newMembers
    this.setState({members: newMembers})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});