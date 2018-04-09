import { DrawerNavigator } from 'react-navigation'
import React from 'react'

import HomeNavigator from './homeNavigator'
import GroupNavigator from './groupNavigator'
import GroupScreen from '../screens/groupListScreen'

const rootNavigator =  DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Groups: {
  	screen: GroupNavigator
  },
});

export default rootNavigator