import React, { useState, useEffect } from "react";
import {
    View, FlatList, ActivityIndicator, RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { getProductList } from "../../services/productServices";
import { showErrorMessage } from "../../common/message";
import ProductComponent from "./ProductItemComponent";

function ProductListScreen() {
    const [productList, setProductList] = useState([]);
    const [fetch, setFetch] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    function callGetProductList() {
        setFetch(true);
        getProductList(20).then((result) => {
            if (result && result.products) {
                setProductList(result.products);
                setFetch(false);
            }
        }).catch((err) => {
            showErrorMessage(err.message ? err.message : "Something went wrong");
        });
    }

    useEffect(() => {
        callGetProductList();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.baseComponent}>
            <FlatList
                style={{ flexGrow: 1, paddingTop: 10 }}
                data={productList}
                refreshControl={(
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                )}
                ListFooterComponent={fetch ? <ActivityIndicator /> : null}
                ItemSeparatorComponent={<View style={styles.itemSeparator} />}
                renderItem={({ item }) => (
                    <ProductComponent
                        productData={item}
                        onPress={(currentItem) => {
                            showErrorMessage(JSON.stringify(currentItem));
                        }}
                    />
                )}
            />
        </View>
    );
}

const mapStateToProps = (state) => ({
    demo: state.reducer.demo,
});

export default connect(mapStateToProps)(ProductListScreen);
