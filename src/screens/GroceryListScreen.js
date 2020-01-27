import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {Context} from '../context/GroceryContext'




const GroceryListScreen = ({navigation}) =>{
    const {state, addGrocery, deleteGrocery} = useContext(Context);
    
   
    return( 
        <View flex={1}> 
        <View style={styles.title}><Text >Product</Text>
            <Text>Quantity</Text>
            <Text >Est. Price</Text>
            
        </View>
        <View style={styles.content}>
        <FlatList 
            data={state}
            keyExtractor = {(blogPost)=> blogPost.title}
            renderItem ={({item}) => {
                return (
        <TouchableOpacity
                    onPress={()=> console.log('press')}
                    >
                <View style={styles.row}> 
                <Text style={styles.listObj}>{item.title}</Text>
                <Text>{item.quantity} pc</Text>
                <Text>{item.price} kr</Text>
                
                </View>
                </TouchableOpacity>
                )
            }} />
            
            
        </View>
        <View style={styles.bottom}><Text>Estimated price:</Text></View>
        
        
        
        </View>
        
    )}



GroceryListScreen.navigationOptions = ({navigation}) =>{
    
   
   
    return{  
        headerRight: (
        <TouchableOpacity
        onPress={()=> navigation.navigate("Create")}>
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
        
    
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingVertical: 20,
        borderColor: 'gray',
        marginLeft: 15,
        marginRight: 15,
        
    },
    icons:{
        fontSize: 20
},
    content:{
        flex:20
    },
    bottom:{
        alignSelf: 'flex-end',
        marginRight: 50
    },
    textInput:{
        width: 300,
        height:30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 16
    },
})
export default GroceryListScreen;