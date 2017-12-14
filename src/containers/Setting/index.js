import React, { Component } from 'react';
import { View } from 'react-native';

import LanguagePicker from './LanguagePicker';

export default class Setting extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 40, backgroundColor: '#fff'}}>
        <LanguagePicker />
      </View>
    )
  }
}
