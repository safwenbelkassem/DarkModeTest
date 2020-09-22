import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({  
  topTab:{
    height:63,
    flexDirection:'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomTab:{
    marginTop:-20,
        flexDirection:'row',
        height: 100,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
        shadowOffset: {
            width: 0,
            height: -3,
        },
        padding:5,
        shadowOpacity: 0.2,
        shadowRadius: 5,
  },
  roundedCorned:{
    position:"absolute",
    width:30,
    height:30,
    bottom:0,
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