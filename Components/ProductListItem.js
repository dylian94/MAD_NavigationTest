import React from 'react';
import {List, Text} from 'react-native-paper';
import {withNavigation} from "react-navigation";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    price: {
        textAlignVertical: 'center'
    }
});

class CategoryListItem extends React.Component {

    product = this.props.product;

    render() {
        return (
            <List.Item
                title={this.product.name}
                left={({props}) => <List.Icon {...props} icon="add-shopping-cart" />}
                right={() => <Text style={styles.price}>{this.product.price}</Text>}
                onPress={this.props.onPress}
            />
        )
    }
}

export default withNavigation(CategoryListItem);