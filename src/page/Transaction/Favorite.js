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
    Modal,
} from 'react-native';

import Search from '../Search/Search';
import PaymentOrder from './PaymentOrder';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import Timeline from 'react-native-timeline-flatlist'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class Favorite extends Component {

    onBackToMain() {
        this.props.navigation.navigate('Home')
    }
    onGoToCart() {
        this.props.navigation.navigate('OrderList')
    }
    onGoToNoti() {
        this.props.navigation.navigate('Notify')
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>

                            {/* Search Content */}
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ justifyContent: 'center', width: '10%' }}
                                    onPress={() => this.onBackToMain()}
                                >
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/icon/back.png')}
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={{ width: '90%' }}>
                                    <Search />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Transaction Menu */}
                    <View style={[styles.TransactionMenucontent]}>
                        <View style={styles.TransactionMenucontentMenu}>
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='chat-bubble' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แชท</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </View>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToCart()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <FontAwesome5 name='shopping-cart' style={styles.TransactionMenucustomIcon} size={20} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToNoti()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='notifications-active' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แจ้งเตือน</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                        >
                            <View style={styles.TransactionMenucustomBadgeYellow}>
                                <MaterialIcons name='favorite' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>รายการโปรด</Text>
                            <View style={styles.TransactionMenutextActive}></View>
                        </TouchableOpacity>

                        <View style={styles.TransactionMenucontentMenu}>
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='calendar-today' style={styles.TransactionMenucustomIcon} size={23} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>กิจกรรม</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </View>
                    </View >


                    <View style={[MainStyles.mx15, MainStyles.mb15]}>
                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.mt15, MainStyles.Text16]}>รายการโปรด</Text>
                        <View
                            style={{
                                marginTop: 10
                            }}
                        >
                            <View style={styles.contentCartShopProduct}>
                                <View style={styles.contentCartShopProductList}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/placeholder.jpg')}
                                        style={{
                                            width: 70,
                                            height: 70,
                                        }}
                                    />

                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ผ้าคราม สิงห์ล้านนา
                                        </Text>
                                        <View style={[MainStyles.mt30, { alignItems: 'flex-start' }]}>
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                imageSize={10}
                                                isDisabled={true}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={17} color="#333" />
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt30]}>
                                            2,000 บาท
                                        </Text>
                                    </View>
                                    {/* <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'flex-end', flexDirection: 'column', marginLeft: 10 }}>
                                        <MaterialIcons name='chat-bubble' style={styles.TransactionMenucustomIcon} size={22} color="#333" />
                                        <View style={[MainStyles.mt30, { alignItems: 'flex-start' }]}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                2,000 บาท
                                            </Text>
                                        </View>
                                    </View> */}
                                </View>
                                <View style={styles.contentCartShopProductList}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/placeholder.jpg')}
                                        style={{
                                            width: 70,
                                            height: 70,
                                        }}
                                    />

                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ผ้าคราม สิงห์ล้านนา
                                        </Text>
                                        <View style={[MainStyles.mt30, { alignItems: 'flex-start' }]}>
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                imageSize={10}
                                                isDisabled={true}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={17} color="#333" />
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt30]}>
                                            2,000 บาท
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.contentCartShopProductList}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/placeholder.jpg')}
                                        style={{
                                            width: 70,
                                            height: 70,
                                        }}
                                    />

                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ผ้าคราม สิงห์ล้านนา
                                        </Text>
                                        <View style={[MainStyles.mt30, { alignItems: 'flex-start' }]}>
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                imageSize={10}
                                                isDisabled={true}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={17} color="#333" />
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt30]}>
                                            2,000 บาท
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    TransactionMenucontent: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignSelf: "center",
    },
    TransactionMenucontentMenu: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    TransactionMenutextUnactive: {
        paddingTop: 5
    },
    TransactionMenutextActive: {
        borderBottomColor: "#e9b266",
        borderBottomWidth: 1,
        width: 40,
        paddingTop: 5
    },
    TransactionMenucustomBadgeGray: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#999999",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomBadgeYellow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomIcon: {
        justifyContent: "center",
        alignSelf: "center",
    },

    contentCartShopProduct: {
        flexDirection: 'column'
    },
    contentCartShopProductList: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    cartShopProductListBtnMinus: {
        backgroundColor: '#e4e4e4',
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    cartShopProductListBtnPlus: {
        backgroundColor: '#448165',
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
});