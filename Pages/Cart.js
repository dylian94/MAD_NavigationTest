import React from 'react';
import {Alert, AsyncStorage, StyleSheet, View} from 'react-native';
import AppHeader from "../Components/AppHeader";
import ProductList from "../Components/ProductList";


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class Cart extends React.Component {
    _resetState = () => {
        this.setState({
            refreshing: true,
            cart: {
                items: []
            }
        });
    };

    _retrieveCategory = async () => {
        this._resetState();

        let cartProducts = [];

        const shoppingCartJson = await AsyncStorage.getItem('ShoppingCart');
        const shoppingCart = JSON.parse(shoppingCartJson);

        Object.keys(shoppingCart).forEach(function (id) {
            if(shoppingCart[id] !== null && shoppingCart[id].item !== null) {
                cartProducts.push(shoppingCart[id].item);
            }
        });

        this.setState({
            refreshing: false,
            cart: {
                items: cartProducts
            }
        });
    };

    _clearCart = async () => {
        await AsyncStorage.setItem('ShoppingCart', JSON.stringify({}));
        this._retrieveCategory();
    };

    constructor() {
        super();
        this.state = {
            refreshing: false,
            cart: {
                items: []
            }
        }
    }

    componentDidMount() {
        this._retrieveCategory();
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Shopping Cart" onClear={this._clearCart} />
                <ProductList products={this.state.cart.items} onRefresh={this._retrieveCategory}
                             refreshing={this.state.refreshing}/>
            </View>
        );
    }
}