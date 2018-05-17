import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Panel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
              title: 'My Bookings',
              route:''
            },
            {
              title: 'My Profile',
              route:''
            },
            {
              title: 'My Spaces',
              route:''
            }
          ]}
          renderItem={({item}) =>
            <View style={styles.item}>
            <DefaultButton text='{item.title}' navigation={this.props.navigation}/>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
