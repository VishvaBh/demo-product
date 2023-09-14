import { StyleSheet, Dimensions } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../common/utils";

const imageHeight = 200;

const styles = StyleSheet.create({
    baseComponent: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    flatList: {
        height: responsiveHeight(imageHeight),
        flexGrow: 0,
    },
    image: {
        width: Dimensions.get('window').width,
        height: responsiveHeight(imageHeight),
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
    },
    dotSlidingIndicator: {
        width: 10,
        height: 10,
        backgroundColor: '#347af0',
        borderRadius: 5,
    },
    dotContainer: {
        top: responsiveHeight(imageHeight) + 25,
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(25),
        marginHorizontal: responsiveWidth(15),
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        marginEnd: 15,
        maxWidth: '73%',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: '27%',
    },
    description: {
        marginHorizontal: responsiveWidth(15),
        marginTop: 10,
        color: 'black',
        fontSize: 20,
    },
});

export default styles;
