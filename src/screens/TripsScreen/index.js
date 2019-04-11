import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Trip from './Trip'
import isIphoneX from '../../../util/IsIphoneX'
import MapView from 'react-native-maps'
import assets from './assets'

class TripsScreen extends Component{

static navigationOptions = {
    header: null
}

state = {
    trips = []

}

    renderItem = item => {
        return <Trip onPress={ () => this.props.navigation.navigate('Detail', { id: item.item.id }) } title={ item.item.trip } price={ item.item.price } />
    }

    componentDidMount(){
        this.loadData()
    }

    loadData = async() => {
        const id = this.props.navigation.state.params.id
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        this.setState( trips: trips )

    }

    handleItemChange = info => {
        const { viewableItems } = info
        if(viewableItems && viewableItems.lenght > 0){
            const [item] = viewableItems
            this.map.animateToRegion(
                this.regionFrom(item.item.latitude, item.item.longitude, 1000),
                2000
            )
        }
    }

    regionFrom = (lat, lon, distance) => {
        distance = distance/2
        const circumference = 40075
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000
        const angularDistance = distance/circumference

        const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
        const longitudeDelta = Math.abs(Math.atan2(
        Math.sin(angularDistance)*Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

        return result = {
            latitude: lat,
            longitude: lon,
            latitudeDelta,
            longitudeDelta,
            }
        }

    render(){


        const { trips } = this.state

        return(
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                <View style={{
                    flex: 1
                }}>
                    <MapView
                        style={{
                            flex: 1
                        }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -22.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        ref = {ref => this.map = ref}
                    />
                    <View styles={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        padding: 10
                    }}>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AddTrip', { refresh:this.loadData }) }>
                            <Image source={assets.addTrip} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={trips}
                        renderItem={this.renderItem}
                        horizontal
                        pagingEnabled
                        keyExtractor={ item => item.id.toString() }
                        style= {[
                            isIphoneX() ? {marginBottom: 20} : null
                        ]}
                        onViewableItemsChanged = {this.handleItemChange}
                    />
                </View>

         </View>

        )
    }
}

export default TripsScreen