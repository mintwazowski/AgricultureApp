import React, { Component, Fragment } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, AsyncStorage, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';

import TopTabNavigator from './TopTabNavigator';
import BottomTabNavigator from './BottomTabNavigator';

import Signin from '../page/Signin/Signin';

import { Home } from '../page/Home';
import TouristAttractionDetail from '../page/TouristAttraction/TouristAttractionDetail';

import SourceOfProductDetail from '../page/SourceOfProduct/SourceOfProductDetail';
import EventDetail from '../page/Event/EventDetail';
import DashboardSeller from '../page/Seller/DashboardSeller';

import ProductDetail from '../page/Product/ProductDetail';
import OrderList from '../page/Transaction/OrderList';
import Favorite from '../page/Transaction/Favorite';
import Notify from '../page/Transaction/Notify';
import History from '../page/Transaction/History';
import ChatList from '../page/Transaction/ChatList';
import Chat from '../page/Transaction/Chat';
import DashboardSeller from '../page/Seller/DashboardSeller';
import SellerRegister from '../page/Seller/SellerRegister';
import SellerRegisterInfo from '../page/Seller/SellerRegisterInfo';
import SellerProductList from '../page/Seller/SellerProductList';
import SellerProductAdd from '../page/Seller/SellerProductAdd';
import SellerEvent from '../page/Seller/SellerEvent';
import SellOrderList from '../page/Seller/SellOrderList';
import SellOrder from '../page/Seller/SellOrder';
import SellOrderDetail from '../page/Seller/SellOrderDetail';

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

                <Stack.Screen name="Signin" component={Signin} options={MainPageOptionNoBack} />
                <Stack.Screen name="Home" component={BottomTabNavigator} options={MainPageOptionNoBack} />
                <Stack.Screen name="TouristAttractionDetail" component={TouristAttractionDetail} options={MainPageOptionNoBack} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} options={MainPageOptionNoBack} />
                <Stack.Screen name="OrderList" component={OrderList} options={MainPageOptionNoBack} />
                <Stack.Screen name="Favorite" component={Favorite} options={MainPageOptionNoBack} />
                <Stack.Screen name="Notify" component={Notify} options={MainPageOptionNoBack} />
                <Stack.Screen name="History" component={History} options={MainPageOptionNoBack} />
                <Stack.Screen name="ChatList" component={ChatList} options={MainPageOptionNoBack} />
                <Stack.Screen name="Chat" component={Chat} options={MainPageOptionNoBack} />
                <Stack.Screen name="SourceOfProductDetail" component={SourceOfProductDetail} options={MainPageOptionNoBack} />
                <Stack.Screen name="EventDetail" component={EventDetail} options={MainPageOptionNoBack} />

                <Stack.Screen name="DashboardSeller" component={DashboardSeller} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellerRegister" component={SellerRegister} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellerRegisterInfo" component={SellerRegisterInfo} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellerProductList" component={SellerProductList} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellerProductAdd" component={SellerProductAdd} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellerEvent" component={SellerEvent} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellOrderList" component={SellOrderList} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellOrder" component={SellOrder} options={MainPageOptionNoBack} />
                <Stack.Screen name="SellOrderDetail" component={SellOrderDetail} options={MainPageOptionNoBack} />

                <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} options={MainPageOptionNoBack} />

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