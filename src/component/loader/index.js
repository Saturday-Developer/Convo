import React, { useContext } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { color } from "../../utility";
import { Store } from "../../context/store";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height,
    width,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.SEMI_TRANSPARENT,
  },
  indicator: {
    backgroundColor: color.DARK_GRAY,
    height: 44,
    width: 44,
    borderRadius: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});

const Loader = () => {
  const globalState = useContext(Store);
  const { mapLoaderState } = globalState;
  const { loading } = mapLoaderState;

  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color={color.WHITE}
          style={{
            left: Platform.OS === "ios" ? 1.3 : 0,
            top: Platform.OS === "ios" ? 1 : 0,
          }}
        />
      </View>
    </View>
  ) : null;
};

export default Loader;
