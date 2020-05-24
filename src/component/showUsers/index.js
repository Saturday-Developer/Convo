import React from "react";
import { View, Text } from "react-native";
import { Card, CardItem, Left, Body, Thumbnail } from "native-base";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowUsers = ({ name, img, onImgTap }) => {
  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.cardItemStyle}>
        <Left>
          <TouchableOpacity style={[styles.logoContainer]} onPress={onImgTap}>
            {img ? (
              <Thumbnail source={{ uri: img }} resizeMode="cover" />
            ) : (
              <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
            )}
          </TouchableOpacity>

          <Body>
            <Text style={styles.profileName}>{name}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default ShowUsers;
