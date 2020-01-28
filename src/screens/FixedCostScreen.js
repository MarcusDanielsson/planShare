import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const FixedCostScreen = () =>{
    return(

        <View>
            <View style={styles.headerRow}>
            <Text>Product</Text>
            <Text>Cost</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
header:{
    alignSelf:'center',
    marginTop: 10,
    fontWeight: 'bold'
},
headerRow:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 10,
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
}
})

export default FixedCostScreen;

FixedCostScreen.navigationOptions = ({navigation}) =>{

    return{  
        headerRight: (
        <TouchableOpacity
        onPress={()=> navigation.navigate("AddCost")}>
        <Ionicons 
            size={30}
            name='ios-settings'/>
        </TouchableOpacity>
        )
    }
}