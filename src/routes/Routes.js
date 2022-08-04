import React, { Component, Fragment } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import TopTabNavigator from './TopTabNavigator';
import BottomTabNavigator from './BottomTabNavigator';

import Signin from '../page/Signin/Signin';

import { Home } from '../page/Home';
import TouristAttractionDetail from '../page/TouristAttraction/TouristAttractionDetail'
import ProductDetail from '../page/Product/ProductDetail'

const Stack = createStackNavigator();
function StackNaviga() {
    const MainPageOptionNoBack = {
        gestureEnabled: false,
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
        tabBarVisible: false
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Signin" component={Signin} options={MainPageOptionNoBack} /> */}
                <Stack.Screen name="Home" component={BottomTabNavigator} options={MainPageOptionNoBack} />
                <Stack.Screen name="TouristAttractionDetail" component={TouristAttractionDetail} options={MainPageOptionNoBack} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} options={MainPageOptionNoBack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default class MainRoutes extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator />
                </View>
                <View style={{ flex: 1 }}>
                    <StackNaviga />
                </View>
            </>
        );
    }
}