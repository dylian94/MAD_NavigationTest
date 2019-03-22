import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-paper'
import AppHeader from "../Components/AppHeader";
import CategoryList from "../Components/CategoryList";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class ProductCategories extends React.Component {

    _resetCategories = () => {
        this.setState({
            categories: []
        });
    };

    _retrieveCategories = () => {
        this._resetCategories();

        fetch('https://demo6519375.mockable.io/categories')
            .then(response => response.text()) // Uitlezen als text omdat we zelf willen verifiëren dat de JSON juist is
            .then(text => {
                try {
                    const result = JSON.parse(text);
                    if (result.status === 'success') {
                        this.setState({
                            categories: result.categories
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
            categories: []
        };
    }


    componentDidMount() {
        this._retrieveCategories();
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader appTitle="Product categories" onRefresh={this._retrieveCategories}/>
                <CategoryList categories={this.state.categories} />
            </View>
        );
    }
}