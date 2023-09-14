import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    View, Text, FlatList, Animated, ScrollView,
} from 'react-native';
import Header from "../../commonComponent/header";
import DotIndicator from "../../commonComponent/dotIndicator";
import ProductImage from "./ProductImage";
import styles from "./styles";
import { formatCurrency } from "../../common/utils";

function ProductDetailsScreen({ navigation, product }) {
    useEffect(() => {
        navigation.setOptions({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerTitle: () => <Header title={product.title} />,
        });
    }, [navigation]);

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.baseComponent}>
            <FlatList
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                data={product.images}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    },
                )}
                renderItem={({ item }) => (<ProductImage productData={item} />)}
            />
            <DotIndicator
                marginHorizontal={3}
                scrollX={scrollX}
                dotSize={10}
                slidingIndicatorStyle={styles.dotSlidingIndicator}
                dotStyle={styles.dotSlidingIndicator}
                containerStyle={styles.dotContainer}
                data={product.images}
            />
            <View style={styles.infoHeader}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{`${formatCurrency(product.price)}`}</Text>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.description}>
                    {product.description}
                </Text>
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state) => ({
    product: state.reducer.product,
});

export default connect(mapStateToProps)(ProductDetailsScreen);
