import React from 'react';
import {DefaultTheme, Provider} from "react-native-paper";
import BottomTabNavigation from "./Components/BottomTabNavigation";

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#43a047',
        accent: '#fff176',
    }
};

export default class App extends React.Component {
  render() {
    return (
      <Provider theme={appTheme}>
        <BottomTabNavigation />
      </Provider>
    );
  }
}