import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductList";
import ProductDetailsScreen from "../screens/ProductDetail";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.ProductList} component={ProductListScreen} />
                <Stack.Screen name={Routes.ProductDetail} component={ProductDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
