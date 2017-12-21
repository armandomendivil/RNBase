import { persistStore, persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { Constants, Device, Languages } from '@common';
import OneSignal from 'react-native-onesignal';
import { EventEmitter } from '@app/Omni'

import app from '@redux';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, app)

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})

export default configureStore = () => {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      // loggerMiddleware
    )
  )
  let store = createStore(reducer, undefined, enhancer);
  console.log(store);
  debugger;
  let persistor = persistStore(store, {
    key: 'root',
    store: AsyncStorage,
  }, (results, err) => {
      debugger;
      Languages.setLanguage(store.getState().language.lang)
      EventEmitter.emit(Constants.EmitCode.MenuReload, store.getState().language.lang)
  })
  if(module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('@redux').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return { persistor, store }
}
