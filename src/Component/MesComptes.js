import React,{Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';

class MesComptes extends Component{
    render(){
        return(
            <View style={{ alignItems:'center',justifyContent:'center',flex: 1,backgroundColor:'white' }}>
                <Text style={styles.textTitle}>Mes Comptes Screen</Text>
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

export default MesComptes