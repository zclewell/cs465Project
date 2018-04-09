import { DrawerNavigator } from 'react-navigation'

import HomeNavigator from './homeNavigator.js'

const rootNavigator =  DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
});

export default rootNavigator