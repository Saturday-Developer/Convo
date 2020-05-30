import React, {useReducer} from 'react';
import {Loader} from '../reducers';

export const Store = React.createContext();

const dispatch = {};

export function StoreProvider(props) {
  // * ALL REDUCERS
  const [mapLoaderState, dispatchLoaderAction] = useReducer(Loader, dispatch);

  // * VALUES OF ALL REDUCERS
  const loaderValue = {mapLoaderState, dispatchLoaderAction};

  // * COMBINE ALL VALUES IN A SINGLE VARIABLE
  const value = {
    ...loaderValue,
  };

  // * STORE
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
