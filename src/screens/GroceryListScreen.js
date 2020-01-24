import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'

const GroceryListScreen = () =>{
    const[grocery, setGrocery] = useState([]);
    return(
        <View flex={1}> 
        <View style={styles.title}><Text >Product</Text>
            <Text>Quantity</Text>
            <Text >Est. Price</Text>
        </View>
        <View style={styles.content}></View>
        <View style={styles.bottom}><Text>Estimated price:</Text></View>
        
        </View>
    )
}

GroceryListScreen.navigationOptions = ({navigation}) =>{
    return{
        
        headerRight: (
        <TouchableOpacity
        onPress={()=> navigation.navigate('Create')}>
        <Feather size={30} name='plus'/>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent:'space-between',
        flex:1
    },
    content:{
        flex:20
    },
    bottom:{
        alignSelf: 'flex-end',
        marginRight: 50
    }
})
export default GroceryListScreen;