import { DrawerNavigator } from 'react-navigation'

import HomeNavigator from './homeNavigator'
import GroupNavigator from './groupNavigator'

const rootNavigator =  DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Groups: {
  	screen: GroupNavigator
  }
});

export default rootNavigator