import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import {withNavigation} from "react-navigation";
import CategoryListItem from "./CategoryListItem";

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class CategoryList extends React.Component {
    _keyExtractor = (item, index) => "category-" + item.id;

    _onPressItem = (categoryId, categoryName) => {
        this.props.navigation.navigate('Category', {id: categoryId, name: categoryName});
    };

    _renderItem = ({item}) => (<CategoryListItem category={item} onPress={this._onPressItem}/>);

    render() {
        return (
            <FlatList
                data={this.props.categories}
                refreshing={this.props.refreshing}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                onRefresh={this.props.onRefresh}
            />
        );
    }
}

export default withNavigation(CategoryList);