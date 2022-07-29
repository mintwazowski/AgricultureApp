import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    ImageBackground,
    Dimensions,
    Platform,
    AsyncStorage,
    ViewPropTypes,
    ActivityIndicator,
} from 'react-native';
import NavigatorStyles from '../styles/NavigatorStyles';

export default class TopTabNavigator extends Component {

    render() {
        return (
            <View style={[NavigatorStyles.content]}>
                <View style={[NavigatorStyles.contentToNavigat]}>
                    <Image
                        resizeMode={'contain'}
                        style={[NavigatorStyles.logo]}
                        source={require('../../assets/logo.jpeg')}
                    />
                    <View style={[NavigatorStyles.hamMenu]}>
                        <Image
                            resizeMode={'contain'}
                            style={[NavigatorStyles.icon]}
                            source={require('../../assets/icon/cart.jpeg')}
                        />
                        <Image
                            resizeMode={'contain'}
                            style={[NavigatorStyles.icon2]}
                            source={require('../../assets/icon/msg.png')}
                        />
                        <Image
                            resizeMode={'contain'}
                            style={[NavigatorStyles.icon3]}
                            source={require('../../assets/icon/hamburger.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}