import{PASS_TO_DARK_MODE} from '../Actions/TypeAction'
import{PASS_TO_LIGHT_MODE} from '../Actions/TypeAction'
import{SWITCH_AUTO_DISPLAY_MODE} from '../Actions/TypeAction'
import { Appearance} from 'react-native-appearance';

import { defaultColors,darkColors } from '../../Helper/Color'

const INITIAL_STATE = {themeColor: defaultColors,theme:Appearance.getColorScheme()}

export default (state =INITIAL_STATE, action) => {
    switch (action.type){
        case PASS_TO_DARK_MODE:
            return {...state, themeColor: darkColors,theme:"dark"}
        case PASS_TO_LIGHT_MODE:
            return {...state, themeColor: defaultColors,theme:"light"}
        case SWITCH_AUTO_DISPLAY_MODE:
            return {...state, themeColor: action.payload}
        
        default:
            return state
    }
}

 