import React, { Component, Fragment } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import TopTabNavigator from './TopTabNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerTabNavigator from './DrawerTabNavigator';
import Signin from '../page/Signin/Signin';

import { Home } from '../page/Home';
import TouristAttractionDetail from '../page/TouristAttraction/TouristAttractionDetail'

const Stack = createStackNavigator();
function StackNaviga() {
    const MainPageOptionNoBack = {
        gestureEnabled: false,
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
        tabBarVisible: false
    }
    const OptionOnlyArrowBack = {
        title: '',
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerStyle: { backgroundColor: '#fff', shadowOpacity: 0, elevation: 0, },
        cardStyle: { backgroundColor: '#fff' },
        // headerBackImage: () => (
        //     <Image
        //         resizeMode={'contain'}
        //         source={require("../../assets/icon/backappred.png")}
        //         style={[TabBarBottomStyles.setheaderBackImage]}
        //     />
        // ),
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Signin" component={Signin} options={MainPageOptionNoBack} /> */}
                <Stack.Screen name="Home" component={BottomTabNavigator} options={MainPageOptionNoBack} />
                <Stack.Screen name="TouristAttractionDetail" component={TouristAttractionDetail} options={MainPageOptionNoBack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default class MainRoutes extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
                <createDrawerNavigator />
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