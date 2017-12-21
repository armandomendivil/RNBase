import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import OneSignal from 'react-native-onesignal';

import app from '@redux';
import { Device } from '@common';
import { EventEmitter } from '@app/Omni';

import Router from './Router';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

import configureStore from './store/configureStore';

const { persistor, store } = configureStore();

export default class ReduxWrapper extends Component {
  state = { appIsReady: false };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.ignoredYellowBox = ['Warning: View.propTypes', 'Warning: BackAndroid'];
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    console.log('Device had been registered for push notifications!', notifData);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <PersistGate
        persistor={persistor}
      >
      <Provider store={store}>
        <Router />
      </Provider>
    </PersistGate>
    )
  }
}
