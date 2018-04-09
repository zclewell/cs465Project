import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import  Icon from 'react-native-vector-icons/FontAwesome'

import OtherTaskItem from '../components/OtherTaskItem.js'

const friendTasks = require('../constants/FriendTasks')
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class FriendHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={friendTasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <OtherTaskItem item={item} onPressComplete={this.showPopupComplete.bind(this)} onPressIncomplete={this.showPopupIncomplete.bind(this)}/>}
        />
        <PopupDialog
          dialogTitle={<DialogTitle title="Proof" />}
          ref={(popupDialog) => { this.popupDialogComplete = popupDialog; }}
          width={0.9}
          height={0.6}
        >
          <View style={{flex: 4}}>
            <View style={{margin: 10, flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{'Image proving task was completed'}</Text>
            </View> 
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 100}}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'thumbs-down'} size={25} style={{ color: 'white'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </PopupDialog>
        <PopupDialog
          dialogTitle={<DialogTitle title="Proof" />}
          ref={(popupDialog) => { this.popupDialogIncomplete = popupDialog; }}
          width={0.9}
          height={0.6}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{'No proof submitted!'}</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }

  showPopupComplete(){
    this.popupDialogComplete.show()
  }

  showPopupIncomplete() {
    this.popupDialogIncomplete.show()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});