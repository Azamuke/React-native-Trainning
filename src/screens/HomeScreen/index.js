
import React, {Component} from 'react';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component{

    static navigationOptions = {
        header: null
    }

    state = {
        show: false
    }

    handleCounter = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <ImageBackground
                source={assets.background}
                imageStyle={{resizeMode: 'stretch'}}
                style={styles.background}
            >
                <View style={styles.wrapperLogoTripPlanner}>
                    <Image source={assets.logoTripPlanner} />
                </View>
                <View style={styles.wrapperLogoDevPleno}>
                    <Image source={assets.logoDevPleno} />
                </View>

                {
                    !this.state.show ?
                        <TouchableWithoutFeedback onPress={this.handleCounter}>
                            <View style={styles.buttomBackground}>
                                <Text style={styles.buttomText}> Entrar </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
                            <View style={styles.buttomBackgroundEmptyState}>
                                <Image source={assets.pin} style={styles.pin} />
                                <Text style={styles.buttomText}> Pronto para começar? </Text>
                                <Image source={assets.arrow} style={styles.arrow} />
                            </View>
                        </TouchableWithoutFeedback>
                }


            </ImageBackground>
        )
    }
}

export default HomeScreen