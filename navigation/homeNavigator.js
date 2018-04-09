import { TabNavigator } from 'react-navigation'

import myHomeScreen from '../screens/myHomeScreen'
import friendHomeScreen from '../screens/friendHomeScreen'

const HomeNavigator =  TabNavigator({
  Me: {
    screen: myHomeScreen,
  },
  Friends: {
  	screen: friendHomeScreen,
  },
});

export default HomeNavigator