import React from "react";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from "../Pages/Home";
import CategoryNavigation from "./CategoryNavigation";
import Cart from "../Pages/Cart";

const AppNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='home' size={25} color={tintColor} />)
        })
    },
    ProductCategories: {
        screen: CategoryNavigation,
        navigationOptions: ({navigation}) => ({
            title: 'Categories',
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='view-list' size={25} color={tintColor} />)
        })
    },
    Cart: {
        screen: Cart,
        navigationOptions: ({navigation}) => ({
            title: 'Shopping Cart',
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='shopping-cart' size={25} color={tintColor} />)
        })
    }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);