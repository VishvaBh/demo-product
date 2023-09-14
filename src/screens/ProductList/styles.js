import { StyleSheet } from "react-native";
import { responsiveWidth } from "../../common/utils";

const styles = StyleSheet.create({
    baseComponent: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemSeparator: {
        flex: 1,
        height: 2,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    itemComponent: {
        flexDirection: 'row',
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },
    image: {
        width: responsiveWidth(100),
        height: responsiveWidth(100),
        borderRadius: responsiveWidth(10),
        overflow: 'hidden',
        marginEnd: responsiveWidth(10),
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    description: {
        color: 'black',
        fontWeight: '300',
        fontSize: 15,
        textAlign: 'left',
        flex: 1,
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    searchView: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    searchText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 15,
        textAlign: 'left',
        flex: 1,
    },
    iconContainer: {
        paddingHorizontal: 3,
        marginHorizontal: 3,
    },
    icon: {
        width: 20,
        height: 20,
    },
    noData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
});

export default styles;
