import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen  from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  ReadStoryScreen:ReadStoryScreen,
  WriteStoryScreen:WriteStoryScreen
})

const AppContainer = createAppContainer(AppNavigator)

