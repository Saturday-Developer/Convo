import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default ({logoStyle, logoTextStyle}) => (
  <View style={[styles.logo, logoStyle]}>
    <Text style={[styles.text, logoTextStyle]}>S</Text>
  </View>
);
