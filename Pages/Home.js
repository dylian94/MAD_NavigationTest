import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from "../Components/AppHeader";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Home" appSubTitle="Welcome home" />
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});