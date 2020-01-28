import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button, FlatList} from 'react-native';
import {Feather, MaterialIcons} from '@expo/vector-icons'
import {Context} from '../context/GroceryContext'




const GroceryListScreen = ({navigation}) =>{
    const {state, addGrocery, deleteGrocery} = useContext(Context);
    
   
    return( 
        <View flex={1}> 
            <View style={styles.title}>
                <Text>Product</Text>
                <Text>Qty.</Text>
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
                        <Text style={styles.listObj}>{item.quantity} pc</Text>
                        <Text style={styles.listObj}>{item.price} kr</Text>
                        <TouchableOpacity
                        onPress={()=> deleteGrocery(item.id)}>
                        <Feather style={styles.icons} name='trash'/>
                        </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                        )
                    }} />   
            </View>
            <View style={styles.bottom}>
                <Text>Estimated price:</Text>
            </View>
            <View style={styles.cost}>
                <View>
                <TextInput 
                textAlign={'center'}
                placeholder='Add Actual Cost'
                title='Cost'
                style={styles.textInput}
                />
                </View>
                
            
            <TouchableOpacity
                onPress={()=> console.log('clear list')}>
                 <View style={styles.button}>
                    <View>
                        <MaterialIcons 
                        marginLeft={20}
                        name="remove-shopping-cart"
                        size={40}/>
                        </View>
                    <View>
                        <Text>Clear shopping list</Text>
                    </View>
               
                 </View>
             </TouchableOpacity>

             </View>
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
        fontSize:18,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 90,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent:'space-between',
        flex:1
    },
        
    
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        paddingVertical: 20,
        borderColor: 'gray',
        marginLeft: 15,
        marginRight: 15,
        
    },
    cost:{
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        flexDirection:'row',
        justifyContent: 'space-around'
        

    },
    
    icons:{
        fontSize: 20
},
    content:{
        flex:20
    },
    bottom:{
        
        alignSelf: 'flex-end',
        marginRight: 130,
        marginBottom: 10
    },
    button:{
        
        justifyContent:"center", 
        alignItems:"center",
        marginBottom: 20,
        
    },
    
    textInput:{
        width: 150,
        height:30,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 16
    },
})
export default GroceryListScreen;