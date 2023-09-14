// HomeScreen.js
import React from "react";
import {
    Text,
    View,
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

function ProductListScreen(props) {
    return (
        <View>
            <Text>
                {`Product List Screen ${props.demo}`}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => ({
    demo: state.reducer.demo,
});

export default connect(mapStateToProps)(ProductListScreen);
