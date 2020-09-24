import React,{Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ProgressiveImage from '../Helper/ProgressiveImage'
class MesCheques extends Component{
    render(){
        return(
            <View style={{ alignItems:'center',justifyContent:'center',flex: 1, backgroundColor:'white' }}>
                <Text style={styles.textTitle}>Mes Cheques Screen</Text>
                <ProgressiveImage
         thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=200&buster=${Math.random()}` }}
         source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?&w=400&buster=${Math.random()}` }}
        style={{ width: 200, height: 300}}
        resizeMode="cover"
        />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',  
        marginBottom:50
    }
})

export default MesCheques
