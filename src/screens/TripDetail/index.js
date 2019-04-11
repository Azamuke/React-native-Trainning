import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, FlatList, AsyncStorage, TouchableOpacity } from 'react-native'
import styles from './styles'
import assets from './assets'
import isIphoneX from '../../../util/IsIphoneX'

class TripDetail extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        trip: [],
        events: []
    }

    renderItem = item => {
        return <Trip onPress= { () => {
            this.props.navigation,navigate('Trip', { id: item.item.id, refresh: this.loadData })
            }} title={item.item.trip} price= {item.item.price} />
    }



    position: {

        return(
            <View style={styles.wrapperListItem}>
                <View style={{ flex: 1 }} >
                    <Text style={styles.itemName}> {item.item.eventName} </Text>
                    <Text style={styles.itemDescription}> {item.item.Description} </Text>
                </View>
                <View style={styles.wrapperListItemPrice}>
                    <Text style={styles.itemPrice}> R$ {item.item.Price.toFixed(2)} </Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async() => {

        const id =

        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }

        const eventsAS = await AsyncStorage.getItem('trip-'+id)
        let events = []
        if(eventsAS){
            events = JSON.parse(eventsAS)
        }

        let trip = {
            trip: '',
            price: 0
        }
        trips.forEach(t) => {
            if(t.id===id){
                trip.trip = t.trip
                trip.price = t.price ? t.price: 0
            }
        }

        this.setState({
            trip: trip,
            events: events
        })

    }

    render(){

        const { events, trip } = this.state

        return(

            const id = this.props.navigation.state.params.id

            <View style= {{ flex: 1 }} >
                <View style={styles.header}>
                        <View style={[styles.backButtom,
                            isIphoneX() ? {marginTop: 16} : null
                        ]}>
                        <TouchableWithoutFeedback onPress={ this.props.navigation.goBack() }>
                        }
                            <Image source={require('../../../assets/Arrow_left.png')} />
                        </TouchableWithoutFeedback>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AddEvent', { id: id }, { refresh:this.loadData }) }>
                            <Image source={assets.addTrip} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tripName}> {trip.trip} </Text>
                    <Text style={styles.tripPrice}> {parseFloat(trip.price).toFixed(2)} </Text>
                </View>
                <FlatList style= {{
                    flex: 1
                }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16
                    }}
                    data= { trip.places }
                    renderItem= { this.renderItem }
                    keyExtractor= { item => item.id.toString() }
                />
            </View>
        )
    }
}

export default TripDetail