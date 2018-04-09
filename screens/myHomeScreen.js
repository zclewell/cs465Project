import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome'


import MyTaskItem from '../components/MyTaskItem.js'

const myTasks = require('../constants/UserTasks')
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class MyHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={myTasks}
          keyExtractor={(item, index) => item.key = item.title}
          renderItem={({item}) => <MyTaskItem item={item} onPress={this.showPopup.bind(this)}/>}
        />
        <PopupDialog
          dialogTitle={<DialogTitle title="Prove it!" />}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          width={0.9}
          height={0.6}
        >
          <View style={{flex: 4}}>
            <View style={{margin: 10, flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{'Image proving task was completed'}</Text>
            </View> 
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 100, marginRight: 20}}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'times'} size={25} style={{ color: 'white'}}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 100, marginLeft: 20}}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 25, margin: 15}}>
                <Icon name={'check'} size={25} style={{ color: 'white'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </PopupDialog>
      </View>
    );
  }


  showPopup(){
    this.popupDialog.show()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});