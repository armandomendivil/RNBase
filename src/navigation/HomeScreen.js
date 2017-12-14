import React, { Component } from 'react';
import { Logo, Menu, HeaderHomeRight } from './IconNav';
import { Color, Styles } from '@common';
import { Home } from '@containers';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: Logo(),
    headerLeft: Menu(),
    headerRight: HeaderHomeRight(navigation),
    tabBarIcon: ({tintColor}) => <TabBarIcon icon={Images.IconHome} tintColor={tintColor}/>,

    headerTintColor: Color.headerTintColor,
    headerStyle: Styles.Common.toolbar,
    headerTitleStyle: Styles.Common.headerStyle,
  })

  render() {
    const { navigate } = this.props.navigation;

    return <Home />
  }
}
