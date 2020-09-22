import React,{Component} from 'react';
import {Text,View,Button,TouchableOpacity,Image ,StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {passToLightMode,passToDarkMode,switchAutoDisplayMode} from '../Redux/Actions/themeAction'
import {defaultColors,darkColors} from '../Helper/Color'

import { Appearance} from 'react-native-appearance';
import { circle } from 'react-native/Libraries/Animated/src/Easing';


class MesCartes extends Component{
     
    changeAutoDisplay(){
         Appearance.addChangeListener(({ colorScheme }) => {
            if (colorScheme === 'dark'){
                this.props.passToDarkMode()
                //this.props.switchAutoDisplayMode(darkColors)
            }else{
                this.props.passToLightMode()
                //this.props.switchAutoDisplayMode(defaultColors)
            }
          });
    }
     
    ChangeToDark(){
        this.props.passToDarkMode()
    }
    ChangeToLight(){
        this.props.passToLightMode()
    }
    renderColorScheme(){
        Appearance.addChangeListener(({ colorScheme }) => {
            if (colorScheme === 'dark'){
                return false
            }else{
                return true
            }
          });
         
    }
    render(){
   

    this.changeAutoDisplay()
     return(
        <View style={{ paddingLeft: 20,flex: 1, backgroundColor: this.props.themeColor.white }}>
            <Text style={{ fontSize: 20,
        fontWeight: '400', 
        fontFamily:'Iowan Old Style',
        color: this.props.themeColor.black}}>Mes Cartes Screen</Text>
            <View  style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity onPress={(this.ChangeToDark.bind(this))}
                style={{margin:40,alignItems:'center'}}>
                        <Image
                        style={{width: 90,height:200,marginBottom:30,borderWidth:3,borderColor:this.props.themeColor.black}}
                        source={require('../Assets/darkMode.png')}
                        /> 
                        { this.props.theme === "dark" ? <View style={styles.checkedCircle}></View> : <View style={styles.circle}></View>}
                        
                        <Text style={{color: this.props.themeColor.black}}>Dark Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ChangeToLight.bind(this)} style={{margin:40,alignItems:'center'}}>
                        <Image
                        style={{width: 90,height:200,marginBottom:30,borderWidth:3,borderColor:this.props.themeColor.white}}
                        source={require('../Assets/lightMode.png')}
                        />
                        { this.props.theme === "light"? <View style={styles.checkedCircle}></View> : <View style={styles.circle}></View>}
                        
                        <Text style={{color: this.props.themeColor.black}}>Light Mode</Text>
                </TouchableOpacity>
            </View>
        </View>   
        )
    }
}


const styles = StyleSheet.create({
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
    });
mapStateToProps = state =>{
    return {
        themeColor: state.themeRed.themeColor,
        theme: state.themeRed.theme
    }
  }
export default connect(mapStateToProps,{passToLightMode,passToDarkMode,switchAutoDisplayMode})(MesCartes)
