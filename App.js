import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DashBoardScreen from './src/screens/DashBoardScreen'


const navigator = createStackNavigator({
  Index: DashBoardScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'PlanShare'
  }
})

export default createAppContainer(navigator)


