import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 1}} />

        <View style={{flex: 2,  alignItems: 'center'}}>
          <Text>Home</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
