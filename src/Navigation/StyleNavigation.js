import { StyleSheet } from 'react-native'
import { defaultColors ,darkColors} from '../Helper/Color'

export const styles = StyleSheet.create({  
  topTab:{
    height:63,
    flexDirection:'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  
touchableBottomTab:{
  flex: 1 ,
  justifyContent:'center',
  alignItems:'center'
},
linearGradiantContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
},
TextTopTab:{
  fontSize:17,
  fontWeight :'700',
  fontFamily:'Iowan Old Style',
  
}
})