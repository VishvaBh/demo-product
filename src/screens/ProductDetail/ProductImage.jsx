import {
    Image,
} from "react-native";
import styles from "./styles";

export default function ProductImage({ productData }) {
    return (
        <Image style={styles.image} resizeMode="contain" source={{ uri: productData }} />
    );
}
