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
    this.state = {
      name: '',
      members: params.item.members,
      challenges: params.item.challenges,
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
        <Text style={styles.title}>{name}</Text>
        <View style={{flex: 1, margin: 5, borderRadius: 10}}>
          <View style={{backgroundColor: '#85d9bf', flexDirection: 'row', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
            <Text style={styles.listTitle}>{'Members'}</Text>  
          </View>
          <FlatList
            data={this.state.members}
            keyExtractor={(item, index) => item.key = ''+index}
            renderItem={({item}) => <Text style={{margin: 5,marginBottom: 0, flex: 4}}>{item.name}</Text>}
            extraData={this.state}
          />
        </View>
        <View style={{flex: 1, margin: 5, borderRadius: 10,backgroundColor: '#eee'}}>
          <View style={{backgroundColor: '#85d9bf', flexDirection: 'row', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
            <Text style={styles.listTitle}>{'Challenges'}</Text>
          </View>
          <FlatList
            data={this.state.challenges}
            keyExtractor={(item, index) => item.key = ''+index}
            renderItem={({item}) => <Text style={{margin: 5,marginBottom: 0, flex: 4}}>{item.name}</Text>}
            extraData={this.state}
          />
        </View>
        <ActionButton 
          renderIcon={() => <Icon name='pencil' size={25} style={{color: 'white'}}/>}
          buttonColor="rgba(231,76,60,1)" 
          onPress={() => this.props.navigation.navigate('Create',{item: item, manipulationFunctions: this.props.navigation.state.params.manipulationFunctions, setMembers: this.setMembers.bind(this), setChallenges: this.setChallenges.bind(this)})}
        />
      </View>
    );
  }

  setMembers(members) {
    this.setState({members: members})
    this.state.members = members
    // console.log(this.state.members)
  }

  setChallenges(challenges) {
    this.setState({challenges: challenges})
    this.state.challenges = challenges
    console.log(challenges)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5
  },
  listTitle: {
    margin: 5,
    fontSize: 20
  }
});