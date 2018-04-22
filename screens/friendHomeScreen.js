import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Picker, Image } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import  Icon from 'react-native-vector-icons/FontAwesome'

import OtherTaskItem from '../components/OtherTaskItem.js'

friendTasks = require('../constants/FriendTasks')
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const photos = {
  0: require('../assets/images/usain.jpg'), 
  4: require('../assets/images/chris.jpg'),
  7: require('../assets/images/tom.png'),
  8: require('../assets/images/chad.jpg')
}

export default class FriendHomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      verified: false,
      voted: false,
      upVote: true,
      image: null,
      tasks: friendTasks,
      currId: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, margin: 5, marginLeft: 2.5, borderRadius: 5, backgroundColor: !this.state.verified ? '#85d9bf' : '#eee', alignItems: 'center', justifyContent: 'center'}} onPress={() => this.setState({verified: false})}>
                <Text style={{margin: 5}}>Unverified</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, margin: 5, marginRight: 2.5, borderRadius: 5, backgroundColor: this.state.verified ? '#85d9bf' : '#eee', alignItems: 'center', justifyContent: 'center'}} onPress={() => this.setState({verified: true})}>
                <Text style={{margin: 5}}>Verified</Text>
            </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.tasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <OtherTaskItem item={item} onPress={this.showProofPopup.bind(this)} verified={this.state.verified}/>}
          extraData={this.state}
        />
        <PopupDialog
          dialogTitle={<DialogTitle title="Proof" />}
          ref={(popupDialog) => { this.popupProofDialog = popupDialog; }}
          width={0.9}
          height={0.6}
        >
          <View style={{flex: 4}}>
            <View style={{margin: 10, flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
              {this.state.image ? <Image style={{flex: 1}} source={this.state.image} resizeMode={'contain'}/> : <Text>{'Image proving task was completed'}</Text> }
            </View> 
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <TouchableOpacity style={{backgroundColor: (this.state.upVote == false) ? 'red': 'white' , borderRadius: 100, margin: 20}} onPress={() => this.downVotePress()}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'thumbs-down'} size={25} style={{color: (this.state.upVote == false) ? 'white' : 'red'}}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: (this.state.upVote == true) ? 'green' : 'white', borderRadius: 100, margin: 20}} onPress={() => this.upVotePress()}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'thumbs-up'} size={25} style={{ color: (this.state.upVote == true) ? 'white' : 'green'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </PopupDialog>
      </View>
    );
  }

    showProofPopup(id,item) {
      this.setState({image: photos[id] ? photos[id] : null, currId: id, voted: !item.userUpvote, upVote: item.userUpvote})
      this.popupProofDialog.show()
    }

    updateTasks() {
      tasks = this.state.tasks
      currId = this.state.currId
      tasks[currId].userUpvote = this.state.upVote
      this.setState({tasks: tasks})
      console.log(this.state.upVote)
    }

    upVotePress() {
      if (this.state.upVote == true) {
        this.state.upVote = null
      } else {
        this.state.upVote = true
      }
      this.updateTasks()
    }

    downVotePress() {
      if (this.state.upVote == false) {
        this.state.upVote = null
      } else {
        this.state.upVote = false
      }
      this.updateTasks()
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});