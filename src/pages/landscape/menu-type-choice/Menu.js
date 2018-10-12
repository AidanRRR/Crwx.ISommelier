import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Styles.js';
import mainStyles from '../../../styles/Styles.js';

export default class Menu extends React.Component {
    render() {
        return (
            <View style={mainStyles.container}>
                <Text>Classic</Text>
                <Text>Rock 'n Roll</Text>
                <Text>Basement</Text>
            </View>
        )
    }
}