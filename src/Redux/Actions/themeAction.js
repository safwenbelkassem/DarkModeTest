import {
    PASS_TO_LIGHT_MODE,
    PASS_TO_DARK_MODE,
    SWITCH_AUTO_DISPLAY_MODE
} from './TypeAction'


export const passToLightMode = themeColor => ({
    type: PASS_TO_LIGHT_MODE,
    payload: themeColor,
  });


export const passToDarkMode = themeColor => ({
    type: PASS_TO_DARK_MODE,
    payload: themeColor,
  });

  export const switchAutoDisplayMode = themeColor => ({
    type: SWITCH_AUTO_DISPLAY_MODE,
    payload: themeColor,
  });


