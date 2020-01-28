import React from 'react';
import {ProgressBarAndroid, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
var currentWeekNumber = require('current-week-number');
import {Ionicons} from '@expo/vector-icons'


const FoodBudgetScreen = () =>{
    var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var now       = new Date();
    var thisMonth = months[now.getMonth()]; 
    
    return(
        <View style={styles.container}>
            <Text style={styles.header1}>{thisMonth}</Text>
        <Text style={styles.header}>Week {currentWeekNumber()}</Text>
        <Text style={styles.text}>Current food budget this month</Text>
        <ProgressBarAndroid
        style={styles.progBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
        <Text style={styles.text}>1500 kr / 3000 kr</Text>
      </View>
    )
}

FoodBudgetScreen.navigationOptions = ({navigation}) =>{
    
   
   
    return{  
        headerRight: (
        <TouchableOpacity
        style={styles.headerRight}
        onPress={()=> console.log("change settings")}>
        <Ionicons 
        size={30}
         name='ios-settings'/>
        </TouchableOpacity>
        )
    }
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header1:{
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    header:{
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    progBar:{
        transform: [{ scaleX: 1.0 }, { scaleY: 4 }],
        width: 300,
        alignSelf: 'center'
       
    },
    text:{
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic'

    },
    headerRight:{}
  });

export default FoodBudgetScreen;