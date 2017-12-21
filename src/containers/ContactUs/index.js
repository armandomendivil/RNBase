import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ContactUs extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text>Email: support@email.com</Text>

          <Text>Tel: (xxx) xxx xx-xx</Text>
      </View>
    );
  }
}
