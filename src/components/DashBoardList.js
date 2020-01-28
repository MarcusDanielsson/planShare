import React from 'react';
import {
        View, 
        Text,
        StyleSheet,
        Image,
        FlatList,
        TouchableOpacity
        } from 'react-native';
import {withNavigation} from 'react-navigation'


const DashBoardList =({title, row, navigation})=> {
    const food1 = require('../../assets/food1.jpg')
    const food2 = require('../../assets/food2.jpg')
    const food3 = require('../../assets/food3.jpg')
    const economy1 = require('../../assets/economy1.jpg')
    const economy2 = require('../../assets/economy2.jpg')
    const economy3 = require('../../assets/economy3.jpg')
    

   
    const photos =[
        {'src':food1, 'id':'1', 'title': 'Grocery List', 'row': 'food', 'page':'GroceryList'},
        {'src':food2, 'id':'2', 'title': 'Food Budget', 'row': 'food','page':'FoodBudget'},
        {'src':food3, 'id':'3', 'title': 'Statistics', 'row': 'food', 'page':'foodStats'},
        {'src':economy1, 'id':'4', 'title': 'Fixed cost', 'row': 'economy', 'page':'FixedCost'},
        {'src':economy2, 'id':'5', 'title': 'Saving Plans', 'row': 'economy', 'page':'Savings'},
        {'src':economy3, 'id':'6', 'title': 'Statistics', 'row': 'economy', 'page':'economyStats'},
        
      ]
    
    return (
        <View style={styles.content}>
            <Text style={styles.title}>{title} </Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={photos}
            keyExtractor={photos=> photos.id}
            renderItem= {({item})=>{
               if(row === item.row){
                   
                return (
                    <View>
                        <TouchableOpacity
                       onPress={()=>navigation.navigate(item.page)}
                       >
                    <Image
                    style={styles.image}
                    source={item.src}/>
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>{item.title}</Text>
                    </View>
                )
            }}}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({

    content:{
         
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        marginLeft: 10,
        marginTop:10 

    },
    image:{
        width:140,
        height: 110,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        
    },
    subTitle:{
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 40,
    }

})

export default withNavigation(DashBoardList);