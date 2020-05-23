import React, {useContext, useState} from 'react';
import {Text, SafeAreaView, View, Keyboard} from 'react-native';
('react-native-keyboard-aware-scroll-view');
import firebase from '../../firebase/config';
import {InputField, RoundCornerButton, Logo} from '../../component';
import {globalStyle, color} from '../../utility';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP} from '../../context/actions/type';
import {setAsyncStorage, keys} from '../../asyncStorage';
import {setUniqueValue} from '../../utility/constants';

export default ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const {email, password} = credential;

  const setInitialState = () => {
    setCredential({email: '', password: ''});
  };
  // * HANDLE ON CHANGE
  const handleOnChange = (name, value) => {
    setCredential({
      ...credential,
      [name]: value,
    });
  };

  //   * ON LOGIN PRESS
  const onLoginPress = () => {
    if (!email) {
      alert('Email is required');
    } else if (!password) {
      alert('Password is required');
    } else {
      dispatchLoaderAction({
        type: LOADING_START,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          setAsyncStorage(keys.uuid, res.user.uid);
          setUniqueValue(res.user.uid);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
          setInitialState();
          navigation.navigate('Dashboard');
        })
        .catch((err) => {
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
          alert(err);
        });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.BLACK}}>
      <View style={[globalStyle.containerCentered]}>
        <Logo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
        <InputField
          placeholder="Enter email"
          value={email}
          onChangeText={(text) => handleOnChange('email', text)}
        />
        <InputField
          placeholder="Enter password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => handleOnChange('password', text)}
        />

        <RoundCornerButton title="Login" onPress={() => onLoginPress()} />
        <Text
          style={{fontSize: 28, fontWeight: 'bold', color: color.LIGHT_GREEN}}
          onPress={() => {
            setInitialState();
            navigation.navigate('SignUp');
          }}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};
