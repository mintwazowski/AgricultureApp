import React, { Component, Fragment } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

import Home from '../page/Home';

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
                <Stack.Screen name="Signin" component={Signin} options={MainPageOptionNoBack} />
                <Stack.Screen name="Register" component={Register} options={MainPageOptionNoBack} />
                <Stack.Screen name="Home" component={TabNavigator} options={MainPageOptionNoBack} />

                <Stack.Screen name="EditProfile" component={EditProfile} options={OptionOnlyArrowBack} />
                <Stack.Screen name="EditPassword" component={EditPassword} options={OptionOnlyArrowBack} />
                <Stack.Screen name="EditChangePassword" component={EditChangePassword} options={OptionOnlyArrowBack} />

                <Stack.Screen name="ExampList" component={ExampList} options={OptionOnlyArrowBack} />
                <Stack.Screen name="ExampDetail" component={ExampDetail} options={OptionOnlyArrowBack} />
                <Stack.Screen name="ExampTest" component={ExampTest} options={OptionOnlyArrowBack} />
                <Stack.Screen name="ExampTestResult" component={ExampTestResult} options={MainPageOptionNoBack} />

                <Stack.Screen name="UpgradePremium" component={UpgradePremium} options={OptionOnlyArrowBack} />

                <Stack.Screen name="Chat" component={Chat} options={OptionOnlyArrowBack} />
                <Stack.Screen name="ChatList" component={ChatList} options={OptionOnlyArrowBack} />
                <Stack.Screen name="ChatAdmin" component={ChatAdmin} options={OptionOnlyArrowBack} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default class MainRoutes extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
                <StackNaviga />
            </>
        );
    }
}


const TabBarBottomStyles = StyleSheet.create({
    setheaderBackImage: {
        height: 20,
        width: 20,
        marginLeft: Platform.OS == "ios" ? 10 : -5
    },
});