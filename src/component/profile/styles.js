import {StyleSheet} from 'react-native';
import {appStyle} from '../../utility';

export default StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  welcome: {
    color: appStyle.fieldTextColor,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});
