import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DashBoardScreen from './src/screens/DashBoardScreen'
import GroceryListScreen from './src/screens/GroceryListScreen'
import FoodBudgetScreen from './src/screens/FoodBudgetScreen';
import AddProduct from './src/components/AddProduct';
import {Provider} from './src/context/GroceryContext'
import FixedCostScreen from './src/screens/FixedCostScreen';
import AddCost from './src/components/AddCost';

const navigator = createStackNavigator({
  Index: DashBoardScreen,
  GroceryList: {
    screen: GroceryListScreen,
    navigationOptions:{
      title:'Grocery list'}
    },
  FoodBudget: {
    screen: FoodBudgetScreen,
    navigationOptions:{
      title:'Food budget'}
    },
  Create : AddProduct,
  FixedCost : {
    screen: FixedCostScreen,
    navigationOptions:{
      title:'Fixed cost'}
    },
  AddCost : AddCost,
  

},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'PlanShare',
    headerStyle:{
      backgroundColor: 'white'
    }
  }
})



const App = createAppContainer(navigator);

export default () => {
  return <Provider>
      <App/>
    </Provider>
};