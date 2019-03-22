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

    _onPressItem = (categoryId) => {
        this.props.navigation.navigate('Category', {id: categoryId});
    };

    _renderItem = ({item}) => (<CategoryListItem category={item} onPress={this._onPressItem} />);

    render() {
        if (this.props.categories.length > 0) {
            return (
                <FlatList
                    data={this.props.categories}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            );
        } else {
            return (
                <View style={styles.centeredContainer}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }
}

export default withNavigation(CategoryList);