'use strict';
import React, {Component} from "react";
import Menu from "@custom/react-native-drawer";
import {Events, Constants} from '@common';
import {Drawer} from "@components"
import {EventEmitter} from '@app/Omni';

export default class MenuSmall extends Component {
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
    return (
      <Menu
        ref={(_drawer) => this.drawer = _drawer}
        type="static"
        tweenHandler={Menu.tweenPresets.parallax}
        tapToClose={true}
        backgroundColor="#34BC99"
        panCloseMask={0.6}
        panThreshold={0.6}
        openDrawerOffset={0.6}
        content={<Drawer goToScreen={this.props.goToScreen} />}>
        {this.props.routes}
      </Menu>
    );
  }

}
