import React, { Component } from 'react';
import { useWindowDimensions, Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from '../page/Home/Home';
import Product from '../page/Product/Product';
import Event from '../page/Event/Event';
import SourceOfProduct from '../page/SourceOfProduct/SourceOfProduct';
import TouristAttraction from '../page/TouristAttraction/TouristAttraction';

// const Drawer = createDrawerNavigator();

const DrawerTabNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <View></View>
    );
}
// export default DrawerTabNavigator;


const TabBarDrawerStyles = StyleSheet.create({

});