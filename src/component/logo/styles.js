import {StyleSheet} from 'react-native';
import {color} from '../../utility';

export default StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    borderRadius: 50,
    backgroundColor: color.DARK_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 90, fontWeight: 'bold', color: color.WHITE},
});
