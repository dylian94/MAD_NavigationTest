import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import BottomTabNavigation from "./Components/BottomTabNavigation";

export default class App extends React.Component {
  render() {
    return (
        <PaperProvider>
            <BottomTabNavigation />
        </PaperProvider>
    );
  }
}
