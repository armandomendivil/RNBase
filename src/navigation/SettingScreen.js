import React, { Component } from 'react';

import { Menu } from './IconNav';
import { Languages } from '@common';
import { Setting } from '@containers';

export default class SettingScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: Languages.Settings,
    headerLeft: Menu(),
  })
  render() {
    return <Setting />
  }
}
