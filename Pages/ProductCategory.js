import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AppHeader from "../Components/AppHeader";
import ProductList from "../Components/ProductList";


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class ProductCategory extends React.Component {
    _resetCategory = () => {
        this.setState({
            refreshing: true,
            category: {
                name: this.props.navigation.getParam("name", "0"),
                products: []
            }
        });
    };

    _retrieveCategory = () => {
        this._resetCategory();

        const url = 'https://5c95599f498269001487f25a.mockapi.io/shop/v1/categories/' + this.props.navigation.getParam("id", "0");

        fetch(url)
            .then(response => response.text()) // Uitlezen als text omdat we zelf willen verifiëren dat de JSON juist is
            .then(text => {
                try {
                    const result = JSON.parse(text);
                    if (result.products && result.products.length > 0) {
                        this.setState({
                            refreshing: false,
                            category: result
                        });
                    }
                    else {
                        throw 'Server error';
                    }
                } catch(err) {
                    Alert.alert('Oops! Something went wrong.', 'There was a problem on our server, we will try to fix this as soon as possible.');
                    this.props.navigation.goBack();
                }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Our servers could not be reached.', 'Please check your internet connection.');
                this.props.navigation.goBack();
            });
    };

    constructor() {
        super();
        this.state = {
            refreshing: false,
            category: {
                name: "",
                products: []
            }
        }
    }

    componentDidMount() {
        this._retrieveCategory();
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle={this.state.category.name} canGoBack={true} />
                <ProductList products={this.state.category.products} onRefresh={this._retrieveCategory} refreshing={this.state.refreshing} />
            </View>
        );
    }
}