import React, { Component, useContext, useState } from 'react';
import {View, Text, StyleSheet, Button, FormInput, TextInput, TouchableOpacity} from 'react-native';
import {Context} from '../context/GroceryContext';
import {AntDesign} from '@expo/vector-icons'
import t from 'tcomb-form-native'

const AddCost = () =>{
  const Costs=['rent', 'phone']
   console.log(Costs)
    return(
        <View style={styles.column}>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        fontSize: 12
    },
    column:{
        flexDirection: 'row',
        
       
    },
    textInput:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        marginLeft: 20
    },
    text:{
        marginTop: 10
    }
})

export default AddCost;