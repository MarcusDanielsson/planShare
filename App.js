import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DashBoardScreen from './src/screens/DashBoardScreen'
import GroceryListScreen from './src/screens/GroceryListScreen'
import FoodBudgetScreen from './src/screens/FoodBudgetScreen';

const navigator = createStackNavigator({
  Index: DashBoardScreen,
  GroceryList: GroceryListScreen,
  FoodBudget: FoodBudgetScreen

},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'PlanShare'
  }
})

export default createAppContainer(navigator)


