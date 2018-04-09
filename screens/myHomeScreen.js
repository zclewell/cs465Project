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