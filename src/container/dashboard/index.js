import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { SafeAreaView, Alert } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ImagePicker from "react-native-image-picker";
import { Profile } from "../../component";
import firebase from "../../firebase/config";
import { color } from "../../utility";
import { Store } from "../../context/store";
import { LOADING_STOP, LOADING_START } from "../../context/actions/type";
import { uuid } from "../../utility/constants";
import { clearAsyncStorage } from "../../asyncStorage";

export default ({ navigation }) => {
  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;
  const [avatarSource, setAvatarSource] = useState(null);

  const [userDetail, setUserDetail] = useState({
    id: "",
    name: "",
  });

  const { id, name } = userDetail;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcons
          name="logout"
          size={26}
          color={color.WHITE}
          style={{ right: 10 }}
          onPress={() =>
            Alert.alert(
              "Logout",
              "Are you sure to log out",
              [
                {
                  text: "Yes",
                  onPress: () => logout(),
                },
                {
                  text: "No",
                },
              ],
              { cancelable: false }
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
        .ref("users")
        .on("value", (dataSnapshot) => {
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

  const selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = response.uri;

        // You can also display the image using data:
        // let source =  'data:image/jpeg;base64,' + response.data ;
        setAvatarSource(source);
      }
    });
  };
  // * LOG OUT
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.replace("Login");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };

  // * ON IMAGE TAP
  imgTap = () => {
    if (!avatarSource) {
      navigation.navigate("ShowProfileImg", {
        name,
        imgText: name.charAt(0),
      });
    } else {
      navigation.navigate("ShowProfileImg", { name, img: avatarSource });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.BLACK }}>
      <Profile
        img={avatarSource}
        onImgTap={() => imgTap()}
        onEditImgTap={() => selectPhotoTapped()}
        name={name}
      />
    </SafeAreaView>
  );
};
