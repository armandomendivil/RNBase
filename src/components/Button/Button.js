import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Platform, TouchableHighlight, Text } from 'react-native';
import { Color } from "@common";

const Button = (props) => {
  if (props.type === "border") {
    return <BorderButton {...props} />
  } else if (props.type === "image") {
    return <ImageButton {...props} />
  } else if (props.type === "text") {
    return <TextButton {...props} />
  } else if (props.type === "tab") {
    return <TabButton {...props} />
  } else {
    return <StandardButton {...props} />
  }
};

const StandardButton = (props) => (
  <TouchableHighlight disabled={props.disabled} onPress={() => props.onPress()}
                      style={[styles.button, props.style, props.inactive && {backgroundColor: "#C6D8E4"}]}
                      activeOpacity={0.9} underlayColor="#ccc">
    <View style={styles.buttonView}>
      {props.icon && <Image source={props.icon} defaultSource={props.defaultSource} style={[styles.imageIcon, {tintColor: props.color}]} />}
      <Text {...props} style={[styles.text, props.textStyle]}>{props.text}</Text>
    </View>
  </TouchableHighlight>
);

const ImageButton = (props) => (
  <TouchableHighlight disabled={props.disabled} onPress={() => (props.onPress())}
                      activeOpacity={0.8}
                      underlayColor={"#eeeeee"}
                      style={props.buttonStyle}>
    <Image {...props} defaultSource={props.defaultSource} style={[props.imageStyle, props.isAddWishList && {tintColor: Color.heartActiveWishList }, props.isAddToCart && {tintColor: Color.TabActive} ]} resizeMode="contain" />
  </TouchableHighlight>
);

const TabButton = (props) => (
  <TouchableOpacity onPress={() => (props.onPress())}
                    activeOpacity={0}
                    selected={props.selected}>
    <View style={[styles.tabButton, props.buttonStyle, props.selected && styles.tabActive]}>
      <Text style={[styles.tabButtonText, props.textStyle, props.selected && styles.tabActiveText]}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabActiveText: {
    color: Color.TabActiveText
  },
  tabActive: {
    marginTop: 1,
    borderBottomWidth: 2,
    borderBottomColor: Color.TabActive
  },
  button: {
    backgroundColor: "#0B4A7D",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  imageIcon: {
    resizeMode: 'contain',
    width: 20,
    marginRight: 8
  },
  text: {
    color: "white",
    fontSize: 17,
    marginTop: 3
  },
  borderButton: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white"
  },
  tabButton: {
    height: 50,
    justifyContent: "center"
  },
  tabButtonText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 12,
  }
});

export default Button;
