import { StackNavigator } from 'react-navigation'
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import groupListScreen from '../screens/groupListScreen'
import groupDetailScreen from '../screens/groupDetailScreen'
import groupCreateScreen from '../screens/groupCreateScreen'

const GroupNavigator =  StackNavigator({
  Home: {
    screen: groupListScreen,
  },
  Detail: {
  	screen: groupDetailScreen
  },
  Create: {
  	screen: groupCreateScreen
  }
});

export default class HomeNavigatorWrapper extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      	<View style={{height: 24, backgroundColor: '#85d9bf'}}/>
      	<View style={{ backgroundColor: '#85d9bf'}}>
      		<TouchableOpacity style={{ margin: 10, marginBottom: 0}} onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>
      			<Icon name={'bars'} style={{fontSize: 30}}/>
      		</TouchableOpacity>
      	</View>
        <View style={{flex: 1, marginBottom: 10}}>
          <GroupNavigator/>
        </View>
      </View>
    );
  }
}