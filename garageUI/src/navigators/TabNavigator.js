import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
} from 'react-navigation';

import ParkNow from '../screens/ParkNow';
import Panel from '../screens/Panel';
import ParkLater from '../screens/ParkLater';

export const PanelTab = StackNavigator({
  Panel: { screen: Panel },
  // CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});

const TabNav = TabNavigator({
  Panel: PanelTab,
  ParkNow: { screen: ParkNow },
  ParkLater: { screen: ParkLater },
}, {
  tabBarOptions: {
  	labelStyle: {
  	  fontWeight: '600',
  	  marginBottom: 5,
  	},
    activeTintColor: 'red'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});

export default TabNav;
