import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({  
    mainContainer:{
        paddingLeft: 20,
        flex: 1
    },
    text:{
        fontSize: 20,
        fontWeight: '400', 
        fontFamily:'Iowan Old Style',
    },
    imageContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    touchableContainer:{
        margin:40,alignItems:'center'
    },
    image:{
        width: 90,
        height:200,
        marginBottom:30,
        borderWidth:3,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ACACAC",
        alignItems: "center", // To center the checked circle…
        justifyContent: "center",
        marginHorizontal: 10,
        marginBottom:15
        },
        checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#ACACAC",
        backgroundColor: "#131313" ,
        marginBottom:15
        }
})