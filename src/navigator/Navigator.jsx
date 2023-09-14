import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductList";

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Product List" component={ProductListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
