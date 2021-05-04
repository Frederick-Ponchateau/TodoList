import React from 'react';
import {Text, FlatList,Button, View } from 'react-native';
import { Badge, ListItem } from 'react-native-elements';
import { style } from './styles';
import GestureRecognizer from 'react-native-swipe-gestures';



const TaskList = ({DataTasks, onPressCallBack,onPressAll,onPressDone,onPressTodo}) =>{


    //console.log({DataTasks})
    const renderItem = ({ item }) => 
    (
        
        <GestureRecognizer
        onSwipeLeft={(state) => console.log("test gauche")}
        config={config}

        style={{
          flex: 1,
          backgroundColor: "#fff",
          gestureName: 'none',
        }}>
        <ListItem key={item.id} bottomDivider
            onPress={()=>  onPressCallBack(item)  }>
            <Text style= {style.textItem}>{item.task}</Text>
            <Badge
                value={item.status}
                textStyle={{ color: 'white' }}
                badgeStyle= {{backgroundColor:'yellowgreen', height : 30, padding : 10}}
                containerStyle={
                    {position: 'absolute' , right: 5 }
                }
        />
      </ListItem>
      </GestureRecognizer>
    );
    
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
        gestureIsClickThreshold: 5
      };
    return (

        <FlatList 
        data={DataTasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent= {<Text>Pas de tache</Text>}
        ListHeaderComponent= {
        <View style={style.vueButton} >
          <View >
            <Button style={style.button} onPress={() =>  onPressAll() } title= "all"/>
          </View>
          <View>
            <Button onPress={() => onPressTodo()} title= "todo"/>
          </View>
          <View>
          <Button  onPress={() => onPressDone()} title= "done"/>
          </View>
        </View>
       }
      
        />
    )
}

export default TaskList;