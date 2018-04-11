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
    // console.log(this.state)
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
          />
        </View>
        <ActionButton icon={<Icon name='pencil' size={25} style={{color:  'white'}}/>} buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('Create',{item: item})}/>
      </View>
    );
  }

  addToMembers() {
    currMembers = this.state.members
    currMembers.push({name: this.state.tempMember})
    this.setState({members: currMembers, tempMember: ''})
    console.log(this.state)
  }

  addToChallenges() {
    currChallenges = this.state.challenges
    currChallenges.push({name: this.state.tempChallenge})
    this.setState({challenges: currChallenges, tempChallenge: ''})
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