import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {SafeAreaView, Button, Alert} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Profile} from '../../component';
import firebase from '../../firebase/config';
import {color} from '../../utility';
import {Store} from '../../context/store';
import {LOADING_STOP, LOADING_START} from '../../context/actions/type';
import {uuid} from '../../utility/constants';
import {clearAsyncStorage} from '../../asyncStorage';

export default ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;
  const [userDetail, setUserDetail] = useState({
    id: '',
    name: '',
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcons
          name="logout"
          size={26}
          color={color.WHITE}
          style={{right: 10}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Are you sure to log out',
              [
                {
                  text: 'Yes',
                  onPress: () => logout(),
                },
                {
                  text: 'No',
                },
              ],
              {cancelable: false},
            )
          }
        />
      ),
    });
  }, [navigation]);
  useEffect(() => {
    dispatchLoaderAction({
      type: LOADING_START,
    });
    try {
      firebase
        .database()
        .ref('users')
        .on('value', (dataSnapshot) => {
          dataSnapshot.forEach((child) => {
            if (uuid === child.val().user.uuid) {
              setUserDetail({
                id: uuid,
                name: child.val().user.name,
              });
            }
          });
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
        });
    } catch (error) {
      alert(error);
      dispatchLoaderAction({
        type: LOADING_STOP,
      });
    }
  }, []);
  // * LOG OUT
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.replace('Login');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.BLACK}}>
      <Profile
        img="https://source.unsplash.com/2Ts5HnA67k8"
        name={userDetail.name}
      />
    </SafeAreaView>
  );
};
