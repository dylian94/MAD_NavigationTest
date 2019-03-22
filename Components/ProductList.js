import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import {withNavigation} from "react-navigation";
import ProductListItem from "./ProductListItem";

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class ProductList extends React.Component {
    _keyExtractor = (item, index) => "product-" + item.id;

    _onPressItem = (productId) => {
        this.props.navigation.navigate('Product', {id: productId});
    };

    _renderItem = ({item}) => (<ProductListItem product={item} onPress={this._onPressItem} />);

    render() {
        if (this.props.products.length > 0) {
            return (
                <FlatList
                    data={this.props.products}
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

export default withNavigation(ProductList);