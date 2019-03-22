import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper'
import AppHeader from "../Components/AppHeader";

export default class ProductCategories extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Product categories" />
                <Text>Product categories</Text>
                <Button icon="add" mode="contained" onPress={() => this.props.navigation.navigate('Category', {name: "Category 1"})}>
                    Open category
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});