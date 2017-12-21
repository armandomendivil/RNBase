import { combineReducers } from 'redux';
import { reducer as NetInfoReducer } from './NetInfoRedux';
import { reducer as ToastReducer } from './ToastRedux';
import { reducer as LangRedux } from './LangRedux';

export default {
  netInfo: NetInfoReducer,
  toast: ToastReducer,
  language: LangRedux,
};
