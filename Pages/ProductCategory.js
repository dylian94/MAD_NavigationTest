import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from "../Components/AppHeader";

export default class ProductCategory extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Product category" />
                <Text>Product categories</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});