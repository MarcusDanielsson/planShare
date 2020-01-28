import React, { Component, useContext, useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import {Context} from '../context/GroceryContext';
import {AntDesign} from '@expo/vector-icons'


const AddProduct = ({navigation}) => {
    const[title, setTitle] = useState('');
   const[quantity, setQuantity] = useState('');
   const[price, setPrice] = useState('');
   const {addGrocery} = useContext(Context);
    return(
        <View style={{ flex: 1 }}>
            <View >
                <Text style={styles.header}>Add product to Grocery list</Text>
            <Text style={styles.text}>Product:</Text>
            <TextInput
            value={title}
            onChangeText={text=>setTitle(text)}
            style={styles.textInput}
            />
             <Text style={styles.text}>Quantity:</Text>
            <TextInput
            value={quantity}
            onChangeText={text=>setQuantity(text)}
            style={styles.textInput}
            />
             <Text style={styles.text}>Estimated price</Text>
            <TextInput
            value={price}
            onChangeText={text=>setPrice(text)}
            style={styles.textInput}
            />

            <Button 
            style={styles.button}
            title='add product'
            onPress = {()=> {addGrocery(title, quantity, price, () =>
                navigation.navigate('GroceryList')
                )}}
            />

            <TouchableOpacity
                onPress={()=> navigation.navigate('GroceryList')}>
                <AntDesign 
                style={styles.icons} 
                size={40}
                name='closecircleo'/>
            </TouchableOpacity>

          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header:{
        marginTop:50,
        marginBottom: 30,
        alignSelf: 'center'
    },
    text:{
        marginLeft: 30

    },
    textInput:{
        width: 300,
        height:30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 5
    },
    button:{
        padding: 70,
        marginTop: 30
    },
    icons:{
    alignSelf:'center',
    marginTop: 20
    }
})

export default AddProduct;