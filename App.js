import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import WorkScreen from './Screens/WorkScreen';
import ResultScreen from './Screens/ResultScreen';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
  
}

const SwitchNavigator = createSwitchNavigator({
  welcome:{screen : WelcomeScreen},
  work:{screen : WorkScreen},
  result:{screen:ResultScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)
