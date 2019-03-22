import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ProductCategories extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Product categories</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
});
