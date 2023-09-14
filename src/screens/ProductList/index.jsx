import React, { useState, useEffect } from "react";
import {
    View, FlatList, ActivityIndicator, RefreshControl, Image, TouchableOpacity, TextInput, Text,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import styles from "./styles";
import { getProductList } from "../../services/productServices";
import { showErrorMessage } from "../../common/message";
import ProductComponent from "./ProductItemComponent";
import { Routes } from "../../navigator/Routes";
import { setCurrentProduct } from "../../redux/reducerSlice";
import Header from "../../commonComponent/header";
import { Images } from "../../images";

function ProductListScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerTitle: () => <Header title="Product List" />,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    // eslint-disable-next-line no-use-before-define
                    setShowSearch(true);
                }}
                >
                    <Image
                        style={styles.icon}
                        source={Images.ic_search}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const dispatch = useDispatch();
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [fetch, setFetch] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    // fetch product items from network
    function callGetProductListApi() {
        setFetch(true);
        getProductList(30).then((result) => {
            if (result && result.products) {
                setProductList(result.products);
                setFilteredProductList(result.products);
                setFetch(false);
            }
        }).catch((err) => {
            showErrorMessage(err.message ? err.message : "Something went wrong");
        });
    }

    function filterItem(text) {
        const filter = productList.filter(
            (item) => item.title.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredProductList(filter);
        setFetch(false);
    }

    useEffect(() => {
        callGetProductListApi();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        callGetProductListApi();
        setSearchItem('');
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.baseComponent}>
            {showSearch && (
                <View style={styles.searchView}>
                    <TextInput
                        onChangeText={(text) => setSearchItem(text)}
                        value={searchItem}
                        style={styles.searchText}
                        placeholderTextColor="gray"
                        placeholder="Enter name"
                        returnKeyType="search"
                        onSubmitEditing={({ nativeEvent: { text } }) => {
                            filterItem(text);
                        }}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => {
                            setSearchItem("");
                            callGetProductListApi();
                            setShowSearch(false);
                        }}
                    >
                        <Image style={styles.icon} source={Images.ic_close} />
                    </TouchableOpacity>
                </View>
            )}
            <FlatList
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1, paddingTop: 10 }}
                data={filteredProductList}
                refreshControl={(
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                )}
                ListEmptyComponent={
                    !fetch && filteredProductList.length === 0
                        ? <Text style={styles.noData}>No Product Available</Text>
                        : null
                }
                ListFooterComponent={fetch ? <ActivityIndicator /> : null}
                ItemSeparatorComponent={<View style={styles.itemSeparator} />}
                renderItem={({ item }) => (
                    <ProductComponent
                        productData={item}
                        onPress={(currentItem) => {
                            dispatch(setCurrentProduct(currentItem));
                            navigation.navigate(Routes.ProductDetail);
                        }}
                    />
                )}
            />
        </View>
    );
}

const mapStateToProps = () => ({
});

export default connect(mapStateToProps)(ProductListScreen);
