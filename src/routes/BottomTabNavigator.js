import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import Home from '../page/Home/Home';
import Product from '../page/Product/Product';
import Event from '../page/Event/Event';
import SourceOfProductMain from '../page/SourceOfProduct/SourceOfProductMain';
import TouristAttraction from '../page/TouristAttraction/TouristAttraction';
import DashboardSeller from '../page/Seller/DashboardSeller';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarComponent="TabBarTop"
            tabBarPosition="top"
            tabBarOptions={{
                showLabel: true,
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
                    height: 55,
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
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive1 : TabBarBottomStyles.tabBarLabelColor1}> หน้าหลัก </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? <Icon name='home' size={20} color="#448165" /> : <Icon name='home' size={20} color="#999999" />

                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive1 : TabBarBottomStyles.tabBarLabelColor1}> สินค้าเกษตร </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? <Icon name='shopping-basket' size={20} color="#448165" /> : <Icon name='shopping-basket' size={20} color="#999999" />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Event"
                component={Event}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive1 : TabBarBottomStyles.tabBarLabelColor1}> งานแสดงสินค้า</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? <Icon name='calendar' size={20} color="#448165" /> : <Icon name='calendar' size={20} color="#999999" />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="SourceOfProductMain"
                component={SourceOfProductMain}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive1 : TabBarBottomStyles.tabBarLabelColor1}> แหล่งผลิตสินค้า</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? <Icon name='building' size={20} color="#448165" /> : <Icon name='building' size={20} color="#999999" />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="TouristAttraction"
                component={TouristAttraction}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive1 : TabBarBottomStyles.tabBarLabelColor1}> สถานที่ท่องเที่ยว </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? <Icon name='map-marker-alt' size={20} color="#448165" /> : <Icon name='map-marker-alt' size={20} color="#999999" />
                    )
                }}
                hideTabBar={true}
            />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;


const TabBarBottomStyles = StyleSheet.create({
    tabBarLabelColor1: {
        color: '#999999',
        fontSize: 10,
        fontFamily: 'Prompt-Regular',
        marginTop: 0,
        textAlign: 'center',
        lineHeight: 12,
        marginBottom: 10
    },
    tabBarLabelColorActive1: {
        color: '#448165',
        fontSize: 10,
        fontFamily: 'Prompt-Regular',
        marginTop: 0,
        textAlign: 'center',
        lineHeight: 12,
        marginBottom: 10
    },

    tabBarLabelColor: {
        color: '#999999',
        fontSize: 10,
        fontFamily: 'Prompt-Regular',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 12
    },
    tabBarLabelColorActive: {
        color: '#448165',
        fontSize: 10,
        fontFamily: 'Prompt-Regular',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 12
    },
});