import React from 'react';
import {Text, View, Modal, TouchableWithoutFeedback} from 'react-native';
import { Badge, Button } from 'react-native-elements';
import { style } from './styles';



const MenuTask = ({isVisible,onDisapearCallBack,content,onDeleteCallBack,onModifyCallBack}) =>{ 
    return (
        <View  style={style.centeredView}>
            <Modal  animationType="slide"
            transparent={true}
            visible={isVisible}
            >
            <TouchableWithoutFeedback onPress={() => onDisapearCallBack()} >
                <View style={style.centeredView}>
            <TouchableWithoutFeedback>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>{content.task}</Text>

                        <View style={style.vueButton}>
                           <Button 
                                title="Modifier" 
                                type="outline" 
                                buttonStyle={style.button}
                                onPress={() => onModifyCallBack()}
                            /> 
                           <Button 
                                title="Supprimer"
                                type="outline" 
                                buttonStyle={style.button}
                                onPress={() => onDeleteCallBack()}
                            /> 
                           <Button
                                title="Fermer"
                                type="outline" 
                                buttonStyle={style.button}
                                onPress={() => onDisapearCallBack()}
                            /> 
                        </View>

                    </View>
        </TouchableWithoutFeedback>
                </View>
        </TouchableWithoutFeedback>
            </Modal>    
        </View>
    )
}

export default MenuTask;