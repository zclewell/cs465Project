import { TabNavigator } from 'react-navigation'
import React from 'react'
import { View } from 'react-native'

import myHomeScreen from '../screens/myHomeScreen'
import friendHomeScreen from '../screens/friendHomeScreen'

const HomeNavigator =  TabNavigator({
  Me: {
    screen: myHomeScreen,
  },
  Friends: {
  	screen: friendHomeScreen,
  },
},{
	tabBarOptions: {
		indicatorStyle: {backgroundColor: 'white'},
		style: {paddingTop: 24, backgroundColor: 'orange'},
	}
});

export default HomeNavigator