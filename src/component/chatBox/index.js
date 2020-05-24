import React from "react";
import { View, Text } from "react-native";
import { Card } from "native-base";
import { deviceWidth } from "../../utility/styleHelper/appStyle";
import { uuid } from "../../utility/constants";
import styles from "./styles";
import { color } from "../../utility";

const ChatBox = ({ userId, msg }) => {
  let isCurrentUser = userId === uuid ? true : false;
  return (
    <Card
      transparent
      style={{
        maxWidth: deviceWidth / 2 + 10,
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            backgroundColor: color.DARK_GRAY,
          },
        ]}
      >
        <Text style={[styles.chatTxt, isCurrentUser && { color: color.WHITE }]}>
          {msg}
        </Text>
      </View>
    </Card>
  );
};

export default ChatBox;
