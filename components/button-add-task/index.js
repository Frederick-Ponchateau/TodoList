import React from 'react';
import ActionButton from 'react-native-action-button';
import {APP_COLORS} from '../../styles/color';
import { Icon } from 'react-native-elements';

const ButtonAddTask = ( {onPressAdd,longPressNote}) => 
{
    return (
    <ActionButton
        buttonColor={APP_COLORS.accent}
        onLongPress={ ()=> {longPressNote()}}
        onPress={ ()=> {onPressAdd()}}
    />
)}



export default ButtonAddTask;