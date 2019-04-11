import { StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    wrapperLogoTripPlanner: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapperLogoDevPleno: {
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'center',
        paddingBottom: 32
    },
    buttomBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16
    },
    buttomText: {
        textAlign: 'center',
        fontSize: 18
    },
    buttomBackgroundEmptyState: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16,
        alignItems: 'center'
    },
    pin: {
        marginTop: 16,
        marginBottom: 16
    },
    arrow: {
        marginTop: 16
    }

})