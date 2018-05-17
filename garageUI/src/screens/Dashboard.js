import React, { Component } from 'react';
import TabNav from '../navigators/TabNavigator';

export default class Dashboard extends Component {
  static navigationOptions = () => ({
    header: null,
    gesturesEnabled: false,
  });

  render() {
  	return (
  	  <TabNav />
  	);
  }
}
