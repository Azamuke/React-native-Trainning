import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TextInput, AsyncStorage } from 'react-native'
import styles from './styles'
import assets from './assets'
import isIphoneX from '../../../util/IsIphoneX'
import MapView, { Marker } from 'react-native-maps'

class AddEvent extends Component {

static navigationOptions = {
    header: null
}

state = {
    id: new Date().getTime(),
    position: {
        latitude: 37.78825,
        longitude: -22.4324
    },
    eventName: '',
    Description: '',
    Price: 0
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
        const id = this.props.navigation.state.params.trips.id
        const eventsAS = await AsyncStorage.getItem('trip-'+id)
        let events = []
        if(eventsAS){
            events = JSON.parse(eventsAS)
        }
        events.push(this.state)
        await AsyncStorage.setItem('trip-'+this.props.navigation.state.params.trips.id, JSON.stringify(events) )

        let total = 0
        events.forEach( e => {
            total+= e.Price
        })

        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAs){
            trips = JSON.parse(tripsAS)
        }
        trips.forEach( (trip, index) => {
            if(trip.id === id){
                trips[index].price = total
                trips[index].latitude = events[0].position.latitude
                trips[index].longitude = events[0].position.longitude
            }
        })

        await AsyncStorage.setItem('trips', JSON.stringify(trips))

        this.props.navigation.state.params.trips.refresh()

    }

    render(){

        return(
            <View style= {{ flex: 1 }} >
                <View style={styles.header}>
                    <MapView style={{
                        flex: 1
                    }} initialRegion={{
                        latitude: 37.78825,
                        longitude: -22.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -22.4324
                        }}
                        onDragEnd={
                            (evt) => this.setState(( position: evt.nativeEvent.coordinate ))
                        }
                        draggable
                    />
                    </MapView>
                    <View style={[styles.backButtom,
                        isIphoneX() ? {marginTop: 16} : null
                    ]}>
                        <TouchableWithoutFeedback onPress={ () => this.props.navigation.goBack() }>
                            <Image source={require('../../../assets/Arrow_left.png')} />
                        </TouchableWithoutFeedback>
                    </View>
                    </View>
                <View>
                    <TextInput placeholder='Nome do Ponto' onChangeText={ txt => this.setState({ eventName: txt }) } >
                    <TextInput placeholder='Descrição' onChangeText={ txt => this.setState({ Description: txt }) } >
                    <TextInput placeholder='Preço' onChangeText={ txt => this.setState({ Price: parseFloat(txt) }) } >
                    <TouchableWithoutFeedback onPress={ this.handleSave }>
                        <Text> Salvar </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export default AddEvent