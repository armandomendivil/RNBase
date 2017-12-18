import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { toast, closeDrawer } from './Omni';
import { Config, Device, Styles } from "@common";
import { MyToast, MyNetInfo } from '@containers';
import Navigation from '@navigation';

import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native'
import './ReactotronConfig';
const middleware = [thunk];
import reducers from '@redux';

import MenuSide from '@components/LeftMenu/MenuScale';

let store = null;
if (__DEV__) {
  store = Reactotron.createStore(reducers, compose(applyMiddleware(...middleware), autoRehydrate()));
} else {
  store = compose(applyMiddleware(...middleware), autoRehydrate())(createStore)(reducers);
}

persistStore(store, {
  storage: AsyncStorage,
  blacklist: [
    'netInfo',
    'toast',
    'nav',
  ]
});

export default class Router extends Component {
  goToScreen = (routeName, params, isReset: boolean = false) => {
    const { navigator } = this.refs;
    if (!navigator) {
      return toast('Cannot navigate');
    }

    navigator.dispatch({type: 'Navigation/NAVIGATE', routeName, params});
    closeDrawer();
  }

  componentWillMount() {
    !Device.isIphoneX && StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}
