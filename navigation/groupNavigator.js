import { StackNavigator } from 'react-navigation'

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

export default GroupNavigator