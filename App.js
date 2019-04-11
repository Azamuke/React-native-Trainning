
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import TripDetail from './src/screens/TripDetail'
import AddEvent from './src/screens/AddEvent'
import AddTrip from './src/screens/AddTrip'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Trips: TripsScreen,
    Detail: TripDetail,
    AddEvent: AddEvent,
    AddTrip: AddTrip
}, {initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)