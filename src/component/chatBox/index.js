import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardItem } from "native-base";
import { deviceWidth } from "../../utility/styleHelper/appStyle";
import { uuid } from "../../utility/constants";
import styles from "./styles";
import { color } from "../../utility";

const ChatBox = ({ userId, msg, img }) => {
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
        {img ? (
          <CardItem cardBody>
            <Image
              source={{ uri: img }}
              resizeMode="cover"
              style={{ height: 200, width: deviceWidth / 2 }}
            />
          </CardItem>
        ) : (
          <Text
            style={[styles.chatTxt, isCurrentUser && { color: color.WHITE }]}
          >
            {msg}
          </Text>
        )}
      </View>
    </Card>
  );
};

export default ChatBox;
