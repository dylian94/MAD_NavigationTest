import React from "react";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from "../Pages/Home";
import CategoryNavigation from "./CategoryNavigation";

const AppNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='search' size={25} color={tintColor} />)
        })
    },
    ProductCategories: {
        screen: CategoryNavigation,
        navigationOptions: ({navigation}) => ({
            title: 'Categories',
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='rowing' size={25} color={tintColor} />)
        })
    }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);