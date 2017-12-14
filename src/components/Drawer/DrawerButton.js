import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Styles, Color, Constants } from "@common";
import { Icon } from '@app/Omni';

class DrawerButton extends Component {

  render() {
    const {text, onPress, icon} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container]}
        onPress={onPress}>
        {/* <Icon name={icon} color={Color.lightTextPrimary} size={20} /> */}
        <Text style={[styles.text]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Styles.Common.RowCenterLeft,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    marginLeft: 20,
    color: Color.lightTextPrimary,
    fontSize: Styles.FontSize.medium,
    fontFamily: Constants.fontFamily
  },
});

DrawerButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.string,
};
DrawerButton.defaultProps = {
  text: 'Default button name',
  onPress: () => alert('Drawer button clicked'),
};

export default DrawerButton;
