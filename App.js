import React, { Fragment } from "react";

import NavContainer from "./src/navigation";
import Loader from "./src/component/loader";
import { StoreProvider } from "./src/context/store";
import { StatusBar } from "react-native";

console.disableYellowBox = true;

export default () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="light-content" />
      <NavContainer />
      <Loader />
    </StoreProvider>
  );
};
