import {Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
height = height / 8;

import * as color from '../colors';

export const fieldBgColor = color.DARK_GRAY;
export const fieldTextColor = color.WHITE;
export const logoBgColor = color.DARK_GRAY;
export const fieldHeight = height * 0.5;
export const fieldMarginVertical = height * 0.0893;
export const btnMarginVertical = fieldMarginVertical * 2;
export const btnBorderRadius = height * 0.0893;

export const btnHeight = height * 0.55;
