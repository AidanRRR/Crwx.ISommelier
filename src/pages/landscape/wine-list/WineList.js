import React from 'react';
import {Image, Text, View} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";

import styles from './Styles.js';
import mainStyles from '../../../styles/Styles.js';

export default class WineList extends React.Component {
    render() {
        const imageSize = 35;
        const descriptionSize = 65;

        return (
            <View style={mainStyles.container}>
                <Text style={styles.menuItemHeader}>CLASSIC</Text>
                <View style={styles.slugContainer}>
                    <Text style={styles.menuItemText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam varius placerat uma interdum laocreet. Mauris commodo efficitur nunc.
                    </Text>
                </View>
                <Grid style={styles.itemsContainer}>
                    <Row>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col size={imageSize} style={styles.itemImage}>
                                    <Image source={require('./wine.png')} />
                                </Col>
                                <Col size={descriptionSize}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>Caracol Serrano Tinto</Text>
                                        <Text style={styles.itemDescription}>2012</Text>
                                        <Text style={styles.itemPricing}> € 7 / € 35</Text>
                                    </View>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}