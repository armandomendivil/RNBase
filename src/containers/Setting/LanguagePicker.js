import React, { Component } from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import RNRestart from 'react-native-restart';
import { RadioButtons } from 'react-native-radio-buttons';

import Icon from 'react-native-vector-icons/Ionicons';

import { Constants, Icons, Color, Languages } from '@common';
import { Button } from '@components';

import styles from './styles';

class LanguagePicker extends Component {
    constructor(props){
        super(props);
        this.state= {
            selectedOption: Languages.getLanguage(),
            isLoading: false
        }
    }

    render() {
        const { switchLanguage } = this.props;
        const onPress = () => {
            Alert.alert(
                Languages.Confirm,
                Languages.SwitchLanguageConfirm,
                [
                    {text: Languages.CANCEL, onPress: () => undefined},
                    {
                        text: Languages.OK, onPress: async () => {
                            this.setState({isLoading: true})
                            await switchLanguage(this.state.selectedOption);
                            RNRestart.Restart();

                        }
                    },
                ]
            )
            return true
        }
        const renderOption = (option, selected, onSelect, index) => {
            return (
                <TouchableOpacity onPress={onSelect} key={index}
                                  style={{
                                      padding: 10,
                                      backgroundColor: selected
                                          ? Color.DirtyBackground
                                          : Color.Background,
                                      flexDirection: 'row', alignItems: 'center',
                                      width: undefined,
                                  }}>
                    <Icon name={selected ? Icons.Ionicons.RatioOn : Icons.Ionicons.RatioOff} size={15}/>
                    <Text style={selected ? {fontWeight: 'bold', width: null, height: null, marginLeft: 10,} : {marginLeft: 10,}}>{option}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <RadioButtons
                    options={Languages.getAvailableLanguages()}
                    onSelection={(selectedOption) => this.setState({selectedOption})}
                    selectedOption={this.state.selectedOption}
                    renderOption={ renderOption }
                    renderContainer={ (optionNodes) => <View style={{margin: 10}}>{optionNodes}</View> }
                />
                <View style={styles.buttonContainer}>
                    <Button text={Languages.SwitchLanguage}
                            style={styles.button}
                            textStyle={styles.buttonText}
                            isLoading={this.state.isLoading}
                            onPress={onPress} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  debugger;
  return ({language : state.language})
}


function mergeProps(stateProps, dispatchProps, ownProps) {
  const {dispatch} = dispatchProps;
  const {actions} = require('@redux/LangRedux');
  return {
    ...ownProps,
    ...stateProps,
    switchLanguage: (language) => actions.switchLanguage(dispatch,language)
  };
}


module.exports = connect(mapStateToProps, undefined, mergeProps)(LanguagePicker)
