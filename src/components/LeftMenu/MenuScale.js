import React, { Component } from 'react';
import Menu from 'react-native-drawer';
import { Platform, DrawerLayoutAndroid } from 'react-native';
import { Events, Constants } from '@common';
import { Drawer } from '@components';
import { EventEmitter } from '@app/Omni';

export default class MenuScale extends Component {

  componentDidMount() {
    this.sideMenuClick = EventEmitter.addListener(Constants.EmitCode.SideMenuOpen, this.openSideMenu);
    this.sideMenuClose = EventEmitter.addListener(Constants.EmitCode.SideMenuClose, this.closeSideMenu);
  }
  componentWillUnmount() {
    this.sideMenuClick.remove();
    this.sideMenuClose.remove();

  }
  closeSideMenu = () => {
    if (typeof this.drawer !== 'undefined') {
      if (Platform.OS === 'android') {
        return this.drawer.closeDrawer();
      }
      this.drawer.close();
    }
  }
  openSideMenu = () => {
    if (typeof this.drawer !== 'undefined') {
      if (Platform.OS === 'android') {
        return this.drawer.openDrawer();
      }
      this.drawer.open();
    }
  }

  render() {
    if (Platform.OS === 'android') {
      return <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer goToScreen={this.props.goToScreen} />}>
        {this.props.routes}
      </DrawerLayoutAndroid>
    }

    return (
      <Menu
        ref={(_drawer) => this.drawer = _drawer}
        type="static"
        isScale={true}
        captureGestures={false}
        backgroundColor="#1FBCD2"
        tweenHandler={Menu.tweenPresets.parallax}
        tapToClose={true}
        panCloseMask={0.4}
        openDrawerOffset={0.4}
        content={<Drawer goToScreen={this.props.goToScreen} />}>
        {this.props.routes}
      </Menu>
    );
  }
}
