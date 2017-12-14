import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Styles, Color, Icons, Config, Languages, Constants, Images } from "@common";
import DrawerButton from './DrawerButton';
import { EventEmitter } from '@app/Omni'

import styles from './styles';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state= {reload: false}

  }

  componentDidMount(){
    EventEmitter.addListener(Constants.EmitCode.MenuReload, this.setLanguage.bind(this));

  }
  setLanguage(lang){
    Languages.setLanguage(lang)
    this.setState({reload: true})
  }

  render() {
    //const {} = this.state;
    const {goToScreen} = this.props;
    const user = this.props.user;
    // console.log("user Drawer:::", user);
    console.log(Languages);
    //TODO: move this list to constructor after finish
    this.buttonList = [
      {
        text: Languages.home,
        onPress: () => goToScreen('Default', undefined, true),
        // icon: Icons.MaterialCommunityIcons.Home,
      },
      {
        text: Languages.Settings,
        onPress: () => goToScreen('SettingScreen', undefined, true),
        // icon: Icons.MaterialCommunityIcons.Settings,
      },
      !user
        ? {
        text: Languages.Login,
        // icon: Icons.MaterialCommunityIcons.SignIn,
        onPress: () => goToScreen('LoginScreen', {isLogout: false}, true),
      } :
        {
          text: Languages.Logout,
          // icon: Icons.MaterialCommunityIcons.SignOut,
          onPress: () => goToScreen('LoginScreen', {isLogout: true}, true),
        },
    ];

    const avatar = (user && user.avatar_url) ? {uri: user.avatar_url} : (user && user.picture) ? {uri: user.picture.data.url} : Images.defaultAvatar;
    const name = () => {
      if(user != null ){
        if(typeof user.last_name != 'undefined' || typeof user.first_name != 'undefined' ){
          let first = user.first_name != null ? user.first_name : '';
          let last =  user.last_name != null ? user.last_name : '';
          return first + ' ' + last;
        }else if(typeof user.name != 'undefined' && user.name != null){
          return user.name;
        }else{
          return Languages.GuestAccount;
        }
      }
      return Languages.GuestAccount;
    }

    const menu = () => <View style={styles.container}>
        <View style={[styles.avatar_background, Styles.Common.ColumnCenter, Constants.RTL && {flexDirection: 'row-reverse'}]}>
          <Image source={avatar} style={[styles.avatar, Constants.RTL && { left: -20 }]} />

          <View style={Styles.Common.ColumnCenter}>
            <Text style={styles.fullName}>{name()}</Text>
            <Text style={styles.email}>{user ? user.email : ''}</Text>
          </View>
        </View>
        <ScrollView>
          {this.buttonList.map((item, index) => <DrawerButton key={index} {...item} />)}
        </ScrollView>
      </View>

    if(this.state.reload){
      return menu();
    }
    return menu()
  }
}


const mapStateToProps = ({user}) => ({ user: {} })


module.exports = connect(mapStateToProps)(Drawer);
