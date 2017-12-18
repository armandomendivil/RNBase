import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Images, Styles, Color } from '@common';
import { NavigationBarIcon } from '@components';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  numberWrap: {
    ...Styles.Common.ColumnCenter,
    position: 'absolute',
    top: -10, right: -10,
    height: 18,
    minWidth: 18,
    backgroundColor: Color.error,
    borderRadius: 9,
  },
  number: {
    color: 'white',
    fontSize: 12,
    marginLeft: 3,
    marginRight: 3,
  },
});

class TabBarIcon extends Component {

  render() {
    const { icon, tintColor, css, carts, cartIcon, wishList, wishlistIcon } = this.props;

    const numberWrap = (number = 0) => (<View style={styles.numberWrap}>
      <Text style={styles.number}>{number}</Text>
    </View>)
    return (
      <View style={{justifyContent: 'center'}}>
        <Image
          ref="image"
          source={icon}
          style={[styles.icon, {tintColor}, css]}
        />
        {(wishlistIcon && wishList.total > 0) && numberWrap(wishList.total || 0)}
        {(cartIcon && carts.total > 0) && numberWrap(carts.total || 0)}
      </View>
    );
  }
}

const mapStateToProps = ({carts, wishList}) => ({carts, wishList});
export default connect(mapStateToProps, null, null)(TabBarIcon);
