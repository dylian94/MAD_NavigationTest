import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/nl';
import {Button, Card, List, Text} from 'react-native-paper';
import {withNavigation} from "react-navigation";
import {StyleSheet, Dimensions, AsyncStorage} from "react-native";

const {width} = Dimensions.get('window');
const itemWidth = (width) / 2;

const styles = StyleSheet.create({
    price: {
        textAlignVertical: 'center'
    },
    card: {
        width: itemWidth - 12,
        margin: 6
    }
});

const formatter = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});

class CategoryListItem extends React.Component {
    _addToCart = async () => {
        try {
            const shoppingCartJson = await AsyncStorage.getItem('ShoppingCart');

            let shoppingCart = JSON.parse(shoppingCartJson);

            if (shoppingCart == null) {
                shoppingCart = {};
            }

            if (shoppingCart[this.product.id] == null) {
                shoppingCart[this.product.id] = {
                    item: this.product,
                    number: 1
                };
            } else {
                shoppingCart[this.product.id].number++;
            }

            await AsyncStorage.setItem('ShoppingCart', JSON.stringify(shoppingCart));

            this._updateState();
        } catch (error) {
            console.log(error);
        }
    };

    _updateState = async () => {
        const shoppingCartJson = await AsyncStorage.getItem('ShoppingCart');
        const shoppingCart = JSON.parse(shoppingCartJson);


        if (shoppingCart !== null && shoppingCart[this.product.id] != null) {
            this.setState({
                cartItem: {
                    number: shoppingCart[this.product.id].number
                }
            });
        }
    };

    constructor(props) {
        super(props);

        this.product = props.product;

        this.state = {
            cartItem: {
                item: this.product,
                number: 0
            }
        };
    }

    componentWillMount() {
        this._updateState();
    }

    render() {
        // return (
        //     <List.Item
        //         title={this.product.name}
        //         left={({props}) => <List.Icon {...props} icon="add-shopping-cart" />}
        //         right={() => <Text style={styles.price}>{formatter.format(this.product.price)}</Text>}
        //         onPress={this.props.onPress}
        //     />
        // );

        return (
            <Card style={styles.card}>
                <Card.Title title={this.product.name} subtitle={this.product.description}/>
                <Card.Cover source={{uri: this.product.image}}/>
                <Card.Actions>
                    <Button icon="add-shopping-cart" onPress={this._addToCart}>Buy</Button>
                    <Button icon="shopping-cart" disabled={true}>{this.state.cartItem.number}</Button>
                </Card.Actions>
            </Card>
        );
    }
}

export default withNavigation(CategoryListItem);