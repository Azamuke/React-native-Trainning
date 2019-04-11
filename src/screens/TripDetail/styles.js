import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrapperListItem: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 14
    },
    itemDescription: {
        fontSize: 12
    },
    wrapperListItemPrice: {
        justifyContent: 'center',
        paddingRight: 16
    },
    itemPrice: {
        fontSize: 12
    },
    header: {
        backgroundColor: 'grey',
        height: 192
        flexDirection: 'row'
    },
    backButtom: {
        position: 'absolute',
        top: 16,
        left: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    tripName: {
        position:'absolute',
        left: 16,
        bottom: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    },
    tripPrice: {
        position:'absolute',
        right: 16,
        bottom: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    }

})

