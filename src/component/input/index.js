import React from 'react';
import {TextInput, Text} from 'react-native';
import styles from './styles';
import {color} from '../../utility';

export default ({
  placeholder,
  inputStyle,
  placeholderTextColor,
  secureTextEntry,
  onChangeText,
  value,
  onSubmitEditing,
  onBlur,
}) => (
  <TextInput
    style={[styles.input, inputStyle]}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    placeholderTextColor={
      placeholderTextColor ? placeholderTextColor : color.WHITE
    }
    onSubmitEditing={onSubmitEditing}
    onBlur={onBlur}
  />
);
