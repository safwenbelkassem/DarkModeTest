import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './StyleNavigation'

import {connect} from 'react-redux'

function MyBottomTabBar({themeColor,descriptors,state,navigation}) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
      <View style={[{
        backgroundColor:themeColor.white,
        shadowColor: themeColor.grey},styles.bottomTab]}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = state.index === index;
            
            let iconName;
            if (route.name ===  'Dashboard') {
                  iconName = focused ? 'ios-albums' : 'ios-albums-outline';
            }else if (route.name === 'Carte'){
                  iconName = focused ? 'ios-aperture' : 'ios-aperture-outline';
            }
            else if (route.name === 'Cheques'){
                  iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline';
            }
            else if (route.name === 'Compte'){
                  iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
           }
           else if (route.name === 'Virements'){
                  iconName = focused ? 'ios-card' : 'ios-card-outline';
            }      
          
          const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
             
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={focused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.touchableBottomTab}
            >
              <Ionicons name={iconName} color={focused ? themeColor.bottomIcon : themeColor.grey} size={30} />
              <Text style={{ color: focused ? themeColor.black : themeColor.grey ,fontWeight:'400'}}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


mapStateToProps = state =>{
    return {
      themeColor: state.themeRed.themeColor
    }
}
export default connect(mapStateToProps,{})(MyBottomTabBar)
