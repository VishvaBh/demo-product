import {
    View, Text, Image, TouchableOpacity,
} from "react-native";
import { formatCurrency } from "../../common/utils";
import styles from "./styles";

export default function ProductComponent({ productData, onPress }) {
    return (
        <TouchableOpacity style={styles.itemComponent} onPress={() => { onPress(productData); }}>
            <Image style={styles.image} source={{ uri: productData.thumbnail }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{productData.title}</Text>
                <Text style={styles.price}>{`Price: ${formatCurrency(productData.price)}`}</Text>
                <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{productData.description}</Text>
            </View>

        </TouchableOpacity>
    );
}
