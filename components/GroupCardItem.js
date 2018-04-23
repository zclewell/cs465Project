import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class GroupCardItem extends React.Component {
  render() {
    let item = this.props.item
    let name = item ? item.name : 'null name'
    let rankings = item ? item.rankings : []
    let color = item ? item.color : 'red'

    const { navigate } = this.props.navigation
    return (
        <TouchableOpacity onPress={() => navigate('Detail', {item: item, manipulationFunctions: this.props.manipulationFunctions})}>
          <View style={styles.container}>
            <View style={[styles.header,{backgroundColor: color, borderTopRightRadius: 10, borderTopLeftRadius: 10}]}/>
              <Text style={styles.title}>{name}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Icon style={{color: '#D4AF37', margin: 5, fontSize: 15}} name={'trophy'}/>
                </View>
                <Text style={styles.ranking}>{rankings[0].name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Icon style={{color: '#c0c0c0', margin: 5, fontSize: 15}} name={'trophy'}/>
                </View>
                <Text style={styles.ranking}>{rankings[1].name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Icon style={{color: '#CD7F32', margin: 5, fontSize: 15}} name={'trophy'}/>
                </View>
                <Text style={styles.ranking}>{rankings[2].name}</Text>
              </View>
            </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    margin: 10,
    marginBottom: 0,
    elevation: 5,
    borderRadius: 10,
  },
  ranking: {
    margin: 10,
    marginTop: 0,
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
  },
  group: {
    fontSize: 15,
    margin: 5,
    marginTop: 0
  },
  titleGroupContainer: {
    flex: 4,
  },
  completedContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  header: {
    height: 40
  }
});