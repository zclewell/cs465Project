import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import GroupCardItem from '../components/GroupCardItem'
import ActionButton from 'react-native-action-button';

const groups = require('../constants/Groups')

export default class GroupListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          keyExtractor={(item, index) => item.key = ''+index}
          renderItem={({item}) => <GroupCardItem item={item} navigation={this.props.navigation}/>}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});