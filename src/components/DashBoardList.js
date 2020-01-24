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
console.log(navigation)
  const food1 = require('../../assets/food1.jpg')
  const food2 = require('../../assets/food2.jpg')
  const food3 = require('../../assets/food3.jpg')
  const economy1 = require('../../assets/economy1.jpg')
  const economy2 = require('../../assets/economy2.jpg')
  const economy3 = require('../../assets/economy3.jpg')
  const game1 = require('../../assets/game1.jpg')
  const game2 = require('../../assets/game2.jpg')
  const game3 = require('../../assets/game3.png')
    
 
 
  const photos =[
      {'src':food1, 'title': 'Grocery List', 'row': 'food', 'page':'GroceryList'},
      {'src':food2, 'title': 'Food Budget', 'row': 'food','page':'FoodBudget'},
      {'src':food3, 'title': 'Statistics', 'row': 'food', 'page':'foodStats'},
      {'src':economy1, 'title': 'Fixed cost', 'row': 'economy', 'page':'Costs'},
      {'src':economy2, 'title': 'Saving Plans', 'row': 'economy', 'page':'Savings'},
      {'src':economy3, 'title': 'Statistics', 'row': 'economy', 'page':'economyStats'},
      {'src':game1, 'title': 'Achievements', 'row': 'game', 'page':'Achievements'},
      {'src':game2, 'title': 'Quests', 'row': 'game', 'page':'Quests'},
      {'src':game3, 'title': 'Progress', 'row': 'game', 'page':'Progress'},
    ]
    
    return (
        <View style={styles.content}>
            <Text style={styles.title}>{title} </Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={photos}
            keyExtractor={photos=> photos.src}
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
    flex: 1    
        
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
        marginTop: 5
    },
    subTitle:{
      marginLeft: 10,
      fontSize: 12  
    }

})

export default withNavigation(DashBoardList);