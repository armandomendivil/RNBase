import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import OneSignal from 'react-native-onesignal';
import Reactotron from 'reactotron-react-native';
import { Constants, Device, Languages } from '@common';
import { EventEmitter } from '@app/Omni';
import app from '@redux';

import '../ReactotronConfig';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, app);

export default configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk)
  );

  let store = null;
  if (__DEV__) {
    store = Reactotron.createStore(reducer, enhancer);
  } else {
    store = createStore(reducer, undefined, enhancer);
  }

  let persistor = persistStore(store, {
    key: 'root',
    store: AsyncStorage,
  }, (results, err) => {
      Languages.setLanguage(store.getState().language.lang)
      EventEmitter.emit(Constants.EmitCode.MenuReload, store.getState().language.lang)
  })
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('@redux').default
      store.replaceReducer(nextRootReducer)
    });
  }
  return { persistor, store }
}
