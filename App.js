/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,StatusBar} from 'react-native';

import TabNavigator from './App/navigation/TabNavigator';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
         <StatusBar hidden= {true}/>
        <TabNavigator/>
      </View>
    );
  }
}


