import React,{Component} from 'react';
import {StyleSheet ,TouchableOpacity,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {connect} from 'react-redux'

import MyBottomTabBar from './MyBottomTabBar'


import Carte from '../Component/Carte' 
import Cheques from '../Component/Cheques' 
import Compte from '../Component/Compte' 
import Virements from '../Component/Virements' 

import StackDashNavigation from './StackDashNavigation'

const BottomTabNav = createBottomTabNavigator();

class Navigation extends Component{
  
    render(){
        return(
        <NavigationContainer>
            <BottomTabNav.Navigator initialRouteName="Dashboard" tabBar={props => <MyBottomTabBar {...props} />} >
                <BottomTabNav.Screen name="Dashboard" component={StackDashNavigation} options={{ title: 'Dashboard' }} />
                <BottomTabNav.Screen name="Carte" component={Carte} options={{ title: 'Carte' }}/>
                <BottomTabNav.Screen name="Cheques" component={Cheques} options={{ title: 'Cheques' }}/>
                <BottomTabNav.Screen name="Compte" component={Compte} options={{ title: 'Compte' }}/>
                <BottomTabNav.Screen name="Virements" component={Virements} options={{ title: 'Virements' }}/>
            </BottomTabNav.Navigator>
        </NavigationContainer>
        )
    }
}


 
mapStateToProps = state =>{
    return {
      themeColor: state.themeRed.themeColor
    }
}

export default connect(mapStateToProps,{})(Navigation)
