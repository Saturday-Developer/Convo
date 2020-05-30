import { StyleSheet } from "react-native";
import { color } from "../../utility";

export default StyleSheet.create({
  cardStyle: {
    backgroundColor: color.SEMI_TRANSPARENT,
    borderBottomWidth: 1,
    borderColor: color.SILVER,
  },
  cardItemStyle: {
    backgroundColor: color.DARK_LIME_GREEN,
  },

  logoContainer: {
    height: 60,
    width: 60,
    borderColor: color.WHITE,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.DARK_GRAY,
  },
  thumbnailName: { fontSize: 30, color: color.WHITE, fontWeight: "bold" },
  profileName: { fontSize: 20, color: color.WHITE, fontWeight: "bold" },
});
