import { StyleSheet } from "react-native";
import { appStyle, color } from "../../utility";
import { smallDeviceHeight } from "../../utility/constants";

const getDimensions = () => {
  if (appStyle.deviceHeight > smallDeviceHeight) {
    return {
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
    };
  } else {
    return {
      imgContainer: {
        height: 124,
        width: 124,
        borderRadius: 62,
        borderWidth: 2,
        borderColor: color.WHITE,
      },
      img: {
        height: 120,
        width: 120,
        borderRadius: 60,
      },
      editImgContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: color.SEMI_TRANSPARENT,
        position: "absolute",
        right: 10,
        bottom: 10,
      },
    };
  }
};

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  imgContainer: getDimensions().imgContainer,
  img: getDimensions().img,
  editImgContainer: getDimensions().editImgContainer,
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
