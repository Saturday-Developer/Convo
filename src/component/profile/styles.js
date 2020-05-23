import { StyleSheet } from "react-native";
import { appStyle, color } from "../../utility";

export default StyleSheet.create({
  imgContainer: {
    height: 154,
    width: 154,
    borderRadius: 77,
    borderWidth: 2,
    borderColor: color.WHITE,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  editImgContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: color.SEMI_TRANSPARENT,
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  name: {
    color: appStyle.fieldTextColor,
    fontSize: 50,
    fontWeight: "bold",
  },
  welcome: {
    color: appStyle.fieldTextColor,
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});
