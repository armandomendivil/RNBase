import React from 'react';
import { Text } from 'react-native'
import { TabBar, TabBarIcon } from '@components'
import { Color, Images } from '@common';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
});

export default TabNavigator({
  Default: {
    screen: ({ navigation }) => <HomeStack screenProps={{ rootNavigation: navigation }} />,
    navigationOptions: {
      header: null,
      tabBarIcon: ({tintColor}) => <TabBarIcon icon={Images.IconHome} tintColor={tintColor}/>,
    },
  },
},
{
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: Color.tabbarTint,
    inactiveTintColor: Color.tabbarColor,
  },
  lazy: true
});
