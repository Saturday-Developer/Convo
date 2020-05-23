import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import {globalStyle} from '../../utility';

export default ({img, name}) => (
  <View style={[globalStyle.containerCentered]}>
    <Image source={{uri: img}} style={styles.img} resizeMode="cover" />
    <Text style={styles.welcome}>{`Welcome ${name}`}</Text>
  </View>
);
