import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Menu from './src/pages/landscape/menu-type-choice/Menu';
import WineList from "./src/pages/landscape/wine-list/WineList";

export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
    Menu: Menu,
    WineList: WineList
});