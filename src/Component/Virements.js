import React,{Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';

class Virements extends Component{
    render(){
        return(
            <View style={{ alignItems:'center',justifyContent:'center',flex: 1}}>
                <Text style={styles.textTitle}>Virements Screen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',  
    }
})

export default Virements