import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from "../Components/AppHeader";

export default class ProductCategory extends React.Component {

    values = {
       categoryName: this.props.navigation.getParam("name", "Naamloos")
    };

    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle={this.values.categoryName} canGoBack={true} />
                <Text>Product category</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});