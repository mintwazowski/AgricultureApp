import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import Home from '../page/Home/Home';
import Product from '../page/Product/Product';
import Event from '../page/Event/Event';
import SourceOfProduct from '../page/SourceOfProduct/SourceOfProduct';
import TouristAttraction from '../page/TouristAttraction/TouristAttraction';

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
                    height: 70,
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
                        <Image
                            resizeMode={'contain'}
                            source={focused ? { uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u18.png?token=1ae963d9b58ef3225136d8c461dc8debdeb2396bacafc185376a1b0b445602fe' } : { uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u18.png?token=1ae963d9b58ef3225136d8c461dc8debdeb2396bacafc185376a1b0b445602fe' }}
                            style={focused ? { height: 22, width: '100%', marginTop: 0 } : { height: 22, width: '100%', marginTop: 0 }}
                        />
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
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/cart.png') : require('../../assets/tabbar/cart.png')}
                            style={focused ? { height: 27, width: '100%', marginTop: 0 } : { height: 27, width: '100%', marginTop: 0 }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="Event"
                component={Event}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive : TabBarBottomStyles.tabBarLabelColor}> งานแสดงสินค้าเกษตร </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/event.png') : require('../../assets/tabbar/event.png')}
                            style={focused ? { height: 22, width: '100%', marginTop: 15 } : { height: 22, width: '100%', marginTop: 15 }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="SourceOfProduct"
                component={SourceOfProduct}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive : TabBarBottomStyles.tabBarLabelColor}> แหล่งผลิตสินค้าเกษตร </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? { uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u916.png?token=985dfd91fcd7eeaf4ece671bdf5aafe64f368d33fcba4f5a26217878ea19b200' } : { uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u916.png?token=985dfd91fcd7eeaf4ece671bdf5aafe64f368d33fcba4f5a26217878ea19b200' }}
                            style={focused ? { height: 22, width: '100%', marginTop: 15 } : { height: 22, width: '100%', marginTop: 15 }}
                        />
                    )
                }}
                hideTabBar={true}
            />
            <Tab.Screen
                name="TouristAttraction"
                component={TouristAttraction}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text allowFontScaling={false} style={focused ? TabBarBottomStyles.tabBarLabelColorActive : TabBarBottomStyles.tabBarLabelColor}> เส้นทางท่องเที่ยวเชิงเกษตร </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode={'contain'}
                            source={focused ? require('../../assets/tabbar/location2.png') : require('../../assets/tabbar/location2.png')}
                            style={focused ? { height: 22, width: '100%', marginTop: 15 } : { height: 22, width: '100%', marginTop: 15 }}
                        />
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