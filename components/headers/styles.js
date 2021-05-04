import { StyleSheet} from 'react-native';
import {APP_COLORS} from '../../styles/color';

export const style = StyleSheet.create({
    subHearder:{
        backgroundColor: APP_COLORS.darkPrimary,
        height : 30,
    },
    header:{
        backgroundColor: APP_COLORS.Primary,
        height : 150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {height: 10}
    },
    textTitle:{
        color: APP_COLORS.primaryText,
        fontWeight : 'bold',
        fontSize : 30,
        
    }
});
