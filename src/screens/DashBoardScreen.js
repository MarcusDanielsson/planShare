import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DashBoardList from '../components/DashBoardList';

const DashBoardScreen = props =>{
   
    return(
        <View style={styles.content}>
            <DashBoardList title='Food Planner' row='food'/>
            <DashBoardList title='Private Economy' row='economy'/>
            
        </View>
    )
}

const styles= StyleSheet.create({
    content:{
        flex:1
    }
})

export default DashBoardScreen;