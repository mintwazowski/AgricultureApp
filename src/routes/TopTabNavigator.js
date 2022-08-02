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
import Icon from 'react-native-vector-icons/FontAwesome5';

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
                        <View style={[NavigatorStyles.icon2]}>
                            <Icon name='shopping-cart'size={20} color="#448165" />
                            <Text style={[NavigatorStyles.notify]}>0</Text>
                        </View>
                        <View style={[NavigatorStyles.icon2]}>
                            <Icon name='comment-alt'size={20} color="#448165" />
                            <Text style={[NavigatorStyles.notify]}>0</Text>
                        </View>
                        <View style={[NavigatorStyles.icon2]}>
                            <Icon name='bars'size={20} color="#448165" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}