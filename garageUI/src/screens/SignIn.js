import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <DefaultButton text='Sign In'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    color:'blue',
    fontSize: 30,
  }

});
