import React,{Component} from 'react';
import {Text,View,Button,TouchableOpacity,Image ,StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {passToLightMode,passToDarkMode,switchAutoDisplayMode} from '../Redux/Actions/themeAction'
import { Appearance} from 'react-native-appearance';
import {styles} from './styleComponent'


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
        
            if (Appearance.getColorScheme() === 'dark'){
                this.props.passToDarkMode()
            }else{
                this.props.passToLightMode()
            }
         
    }
    render(){
   
    this.renderColorScheme()
    this.changeAutoDisplay()
     return(
        <View style={[styles.mainContainer,{  backgroundColor: this.props.themeColor.white }]}>
            <Text style={[styles.text,{color: this.props.themeColor.black}]}>Mes Cartes Screen</Text>
            <View  style={styles.imageContainer}>
                <TouchableOpacity onPress={(this.ChangeToDark.bind(this))}
                style={styles.touchableContainer}>
                        <Image
                        style={[styles.image,{borderColor:this.props.themeColor.black}]}
                        source={require('../Assets/darkMode.png')}
                        /> 
                        { this.props.theme === "dark" ? <View style={styles.checkedCircle}></View> : <View style={styles.circle}></View>}
                        
                        <Text style={{color: this.props.themeColor.black}}>Dark Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ChangeToLight.bind(this)} style={styles.touchableContainer}>
                        <Image
                        style={[styles.image,{borderColor:this.props.themeColor.black}]}
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


mapStateToProps = state =>{
    return {
        themeColor: state.themeRed.themeColor,
        theme: state.themeRed.theme
    }
  }
export default connect(mapStateToProps,{passToLightMode,passToDarkMode,switchAutoDisplayMode})(MesCartes)
