import { StyleSheet, Dimensions } from 'react-native'

const dim = Dimensions.get('window')

 const styles = StyleSheet.create({
    wrapperTrip: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16
    },
    wrapperImage: {
        backgroundColor: 'yellow',
        width: dim.width-32,
        height: 144
    },
    textValor: {
        position: 'absolute',
            top: 144,
            right: 16,
            textAlign: 'right'
    }

})

export default styles