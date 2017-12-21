import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import thunk from 'redux-thunk';
import { Constants, Device, Languages } from '@common';
import OneSignal from 'react-native-onesignal';
import { EventEmitter } from '@app/Omni'
import reducers from '@redux';
import Reactotron from 'reactotron-react-native';
// import './ReactotronConfig';

import Router from './Router';

import app from '@redux';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

import configureStore from './store/configureStore';

const { persistor, store } = configureStore()

// const middleware = [
//   thunk,
// ];
//
// var store = null;
// if (__DEV__) {
//   store = Reactotron.createStore(reducers, compose(applyMiddleware(...middleware), autoRehydrate({log: true})));
// } else {
//   store = compose(applyMiddleware(...middleware), autoRehydrate())(createStore)(reducers);
// }
//
//
// persistStore(store, {
//   storage: AsyncStorage,
//   blacklist: [
//     'netInfo',
//     'toast',
//   ],
// }, () => {
//   Languages.setLanguage(store.getState().language.lang)
//   EventEmitter.emit(Constants.EmitCode.MenuReload, store.getState().language.lang)
// });

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
