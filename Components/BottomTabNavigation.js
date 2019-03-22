import React from "react"; // Nodig om JSX te kunnen gebruiken
import { createAppContainer } from 'react-navigation'; // Nodig om React Navigation te kunnen gebruiken
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; // Nodig om een door React Native Paper gestijlde BottomNavigation te maken
import Home from "../Pages/Home"; // Nodig om dit pagina component te kunnen "renderen"
import ProductCategories from "../Pages/ProductCategories"; // Nodig om dit pagina component te kunnen "renderen"
import { MaterialIcons } from '@expo/vector-icons'; // Nodig om eigen icoontjes in het navigatiemenu te tonen

const AppNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home, // Het component dat je wilt tonen
        navigationOptions: ({ navigation }) => ({
            title: 'Home', // De tekst in het menu
            tabBarIcon: ({ tintColor }) => (<MaterialIcons name='home' size={25} color={tintColor} />) // Het icoon in het menu
        })
    },
    ProductCategories: {
        screen: ProductCategories,
        navigationOptions: ({ navigation }) => ({
            title: 'Categories',
            tabBarIcon: ({ tintColor }) => (<MaterialIcons name='list' size={25} color={tintColor} />)
        })
    }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);