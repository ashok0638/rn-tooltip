//  @flow

import { Platform, Dimensions } from 'react-native';

const ScreenWindow = Dimensions.get('window');
const FullScreen = Dimensions.get('screen');
export const ScreenWidth: number = ScreenWindow.width;
export const ScreenHeight: number = ScreenWindow.height;
export const FullScreenHeight: number = FullScreen.height;
export const isIOS = Platform.OS === 'ios';

export const Colors = {
  darkergray: '#617080',
  overlay_bright: 'rgba(250, 250, 250, 0.70)',
};
