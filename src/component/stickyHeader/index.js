import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, CardItem, Left, Body, Thumbnail } from "native-base";
import styles from "./styles";

const StickyHeader = ({ name, img, onImgTap }) => {
  return (
    <Card style={styles.cardStyle} transparent>
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

export default StickyHeader;
