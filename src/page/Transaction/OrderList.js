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
import TransactionMenu from './TransactionMenu';
import PaymentOrder from './PaymentOrder';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';

export default class OrderList extends Component {

    state = {
        tab: "payment",
        count: 1,
        value: 500
    }

    onChangeTab(tab) {
        this.setState({
            tab: tab
        })
    }

    onBackToMain() {
        this.props.navigation.navigate('Product')
    }

    onCount(type) {
        const { count, value } = this.state
        if (type === "plus") {
            this.setState({
                count: count + 1,
                value: value * count
            })
        } else {
            this.setState({
                count: count - 1,
                value: value
            })
        }
    }

    render() {
        const { count, value, tab } = this.state

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

                    <TransactionMenu isActive="order" />

                    <View style={[MainStyles.mx15, MainStyles.mb15]}>

                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.mt15, MainStyles.Text16]}>การซื้อของฉัน</Text>

                        <View style={styles.contentMenu}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.contentMenuIcon}
                                onPress={() => this.onChangeTab('cart')}
                            >
                                <View style={styles.contentMenuBade}>
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text10, MainStyles.textAlignCenter]}>3</Text>
                                </View>
                                <FontAwesome5 name='shopping-cart' style={styles.customIcon} size={25} solid color={tab === "cart" ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[tab === "cart" ? MainStyles.textGreen : MainStyles.textGray, MainStyles.Text10, MainStyles.mt5]}>ตะกร้าสินค้า</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.contentMenuIcon}
                                onPress={() => this.onChangeTab('payment')}
                            >
                                <MaterialIcons name='payment' style={styles.customIcon} size={27} color={tab === "payment" ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[tab === "payment" ? MainStyles.textGreen : MainStyles.textGray, MainStyles.Text10, MainStyles.mt5]}>ที่ต้องชำระเงิน</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.contentMenuIcon}
                                onPress={() => this.onChangeTab('shipping')}
                            >
                                <FontAwesome5 name='car-side' style={styles.customIcon} size={27} solid color={tab === "shipping" ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[tab === "shipping" ? MainStyles.textGreen : MainStyles.textGray, MainStyles.Text10, MainStyles.mt5]}>ที่ต้องได้รับ</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.contentMenuIcon}
                                onPress={() => this.onChangeTab('review')}
                            >
                                <FontAwesome5 name='star' style={styles.customIcon} size={27} solid color={tab === "review" ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[tab === "review" ? MainStyles.textGreen : MainStyles.textGray, MainStyles.Text10, MainStyles.mt5]}>ให้คะแนนรีวิว</Text>
                            </TouchableOpacity>
                        </View>

                        {/* CART */}
                        {tab === "cart" ?
                            <View>
                                <View style={styles.contentTitle}>
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>รายการสินค้าในตะกร้า</Text>
                                </View>

                                <View style={styles.contentCart}>
                                    <View style={styles.contentCartShop}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/placeholder.jpg')}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                marginRight: 10,
                                                borderRadius: 50
                                            }}
                                        />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                            ชื่อร้าน :
                                        </Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                            ผ้าคราม สิงห์ล้านนา
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.contentCartShopProduct}>

                                    <View style={styles.contentCartShopProductList}>
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: 70,
                                                    height: 70,
                                                }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                ผ้าคราม สิงห์ล้านนา
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                500 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
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
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnMinus}
                                                    onPress={() => this.onCount('minus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                        -
                                                    </Text>
                                                </TouchableOpacity>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mx15]}>
                                                    {count}
                                                </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnPlus}
                                                    onPress={() => this.onCount('plus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>
                                                        +
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt15]}>
                                                {value} บาท
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.contentCartShopProductList}>
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: 70,
                                                    height: 70,
                                                }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                ผ้าคราม สิงห์ล้านนา
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                500 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
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
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnMinus}
                                                    onPress={() => this.onCount('minus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                        -
                                                    </Text>
                                                </TouchableOpacity>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mx15]}>
                                                    {count}
                                                </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnPlus}
                                                    onPress={() => this.onCount('plus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>
                                                        +
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt15]}>
                                                {value} บาท
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.contentCartShopProductList}>
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: 70,
                                                    height: 70,
                                                }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                ผ้าคราม สิงห์ล้านนา
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>
                                                500 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
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
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnMinus}
                                                    onPress={() => this.onCount('minus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                        -
                                                    </Text>
                                                </TouchableOpacity>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mx15]}>
                                                    {count}
                                                </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.cartShopProductListBtnPlus}
                                                    onPress={() => this.onCount('plus')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>
                                                        +
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.mt15]}>
                                                {value} บาท
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18]}>สรุปรายการสินค้า</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                    </View>
                                    <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textAlignRight]}>
                                            ยอดรวมสุทธิ
                                        </Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text18, MainStyles.ml10]}>
                                            4,800.00  บาท
                                        </Text>
                                    </View>
                                </View>

                                <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                    >
                                        <FontAwesome5 name='check-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                        <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>สั่งซื้อ</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnCartYellow, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                    >
                                        <FontAwesome5 name='trash' style={styles.customIcon} size={15} solid color="#FFF" />
                                        <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ขอยกเลิกคำสั่งซื้อ</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'column', marginTop: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>ข้อควรทราบ</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>การซื้อขายจะสมบูรณ์ ต้องติดต่อผู้ขายโดยตรง </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>ระบบจะแสดงเพียงช่องทางติดต่อและราคาในการขายเท่านั้น</Text>
                                </View>
                            </View>
                            :
                            null
                        }

                        {/* PAYMENT */}
                        {tab === "payment" ?
                            <View>
                                <View style={styles.contentTitle}>
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>รายการสินค้าที่ต้องชำระเงิน</Text>
                                </View>
                                <PaymentOrder />
                            </View>
                            :
                            null
                        }

                        {/* PAYMENT */}
                        {tab === "PAYMENT" ?
                            <View>
                            </View>
                            :
                            null
                        }


                        {/* REVIEW */}
                        {tab === "review" ?
                            <View>
                            </View>
                            :
                            null
                        }

                    </View>


                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    contentMenu: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    contentMenuBade: {
        width: 17,
        height: 17,
        borderRadius: 50,
        backgroundColor: "#cc3300",
        position: 'absolute',
        right: 0,
        top: -10,
        zIndex: 999
    },
    contentMenuIcon: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        width: 60,
        height: 45,
        marginHorizontal: 13,
    },
    customIcon: {
        justifyContent: "center",
        alignSelf: "center",
    },

    contentCart: {
        marginVertical: 15
    },
    contentTitle: {
        backgroundColor: '#448165',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
    contentCartShop: {
        flexDirection: 'row'
    },
    contentCartShopProduct: {
        flexDirection: 'column'
    },
    contentCartShopProductList: {
        flexDirection: 'row',
        marginBottom: 15
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