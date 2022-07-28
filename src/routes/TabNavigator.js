import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import MainStyles from '../styles/MainStyles';

import Home from '../page/Home';
import Category from '../page/Category';
import Contact from '../page/Contact';
import Setting from '../page/Setting';

const Tab = createBottomTabNavigator();
const TabBar = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarComponent="TabBarTop"
            tabBarPosition="top"
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    elevation: 2,
                    shadowColor: '#000000',
                    shadowOffset: { height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    height: 60,
                },
                tabStyle: {
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                },
                style: {
                    borderTopColor: "transparent",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                },
            }}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/home2.png') : require('../../assets/tabbar/home.png')}
                            style={focused ? { height: 22, width: '100%' } : { height: 22, width: '100%' }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/categories2.png') : require('../../assets/tabbar/categories.png')}
                            style={focused ? { height: 22, width: '100%' } : { height: 22, width: '100%' }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/chat.png') : require('../../assets/tabbar/chat2.png')}
                            style={focused ? { height: 22, width: '100%' } : { height: 22, width: '100%' }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/settings2.png') : require('../../assets/tabbar/settings.png')}
                            style={focused ? { height: 22, width: '100%' } : { height: 22, width: '100%' }}
                        />
                    )
                }}
                hideTabBar={true}
            />
        </Tab.Navigator>
    );
}
export default TabBar;