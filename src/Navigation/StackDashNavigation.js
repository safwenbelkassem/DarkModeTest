import React,{Component} from 'react';
import {StyleSheet ,TouchableOpacity,View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTopTabBar from './MyTopTabBar'
import Ionicons from 'react-native-vector-icons/Ionicons';

import MesCheques from '../Component/MesCheques' 
import MesCartes from '../Component/MesCartes' 
import MesComptes from '../Component/MesComptes'

const DashboardStack = createStackNavigator();
const TabTopDashBoard = createMaterialTopTabNavigator();

function TabTopDashNavigation(){
    return(
        <TabTopDashBoard.Navigator initialRouteName="MesCartes" swipeEnabled ={false} tabBar={props => <MyTopTabBar {...props} />} >
            <TabTopDashBoard.Screen name="MesComptes" component={MesComptes} />
            <TabTopDashBoard.Screen name="MesCartes" component={MesCartes} />
            <TabTopDashBoard.Screen name="MesCheques" component={MesCheques}  />
        </TabTopDashBoard.Navigator>
    )
}
function StackDashNavigation({themeColor,...props}){
    return(
        <DashboardStack.Navigator >
            <DashboardStack.Screen  name ="Dashboard" component={TabTopDashNavigation}  options={{
                title:'Tableau de bord',   
                headerStyle:{
                    backgroundColor:themeColor.primary,
                    shadowColor: 'transparent',
                    height:100,
                },
                headerTitleStyle:{
                  fontSize:20,
                  fontFamily: 'Iowan Old Style',
                  fontWeight :'500',
                },
                headerTintColor:themeColor.stackTextColor,
                headerRight: ()=>(
                    <View style={{paddingRight: 10,flexDirection:'row'}}>
                      <Ionicons name='ios-albums' color= {themeColor.iconColor} size={30} />
                      <View style={{paddingLeft:20}}>
                      <Ionicons name='ios-briefcase' color= {themeColor.iconColor} size={30}/>
                      </View>
                    </View>
                ),
                headerLeft: ()=>(
                  <View style={{paddingLeft: 10}}>
                    <Ionicons name='ios-aperture' color={themeColor.iconColor} size={30} />
                  </View>
              )
            }} />
        </DashboardStack.Navigator>
    )
}
mapStateToProps = state =>{
    return {
      themeColor: state.themeRed.themeColor
    }
}
export default connect(mapStateToProps,{})(StackDashNavigation)
