import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    column: {
        paddingLeft: 50,
        paddingRight: 50
    },
    headerContainer: {
        marginBottom: 500
    },
    menuItemHeader: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        marginBottom: 15,
        marginTop: 25
    },
    menuItemText: {
        textAlign: 'center',
        width: 350,
        color: 'black'
    },
    slugContainer: {
        alignItems: "center"
    },
    itemsContainer: {
        marginTop: 75
    },
    itemContainer: {
        width: 150,
        flex: 1,
        justifyContent: 'center'
    },
    itemTitle: {
        fontSize: 20,
        marginBottom: 10
    },
    itemImage: {
        paddingLeft: 20
    },
    itemDescription: {
        fontSize: 12,
        marginBottom: 10
    },
    itemPricing: {
        fontSize: 12
    }
});