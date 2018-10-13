import React from 'react';
import { Text, View } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";

import styles from './Styles.js';
import mainStyles from '../../../styles/Styles.js';

export default class Menu extends React.Component {
    render() {
        return (
            <View style={mainStyles.container}>
                <Grid style={styles.container}>
                    <Col style={styles.column}>
                        <Text style={styles.menuItemHeader}>CLASSIC</Text>
                        <Text style={styles.menuItemText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam varius placerat urna interdum laoreet. Mauris commodo effictur nunc.
                        </Text>
                    </Col>
                    <Col style={styles.column}>
                        <Text style={styles.menuItemHeader}>ROCK 'N ROLL</Text>
                        <Text style={styles.menuItemText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam varius placerat urna interdum laoreet. Mauris commodo effictur nunc.
                        </Text>
                    </Col>
                    <Col style={styles.column}>
                        <Text style={styles.menuItemHeader}>BASEMENT</Text>
                        <Text style={styles.menuItemText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam varius placerat urna interdum laoreet. Mauris commodo effictur nunc.
                        </Text>
                    </Col>
                </Grid>
            </View>
        )
    }
}