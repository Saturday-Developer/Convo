import React, {useEffect} from 'react';
import {View} from 'react-native';
import {globalStyle, appStyle, color} from '../../utility';
import {getAsyncStorage, keys} from '../../asyncStorage';
import {setUniqueValue} from '../../utility/constants';
import {Logo} from '../../component';

export default ({navigation}) => {
  useEffect(() => {
    const redirect = setTimeout(() => {
      getAsyncStorage(keys.uuid)
        .then((uuid) => {
          if (uuid) {
            setUniqueValue(uuid);
            navigation.replace('Dashboard');
          } else {
            navigation.replace('Login');
          }
        })
        .catch((err) => {
          console.log(err);
          navigation.replace('Login');
        });
    }, 4000);
    return () => clearTimeout(redirect);
  }, [navigation]);
  return (
    <View
      style={[globalStyle.containerCentered, {backgroundColor: color.BLACK}]}>
      <Logo />
    </View>
  );
};
