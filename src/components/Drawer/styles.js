import React, { StyleSheet, Dimensions } from 'react-native';
import { Color, Styles } from '@common';

const { width, height, scale } = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    container: {
        backgroundColor: Color.primary,
        flexGrow: 1,
        paddingTop: 20
    },
    avatar: {
        height: Styles.width / 4,
        width: Styles.width / 4,
        borderRadius: Styles.width / 8,
        marginBottom: 20
    },
    avatar_background: {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: Color.primary
    },
    fullName: {
        fontWeight: '600',
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: Styles.FontSize.medium,
        marginBottom: 6
    },
    email: {
        color: '#FFF',
        backgroundColor: 'transparent',
        fontSize: 13
    }
});
