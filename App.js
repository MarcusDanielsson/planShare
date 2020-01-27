import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DashBoardScreen from './src/screens/DashBoardScreen'
import GroceryListScreen from './src/screens/GroceryListScreen'
import FoodBudgetScreen from './src/screens/FoodBudgetScreen';
import ProductModal from './src/components/AddProduct';
import {Provider} from './src/context/GroceryContext'

const navigator = createStackNavigator({
  Index: DashBoardScreen,
  GroceryList: GroceryListScreen,
  FoodBudget: FoodBudgetScreen,
  Create : ProductModal

},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'PlanShare'
  }
})



const App = createAppContainer(navigator);

export default () => {
  return <Provider>
      <App/>
    </Provider>
};