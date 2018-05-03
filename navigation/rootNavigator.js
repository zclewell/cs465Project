import { DrawerNavigator } from 'react-navigation'
import React from 'react'

import HomeNavigator from './homeNavigator'
import GroupNavigator from './groupNavigator'
import HomeNavigatorWrapper from '../screens/homeNavigatorWrapper'
import HelpScreen from '../screens/helpScreen'
import LeaderboardScreen from '../screens/leaderboardScreen'

const rootNavigator =  DrawerNavigator({
  Home: {
    screen: HomeNavigatorWrapper,
  },
  Groups: {
  	screen: GroupNavigator
  },
  Leaderboard: {
  	screen: LeaderboardScreen
  },
  Help: {
  	screen: HelpScreen,
  	navigationOptions: {
  		title: 'Help Page'
  	}
  },
});

export default rootNavigator