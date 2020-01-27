import React, { Component, useContext, useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Modal from 'react-native-modal'
import {withNavigation} from 'react-navigation'
import {Context} from '../context/GroceryContext'


const ProductModal = ({navigation}) => {
    const[title, setTitle] = useState('');
   const[quantity, setQuantity] = useState('');
   const[price, setPrice] = useState('');
   const {addGrocery} = useContext(Context);
    return(
        <View style={{ flex: 1 }}>
            <View >
            <Text style={styles.header}>Product:</Text>
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

          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header:{
        marginTop:100,
        marginLeft: 20
    },
    
    text:{
        marginLeft: 20

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
        padding: 40,
    }
})

export default ProductModal;