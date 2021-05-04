import React from 'react';
import {Text, View} from 'react-native';
import { style } from './styles';


const Headers = (props) => 
//Props permet de passer des propriétés a un composant, class , fonction, variable
 {
  const {content} = props
   return   (
    <View>
        <View style={style.subHearder}/>
        <View style={style.header}>
            <Text style={style.textTitle}>{content}</Text>
        </View>
    </View>   
    )
};
export default Headers; 