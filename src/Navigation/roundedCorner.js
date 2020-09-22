import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';


export default function roundedCorner(LrightValue,LleftValue,LdPathValue,RrightValue,RleftValue,RdPathValue,focused,ColorWhite) {
    if (focused) {
    return ( 
      <View>
        <View style={{position:"absolute",width:30,height:30,bottom:0,left:LleftValue,right:LrightValue}}>
          <Svg width="30" height="30">
            <Path d={LdPathValue} fill={ColorWhite} stroke={ColorWhite} stroke-width="8"/>
          </Svg>
        </View> 
        <View style={{position:"absolute",width:30,height:30,bottom:0,right:RrightValue,left:RleftValue}}>
          <Svg width="30" height="30">
            <Path d={RdPathValue} fill={ColorWhite}  stroke={ColorWhite} stroke-width="8" />
          </Svg>
        </View>
      </View>
    );}
  }

  
