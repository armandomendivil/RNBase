import React, { Platform, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { Color, Constants } from '@common';

const { width, height, scale } = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        height: 40,
        width: 160,
        borderRadius: 20,
        backgroundColor: Color.primary
    },
    buttonText: {
        fontSize: 15,
        // fontFamily: Constants.fontHeader
    }
});
