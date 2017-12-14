'use strict';
import React, {Component} from "react";
import Menu from "@custom/react-native-drawer";
import {Events, Constants} from '@common';
import {Drawer} from "@components"
import {EventEmitter} from '@app/Omni';

export default class MenuOverlay extends Component {
  componentDidMount() {
    this.sideMenuClick = EventEmitter.addListener(Constants.EmitCode.SideMenuOpen, this.openSideMenu);
    this.sideMenuClose = EventEmitter.addListener(Constants.EmitCode.SideMenuClose, this.closeSideMenu);
  }
  componentWillUnmount() {
    this.sideMenuClick.remove();
    this.sideMenuClose.remove();

  }
  closeSideMenu = () => this.drawer.close();
  openSideMenu = () => this.drawer.open();

  render() {
    const drawerStyles = {
      drawer: {backgroundColor: 'rgba(37, 149, 242, 0.5)'},
      main: {paddingLeft: 3},
    }
    return (
      <Menu
        ref={(_drawer) => this.drawer = _drawer}
        type="overlay"
        tapToClose={true}
        panCloseMask={0.2}
        openDrawerOffset={0.2}
        styles={drawerStyles}
        content={<Drawer goToScreen={this.props.goToScreen} />}>
        {this.props.routes}
      </Menu>
    );
  }

}
