import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import {withNavigation} from "react-navigation";
import ProductListItem from "./ProductListItem";

const styles = StyleSheet.create({
    list: {
    }
});

class ProductList extends React.Component {
    _keyExtractor = (item, index) => "product-" + item.id;

    _onPressItem = (productId) => {
        this.props.navigation.navigate('Product', {id: productId});
    };

    _renderItem = ({item}) => (<ProductListItem product={item} onPress={this._onPressItem}/>);

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.list}
                numColumns={2}
                data={this.props.products}
                refreshing={this.props.refreshing}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                onRefresh={this.props.onRefresh}
            />
        );
    }
}

export default withNavigation(ProductList);