import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TextInput, AsyncStorage } from 'react-native'
import styles from './styles'
import assets from './assets'
import isIphoneX from '../../../util/IsIphoneX'



class AddTrip extends Component {

static navigationOptions = {
    header: null
}

state = {
    tripName: ''
}

    renderItem = item => {
        return(
            <View style={styles.wrapperListItem}>
                <View style={{ flex: 1 }} >
                    <Text style={styles.itemName}> {item.item.name} </Text>
                    <Text style={styles.itemDescription}> {item.item.description} </Text>
                </View>
                <View style={styles.wrapperListItemPrice}>
                    <Text style={styles.itemPrice}> R$ {item.item.price} </Text>
                </View>
            </View>
        )
    }

    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0
        }
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if (tripsAS){
            trips = JSON.parse(tripsAS)
        }
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        this.props.navigation.navitae('AddEvent',  { id: trip.id } )
        this.props.navigation.params.refresh()
    }

    render(){
        return(
            <View style= {{ flex: 1 }} >
                <View style={styles.header}>
                    <View style={[styles.backButtom,
                        isIphoneX() ? {marginTop: 16} : null
                    ]}>
                        <TouchableWithoutFeedback onPress={ () => this.props.navigation.goBack() }>
                            <Image source={require('../../../assets/Arrow_left.png')} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style={styles.tripName}> {trip.name} </Text>
                    <Text style={styles.tripPrice}> {trip.price} </Text>
                </View>
                <View>
                    <TextInput placeholder='Nome do Viagem' onChangeText={ txt => this.setState({ tripName: txt }) } >
                    <TouchableWithoutFeedback onPress={ this.handleSave } >
                        <Text> Salvar </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export default AddTrip