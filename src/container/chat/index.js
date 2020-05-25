import React, { useLayoutEffect, useState, useEffect, Fragment } from "react";
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "react-native-image-picker";
import { InputField, ChatBox } from "../../component";
import firebase from "../../firebase/config";
import { globalStyle, color, appStyle } from "../../utility";
import { deviceHeight } from "../../utility/styleHelper/appStyle";
import { smallDeviceHeight } from "../../utility/constants";
import { View } from "native-base";
import styles from "./styles";

const Chat = ({ route, navigation }) => {
  const { params } = route;
  const { name, img, imgText, guestUserId, currentUserId } = params;
  const [msgValue, setMsgValue] = useState("");
  const [messeges, setMesseges] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: <Text>{name}</Text>,
    });
  }, [navigation]);

  useEffect(() => {
    try {
      firebase
        .database()
        .ref("messeges")
        .child(currentUserId)
        .child(guestUserId)
        .on("value", (dataSnapshot) => {
          let msgs = [];
          dataSnapshot.forEach((child) => {
            console.log(child.val().messege.sender);
            msgs.push({
              sendBy: child.val().messege.sender,
              receiveBy: child.val().messege.receiver,
              msg: child.val().messege.msg,
              img: child.val().messege.img,
            });
          });
          setMesseges(msgs.reverse());
        });
    } catch (err) {
      alert(err);
    }
  }, []);

  const handleSend = () => {
    setMsgValue("");
    firebase
      .database()
      .ref("messeges/" + currentUserId)
      .child(guestUserId)
      .push({
        messege: {
          sender: currentUserId,
          receiver: guestUserId,
          msg: msgValue,
          img: "",
        },
      })
      .then(() => {})
      .catch((err) => alert(err));
    // *Guest user
    firebase
      .database()
      .ref("messeges/" + guestUserId)
      .child(currentUserId)
      .push({
        messege: {
          sender: currentUserId,
          receiver: guestUserId,
          msg: msgValue,
        },
      })
      .then(() => {})
      .catch((err) => alert(err));
  };

  const handleCamera = () => {
    const options = {
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
        // Base 64 image:
        let source = "data:image/jpeg;base64," + response.data;
        firebase
          .database()
          .ref("messeges/" + currentUserId)
          .child(guestUserId)
          .push({
            messege: {
              sender: currentUserId,
              receiver: guestUserId,
              msg: msgValue,
              img: source,
            },
          })
          .then(() => {})
          .catch((err) => {
            alert(err);
          });

        // *Guest User
        firebase
          .database()
          .ref("messeges/" + guestUserId)
          .child(currentUserId)
          .push({
            messege: {
              sender: currentUserId,
              receiver: guestUserId,
              msg: msgValue,
              img: source,
            },
          })
          .then(() => {})
          .catch((err) => {
            alert(err);
          });
      }
    });
  };
  const handleOnChange = (text) => {
    setMsgValue(text);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.BLACK }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={deviceHeight > smallDeviceHeight ? 100 : 70}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[globalStyle.flex1, { backgroundColor: color.BLACK }]}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <Fragment>
            <FlatList
              inverted
              data={messeges}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <ChatBox msg={item.msg} userId={item.sendBy} img={item.img} />
              )}
            />
            {/* Send Message */}
            <View style={styles.sendMessageContainer}>
              <InputField
                placeholder="Type Here"
                numberOfLines={10}
                inputStyle={[styles.input]}
                value={msgValue}
                onChangeText={(text) => handleOnChange(text)}
              />
              <View style={[styles.sendBtnContainer]}>
                <MaterialCommunityIcons
                  name="camera"
                  color={color.WHITE}
                  size={appStyle.fieldHeight}
                  style={styles.sendIcon}
                  onPress={() => handleCamera()}
                />

                <MaterialCommunityIcons
                  name="send-circle"
                  color={color.WHITE}
                  size={appStyle.fieldHeight}
                  style={styles.sendIcon}
                  onPress={() => handleSend()}
                />
              </View>
            </View>
          </Fragment>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
