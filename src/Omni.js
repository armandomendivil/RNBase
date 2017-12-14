import { Constants } from '@common';

export const toast = (msg, duration = 4000) => EventEmitter.emit(Constants.EmitCode.Toast, msg, duration);

//Drawer
export const openDrawer = () => EventEmitter.emit(Constants.EmitCode.SideMenuOpen);
export const closeDrawer = () => EventEmitter.emit(Constants.EmitCode.SideMenuClose); 

import _Timer from 'react-timer-mixin';
export const Timer = _Timer;

import _EventEmitter from 'EventEmitter';
export const EventEmitter = new _EventEmitter();
