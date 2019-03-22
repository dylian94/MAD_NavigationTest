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
            category: {
                name: "",
                products: []
            }
        });
    };

    _retrieveCategory = () => {
        this._resetCategory();

        fetch('https://demo6519375.mockable.io/category/' + this.props.navigation.getParam("id", "0"))
            .then(response => response.text()) // Uitlezen als text omdat we zelf willen verifiëren dat de JSON juist is
            .then(text => {
                try {
                    const result = JSON.parse(text);
                    if (result.status === 'success') {
                        this.setState({
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
                <AppHeader appTitle={this.state.category.name} canGoBack={true} onRefresh={this._retrieveCategory}/>
                <ProductList products={this.state.category.products} />
            </View>
        );
    }
}