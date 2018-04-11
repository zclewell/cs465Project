import { DrawerNavigator } from 'react-navigation'
import React from 'react'

import HomeNavigator from './homeNavigator'
import GroupNavigator from './groupNavigator'
import GroupScreen from '../screens/groupListScreen'
import HomeNavigatorWrapper from '../screens/homeNavigatorWrapper'

const rootNavigator =  DrawerNavigator({
  Home: {
    screen: HomeNavigatorWrapper,
  },
  Groups: {
  	screen: GroupNavigator
  },
});

export default rootNavigator