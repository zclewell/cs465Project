import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome'


import MyTaskItem from '../components/MyTaskItem.js'

const myTasks = require('../constants/UserTasks')
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class MyHomeScreen extends React.Component {
  constructor() {
    super() 
    this.state = {
      tasks: myTasks,
      currTask: null,
      image: false,
      photos: [require('../assets/images/example1.jpg'),require('../assets/images/example2.png')]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <MyTaskItem item={item} onPress={this.showPopup.bind(this)}/>}
          extraData={this.state}
        />
        <PopupDialog
          dialogTitle={<DialogTitle title="Prove it!" />}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          width={0.9}
          height={0.6}
        >
          <View style={{flex: 4}}>
            <View style={{margin: 10, flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{flex: 1}} source={this.state.photos[0]} resizeMode={'contain'}/>
            </View> 
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 100, margin: 20}} onPress={() => this.negativeClick()}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'times'} size={25} style={{ color: 'white'}}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 100, margin: 20}} onPress={() => this.postiveClick()}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'check'} size={25} style={{ color: 'white'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </PopupDialog>
      </View>
    );
  }


  showPopup(task){
    this.setState({currTask: task})
    this.state.currTask = task
    this.popupDialog.show()
  }

  postiveClick() {
    tasks = this.state.tasks
    currTask = this.state.currTask
    tasks.forEach(function(curr) { if(currTask.id == curr.id) {curr.status = "completed"}})
    this.setState({tasks: tasks})
    this.popupDialog.dismiss()
  }

  negativeClick() {
    this.popupDialog.dismiss()
  }

  addPhoto() {
    this.photoPopup.show()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});