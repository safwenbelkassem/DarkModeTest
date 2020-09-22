import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import {styles} from './StyleNavigation'
import roundedCorner from './roundedCorner'
import {connect} from 'react-redux'

function MyTopTabBar({themeColor,descriptors,state,navigation,...props}) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
    return (
      <View style={{backgroundColor: themeColor.primary}}>
        <View style={{backgroundColor:themeColor.primary,height:15}}></View>
        <View style={styles.topTab}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = state.index === index;
            let tabText;
            if (route.name ===  'MesCheques') {
              tabText = 'Mes Cheques';
            }else if (route.name === 'MesCartes'){
              tabText = 'Mes Cartes';
            }else if (route.name === 'MesComptes'){
              tabText = 'Mes Comptes';
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
                  activeOpacity= {1}
                  onPress={onPress}
                  style={{ flex: 1 ,
                    zIndex : focused ? 999 : 1,
                    marginTop: focused ? -6 : 0 ,
                  }}
                >     
                <LinearGradient colors={focused?  [themeColor.white,themeColor.white] : [themeColor.primaryGradientTop,themeColor.primary]} style={styles.linearGradiantContainer } >
                  <Text style={{ color: focused ? themeColor.black : themeColor.nonActiveHeader ,fontSize:17,fontWeight :'400',fontFamily:'Iowan Old Style'}}>
                      {tabText}
                  </Text>
                </LinearGradient> 
              
                {roundedCorner(0,-30,"M-9,31 q40,0 40,-40 v40 z",-30,138,"M-1,-9 q0,40 40,40 h-40 z",focused,themeColor.white)}
              
              </TouchableOpacity> 
            );
          })}
        </View>
        <View style={{backgroundColor:themeColor.primary}}>
           
          <View style={{height:80,
              backgroundColor:themeColor.white,marginBottom:-50,
              borderTopLeftRadius:state.index === 1 ? 30 : state.index == 2 ? 30 :0 ,
              borderTopRightRadius:state.index ===1 ? 30 : state.index == 0 ? 30 :0
            }}>
              
          </View>
          
        </View>
      </View>
    );
  }

  mapStateToProps = state =>{
    return {
      themeColor: state.themeRed.themeColor
    }
}
export default connect(mapStateToProps,{})(MyTopTabBar)