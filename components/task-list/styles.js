import { StyleSheet} from 'react-native';
import {APP_COLORS} from '../../styles/color';

export const style = StyleSheet.create({

    textItem: {
        color: APP_COLORS.secondaryText,
        fontSize: 20
    },
    vueButton :{
        flexDirection: "row",
        justifyContent: 'space-around'
      },
      button: {
          backgroundColor:'black',
        borderRadius: 50,
        padding: 30,
        elevation: 2
      },
})
