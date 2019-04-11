import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Trip = props => {
    return(
        <TouchableOpacity onPress={ props.onPress } style={styles.wrapperTrip}>
            <View>
                <View style={styles.wrapperImage}>
                    <Text>Image</Text>
                </View>
                <Text> {props.title} </Text>
                <Text style={styles.textValor}> {props.price} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Trip