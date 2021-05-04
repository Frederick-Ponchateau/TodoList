import React from 'react';
import {Text, View } from 'react-native';
import { style } from './style';

const Afftext =  ({texte}) => {
    return(
           
           <Text style={style.textStyl}>{texte}
           </Text>
          

        )
}
export default Afftext;