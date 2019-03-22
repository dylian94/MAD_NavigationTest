import {createStackNavigator} from 'react-navigation';
import ProductCategory from "../Pages/ProductCategory";
import ProductCategories from "../Pages/ProductCategories";

export default createStackNavigator(
    {
        // For each screen that you can navigate to, create a new entry like this:
        Categories: {
            // `ProfileScreen` is a React component that will be the main content of the screen.
            screen: ProductCategories,
            // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

            // Optional: When deep linking or using react-navigation in a web app, this path is used:
            // path: 'people/:name',
            // The action and route params are extracted from the path.

            // Optional: Override the `navigationOptions` for the screen
            // navigationOptions: ({ navigation }) => ({
            //     title: `Category: ${navigation.state.params.name}`,
            // }),
        },
        Category: {
            screen: ProductCategory
        }
    },
    {
        initialRouteName: 'Categories'
    }
);