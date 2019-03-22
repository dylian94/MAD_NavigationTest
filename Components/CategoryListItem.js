import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import { List } from 'react-native-paper';
import {withNavigation} from "react-navigation";

class CategoryListItem extends React.Component {

    category = this.props.category;

    _onPress = () =>
    {
        this.props.onPress(this.category.id);
    };

    render() {
        return (
            <List.Item
                title={this.category.name}
                left={() => <List.Icon icon="folder" />}
                onPress={this._onPress}
            />
        )
    }
}

export default withNavigation(CategoryListItem);