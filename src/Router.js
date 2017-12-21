import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Config, Device, Styles, Languages, Constants } from '@common';
import { MyToast, MyNetInfo } from '@containers';
import Navigation from '@navigation';
import MenuSide from '@components/LeftMenu/MenuScale';

import { toast, closeDrawer, EventEmitter } from './Omni';
import configureStore from './store/configureStore';

const { persistor, store } = configureStore();

export default class Router extends Component {
  goToScreen = (routeName, params, isReset: boolean = false) => {
    const { navigator } = this.refs;
    if (!navigator) {
      return toast('Cannot navigate');
    }

    navigator.dispatch({ type: 'Navigation/NAVIGATE', routeName, params });
    closeDrawer();
  }

  componentWillMount() {
    !Device.isIphoneX && StatusBar.setHidden(true);
  }

  render() {
    return (
        <MenuSide
          goToScreen={this.goToScreen}
          routes={
            <View style={Styles.app}>
              <StatusBar backgroundColor="#000" hidden={Device.isIphoneX ? false : !Config.showStatusBar} />
              <Navigation ref={'navigator'}/>
              <MyToast />
              <MyNetInfo />
            </View>
          }
        />
    )
  }
}
