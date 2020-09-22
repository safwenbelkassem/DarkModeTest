import React,{Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';

class MesCheques extends Component{
    render(){
        return(
            <View style={{ alignItems:'center',justifyContent:'center',flex: 1, backgroundColor:'white' }}>
                <Text style={styles.textTitle}>Mes Cheques Screen</Text>
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

export default MesCheques
