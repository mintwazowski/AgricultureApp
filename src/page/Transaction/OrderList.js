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

import TopTabNavigator from '../../routes/TopTabNavigator';
import Search from '../Search/Search';
import PaymentOrder from './PaymentOrder';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';
import SelectStyles from '../../styles/SelectStyles';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import Timeline from 'react-native-timeline-flatlist'
import RNPickerSelect from 'react-native-picker-select';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class OrderList extends Component {

    state = {
        tab: "shipping",
        count: 1,
        value: 500,
        checkCart1: false,
        checkCart2: false,
        checkCart3: false,
        content: "paymentOrder",
        // content: "paymentCheck",
        // content: "paymentTransfer",
        checkShippingType: true,
        getImagePhoto: "",
        checkAddress: true,
        newAddress: "",
        checkShipping: 1
    }

    onChangeTab(tab) {
        this.setState({
            tab: tab
        })
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

    onChooseImage() {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
                maxWidth: 250,
                maxHeight: 250,
                AccountImage: "",
                dataProfile: "",
            },
            title: 'เลือก',
            takePhotoButtonTitle: "ถ่ายรูปภาพ",
            chooseFromLibraryButtonTitle: "เลือกจากคลังภาพ",
            cancelButtonTitle: 'ยกเลิก',
        };
        launchImageLibrary(options, response => {
            this.setState({
                getImagePhoto: response.assets[0].uri,
            });
        });
    }

    onBackToMain() {
        this.props.navigation.navigate('Product')
    }
    onGoToChat() {
        this.props.navigation.navigate('ChatList')
    }
    onGoToFav() {
        this.props.navigation.navigate('Favorite')
    }
    onGoToNoti() {
        this.props.navigation.navigate('Notify')
    }

    onCheckCart(type) {
        const { checkCart1, checkCart2, checkCart3 } = this.state
        if (type === 1) {
            this.setState({
                checkCart1: !checkCart1
            })
        } else if (type === 2) {
            this.setState({
                checkCart2: !checkCart2
            })
        } else if (type === 3) {
            this.setState({
                checkCart3: !checkCart3
            })
        }
    }

    onCancelOrder() {
        this.props.navigation.navigate('Home')
    }
    onBuyOrder() {
        this.setState({
            tab: 'payment'
        })
    }

    onChangeContent(isContent) {
        this.setState({
            content: isContent
        })
    }

    onCheckAddress(type) {
        if (type === 1) {
            this.setState({
                checkAddress: true
            })
        } else {
            this.setState({
                checkAddress: false
            })
        }
    }

    handleChange(e, type) {
        var value = e.nativeEvent.text;
        if (type === "newAddress") {
            this.setState({
                newAddress: value
            })
        }
    }

    onCheckShipping(type) {
        this.setState({
            checkShipping: type
        })
    }

    render() {
        const { count, value, tab, checkCart1, checkCart2, checkCart3, content, checkShippingType, checkAddress, checkShipping } = this.state
        const dataTimeline = [
            { time: '10.00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
        ]
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

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
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToChat()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='chat-bubble' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แชท</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                        >
                            <View style={styles.TransactionMenucustomBadgeYellow}>
                                <FontAwesome5 name='shopping-cart' style={styles.TransactionMenucustomIcon} size={20} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                            <View style={styles.TransactionMenutextActive}></View>
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
                            onPress={() => this.onGoToFav()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='favorite' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>รายการโปรด</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
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
                                            source={require('../../../assets/images/6.png')}
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

                                    <TouchableOpacity
                                        style={styles.contentCartShopProductList}
                                        onPress={() => this.onCheckCart(1)}
                                        activeOpacity={1}
                                    >
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid={checkCart1}
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/image/35.png')}
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
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.contentCartShopProductList}
                                        onPress={() => this.onCheckCart(2)}
                                        activeOpacity={1}
                                    >
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid={checkCart2}
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/image/36.png')}
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
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.contentCartShopProductList}
                                        onPress={() => this.onCheckCart(3)}
                                        activeOpacity={1}
                                    >
                                        <FontAwesome5
                                            name='check-square'
                                            style={styles.customIcon}
                                            size={20}
                                            color="#000"
                                            solid={checkCart3}
                                        />
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/image/37.png')}
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
                                    </TouchableOpacity>

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
                                        onPress={() => this.onBuyOrder()}
                                    >
                                        <FontAwesome5 name='check-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                        <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>สั่งซื้อ</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnCartYellow, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                        onPress={() => this.onCancelOrder()}
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
                                <View>

                                    {content === "paymentOrder" ?
                                        <View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                                    <View style={styles.contentCartShop}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={require('../../../assets/images/6.png')}
                                                            style={{
                                                                width: 55,
                                                                height: 55,
                                                                marginRight: 10,
                                                                borderRadius: 50
                                                            }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                                ชื่อร้าน :
                                                            </Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                                ผ้าคราม สิงห์ล้านนา
                                                            </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18]}>ยอดรวมสุทธิ</Text>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text18, MainStyles.ml10]}>
                                                                    4,800.00  บาท
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnCartRed, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                                    onPress={() => this.onChangeContent('paymentCheck')}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText]}>รอชำระเงิน</Text>
                                                </TouchableOpacity>
                                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={styles.contentCartShop}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={require('../../../assets/images/6.png')}
                                                            style={{
                                                                width: 55,
                                                                height: 55,
                                                                marginRight: 10,
                                                                borderRadius: 50
                                                            }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                                ชื่อร้าน :
                                                            </Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                                ผ้าคราม สิงห์ล้านนา
                                                            </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18]}>ยอดรวมสุทธิ</Text>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text18, MainStyles.ml10]}>
                                                                    4,800.00  บาท
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                                >
                                                    <FontAwesome5 name='check-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ชำระเงินแล้ว</Text>
                                                </TouchableOpacity>
                                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                            </View>
                                        </View>
                                        : null
                                    }

                                    {content === "paymentCheck" ?
                                        <View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                                    <View style={styles.contentCartShop}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={require('../../../assets/images/6.png')}
                                                            style={{
                                                                width: 55,
                                                                height: 55,
                                                                marginRight: 10,
                                                                borderRadius: 50
                                                            }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                                ชื่อร้าน :
                                                            </Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                                ผ้าคราม สิงห์ล้านนา
                                                            </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18]}>ยอดรวมสุทธิ</Text>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text18, MainStyles.ml10]}>
                                                                    4,800.00  บาท
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>โปรดระบุวิธีการจัดส่ง</Text>
                                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row' }}
                                                    onPress={() => this.onCheckAddress(1)}
                                                    activeOpacity={1}
                                                >
                                                    <View style={{
                                                        width: 18,
                                                        height: 18,
                                                        backgroundColor: '#cccccc',
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {checkAddress ?
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                backgroundColor: '#448165',
                                                                borderRadius: 50
                                                            }}>
                                                            </View>
                                                            : null
                                                        }
                                                    </View>
                                                    {/* <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} solid color={checkShippingType ? "#448165" : "#33333"} /> */}
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.ml10]}>ที่อยู่ตามข้อมูลส่วนตัว</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', marginLeft: 15 }}
                                                    onPress={() => this.onCheckAddress(2)}
                                                    activeOpacity={1}
                                                >
                                                    {/* <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} /> */}
                                                    <View style={{
                                                        width: 18,
                                                        height: 18,
                                                        backgroundColor: '#cccccc',
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {checkAddress ?
                                                            null
                                                            : <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                backgroundColor: '#448165',
                                                                borderRadius: 50
                                                            }}>
                                                            </View>
                                                        }
                                                    </View>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.ml10]}>ที่อยู่ใหม่</Text>
                                                </TouchableOpacity>
                                            </View>
                                            {checkAddress ?
                                                <View style={{
                                                    borderWidth: 1,
                                                    borderColor: '#1562cd',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    marginTop: 10
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                        99 ซอยพุ่มอุไร สามเสนนอก ห้วยขวาง กรุงเทพฯ 10310
                                                    </Text>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                        โทร 089 999 999
                                                    </Text>
                                                </View>
                                                :
                                                <View style={[InputStyles.contentInputForm, { marginTop: 10 }]}>
                                                    <TextInput
                                                        allowFontScaling={false}
                                                        numberOfLines={10}
                                                        multiline={true}
                                                        placeholder="ที่อยู่ใหม่"
                                                        style={[InputStyles.inputFormArea, MainStyles.mb10]}
                                                        placeholderTextColor="#838383"
                                                        clearButtonMode="always"
                                                        value={this.state.AccountName}
                                                        onChange={e => this.handleChange(e, 'newAddress')}
                                                    />
                                                </View>
                                            }

                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.mt15]}>วิธีจัดส่ง</Text>
                                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row' }}
                                                    onPress={() => this.onCheckShipping(1)}
                                                    activeOpacity={1}
                                                >
                                                    <View style={{
                                                        width: 18,
                                                        height: 18,
                                                        backgroundColor: '#cccccc',
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {checkShipping === 1 ?
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                backgroundColor: '#448165',
                                                                borderRadius: 50
                                                            }}>
                                                            </View>
                                                            : null
                                                        }
                                                    </View>
                                                    {/* <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} solid color={checkShippingType ? "#448165" : "#33333"} /> */}
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>พัสดุลงทะเบียน</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', marginLeft: 15 }}
                                                    onPress={() => this.onCheckShipping(2)}
                                                    activeOpacity={1}
                                                >
                                                    <View style={{
                                                        width: 18,
                                                        height: 18,
                                                        backgroundColor: '#cccccc',
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {checkShipping === 2 ?
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                backgroundColor: '#448165',
                                                                borderRadius: 50
                                                            }}>
                                                            </View>
                                                            : null
                                                        }
                                                    </View>
                                                    {/* <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} /> */}
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>พัสดุ EMS</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', marginLeft: 15 }}
                                                    onPress={() => this.onCheckShipping(3)}
                                                    activeOpacity={1}
                                                >
                                                    <View style={{
                                                        width: 18,
                                                        height: 18,
                                                        backgroundColor: '#cccccc',
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        {checkShipping === 3 ?
                                                            <View style={{
                                                                width: 10,
                                                                height: 10,
                                                                backgroundColor: '#448165',
                                                                borderRadius: 50
                                                            }}>
                                                            </View>
                                                            : null
                                                        }
                                                    </View>
                                                    {/* <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} /> */}
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>
                                                        รับที่ร้าาน / นัดรับนอกสถานที่
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{
                                                borderWidth: 1,
                                                borderColor: '#1562cd',
                                                borderRadius: 5,
                                                padding: 10,
                                                marginTop: 10
                                            }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                    รวมค่าส่ง 30 บาท
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 10
                                                }}
                                            >
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.mt15]}>เลือกวิธีการชำระเงิน</Text>
                                                <View
                                                    style={{ flex: 1, alignItems: 'flex-end' }}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt15]}>ดูวิธีชำระทั้งหมด {`>`}</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                marginTop: 10
                                            }}>
                                                <View style={SelectBorderStyles1.selectForBank}>
                                                    <FontAwesome name='bank' style={styles.customIcon} size={15} color="#33333" />
                                                </View>
                                                <RNPickerSelect
                                                    allowFontScaling={false}
                                                    useNativeAndroidPickerStyle={false}
                                                    style={SelectBorderStyles1}
                                                    items={[
                                                        { label: 'Football', value: 'football' },
                                                        { label: 'Baseball', value: 'baseball' },
                                                        { label: 'Hockey', value: 'hockey' },
                                                    ]}
                                                    placeholder={{ label: "โอน / ชำระผ่านบัญชีธนาคาร" }}
                                                />
                                                <View style={SelectBorderStyles1.selectFormArrow}>
                                                    <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                </View>
                                            </View>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                                onPress={() => this.onChangeContent('paymentTransfer')}
                                            >
                                                <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText,]}>ยืนยัน</Text>
                                            </TouchableOpacity>
                                        </View>
                                        : null
                                    }

                                    {content === "paymentTransfer" ?
                                        <View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                                    <View style={styles.contentCartShop}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={require('../../../assets/images/6.png')}
                                                            style={{
                                                                width: 55,
                                                                height: 55,
                                                                marginRight: 10,
                                                                borderRadius: 50
                                                            }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                                ชื่อร้าน :
                                                            </Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                                ผ้าคราม สิงห์ล้านนา
                                                            </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18]}>ยอดรวมสุทธิ</Text>
                                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text18, MainStyles.ml10]}>
                                                                    4,800.00  บาท
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>รูปภาพหลักฐานการชำระเงิน *</Text>
                                            <View style={{
                                                borderWidth: 1,
                                                borderColor: '#8b8b8b',
                                                borderRadius: 5,
                                                padding: 10,
                                                marginTop: 10,
                                                alignItems: 'center',
                                                borderStyle: 'dashed',
                                            }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnTransfer, { marginBottom: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                                    onPress={() => this.onChooseImage()}
                                                >
                                                    <FontAwesome5 name='plus-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>เลือกไฟล์</Text>
                                                </TouchableOpacity>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                    ลากไฟล์มาวางที่นีี่ หรือกดปุ่ม "เลือกไฟล์"
                                                </Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                    แนบได้มากกว่า 1 ไฟล์
                                                </Text>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.mt10]}>รูปภาพหลักฐานการชำระเงิน *</Text>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <View style={{
                                                    width: '31%',
                                                    marginRight: 10,
                                                    marginTop: 10,
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignCenter]}>วัน</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                    }}>
                                                        <RNPickerSelect
                                                            allowFontScaling={false}
                                                            useNativeAndroidPickerStyle={false}
                                                            style={SelectBorderStyles}
                                                            items={[
                                                                { label: 'Football', value: 'football' },
                                                                { label: 'Baseball', value: 'baseball' },
                                                                { label: 'Hockey', value: 'hockey' },
                                                            ]}
                                                            placeholder={{ label: "วัน" }}
                                                        />
                                                        <View style={SelectBorderStyles.selectFormArrow}>
                                                            <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    width: '31%',
                                                    marginRight: 10,
                                                    marginTop: 10,
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignCenter]}>เดือน</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                    }}>
                                                        <RNPickerSelect
                                                            allowFontScaling={false}
                                                            useNativeAndroidPickerStyle={false}
                                                            style={SelectBorderStyles}
                                                            items={[
                                                                { label: 'Football', value: 'football' },
                                                                { label: 'Baseball', value: 'baseball' },
                                                                { label: 'Hockey', value: 'hockey' },
                                                            ]}
                                                            placeholder={{ label: "เดือน" }}
                                                        />
                                                        <View style={SelectBorderStyles.selectFormArrow}>
                                                            <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    width: '31%',
                                                    marginRight: 10,
                                                    marginTop: 10,
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignCenter]}>ปี</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                    }}>
                                                        <RNPickerSelect
                                                            allowFontScaling={false}
                                                            useNativeAndroidPickerStyle={false}
                                                            style={SelectBorderStyles}
                                                            items={[
                                                                { label: 'Football', value: 'football' },
                                                                { label: 'Baseball', value: 'baseball' },
                                                                { label: 'Hockey', value: 'hockey' },
                                                            ]}
                                                            placeholder={{ label: "ปี" }}
                                                        />
                                                        <View style={SelectBorderStyles.selectFormArrow}>
                                                            <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.mt10]}>เวลา</Text>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <View style={{
                                                    width: '49%',
                                                    marginRight: 10,
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignCenter]}>ชั่วโมง</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                    }}>
                                                        <RNPickerSelect
                                                            allowFontScaling={false}
                                                            useNativeAndroidPickerStyle={false}
                                                            style={SelectBorderStyles}
                                                            items={[
                                                                { label: 'Football', value: 'football' },
                                                                { label: 'Baseball', value: 'baseball' },
                                                                { label: 'Hockey', value: 'hockey' },
                                                            ]}
                                                            placeholder={{ label: "ชั่วโมง" }}
                                                        />
                                                        <View style={SelectBorderStyles.selectFormArrow}>
                                                            <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    width: '49%',
                                                    marginRight: 10,
                                                }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignCenter]}>นาที</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                    }}>
                                                        <RNPickerSelect
                                                            allowFontScaling={false}
                                                            useNativeAndroidPickerStyle={false}
                                                            style={SelectBorderStyles}
                                                            items={[
                                                                { label: 'Football', value: 'football' },
                                                                { label: 'Baseball', value: 'baseball' },
                                                                { label: 'Hockey', value: 'hockey' },
                                                            ]}
                                                            placeholder={{ label: "นาที" }}
                                                        />
                                                        <View style={SelectBorderStyles.selectFormArrow}>
                                                            <MaterialIcons name='keyboard-arrow-down' style={styles.customIcon} size={25} color="#33333" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={InputStyles.contentInputForm}>
                                                <Text allowFontScaling={false} style={[InputStyles.inputFormText, MainStyles.mb5, MainStyles.mt10]}>หมายเหตุ</Text>
                                                <TextInput
                                                    allowFontScaling={false}
                                                    numberOfLines={10}
                                                    multiline={true}
                                                    placeholder="หมายเหตุ"
                                                    style={[InputStyles.inputFormArea, MainStyles.mb10]}
                                                    placeholderTextColor="#838383"
                                                    clearButtonMode="always"
                                                    value={this.state.AccountName}
                                                    onChange={e => this.handleChange(e, 'AccountName')}
                                                />
                                            </View>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                                onPress={() => this.onChangeTab('shipping')}
                                            >
                                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                                <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ส่งข้อมูล</Text>
                                            </TouchableOpacity>
                                        </View>
                                        : null
                                    }
                                </View>
                            </View>
                            :
                            null
                        }

                        {/* PAYMENT */}
                        {tab === "shipping" ?
                            <View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <View style={styles.contentCartShop}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/images/6.png')}
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    marginRight: 10,
                                                    borderRadius: 50
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                    ชื่อร้าน :
                                                </Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                    ผ้าคราม สิงห์ล้านนา
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>หมายเลขติดตามพัสดุ</Text>
                                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.ml10]}>
                                                        MOCTH19169234242
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                    <Timeline
                                        data={dataTimeline}
                                        circleSize={12}
                                        circleColor='#448165'
                                        lineColor='#838383'
                                        timeContainerStyle={{ minWidth: 52, marginTop: -5, flexShrink: 1 }}
                                        timeStyle={{ textAlign: 'center', color: '#333', padding: 5, borderRadius: 13 }}
                                        descriptionStyle={{ color: '#448165', fontSize: 14 }}
                                        titleStyle={{ color: '#448165', fontSize: 14 }}
                                        options={{
                                            style: { paddingTop: 5 }
                                        }}
                                        isUsingFlatlist={true}
                                    />
                                </View>

                            </View>
                            :
                            null
                        }


                        {/* REVIEW */}
                        {tab === "review" ?
                            <View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <View style={styles.contentCartShop}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    marginRight: 10,
                                                    borderRadius: 50
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                    ชื่อร้าน :
                                                </Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                                    ผ้าคราม สิงห์ล้านนา
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>• กระเป๋าผ้าคราม 1 ชิ้น</Text>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, { flex: 1, textAlign: 'right' }]}>2,000.00 บาท</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginBottom: 10
                                    }}>
                                        <FontAwesome5 name='comments' style={styles.customIcon} size={15} solid color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml10]}>
                                            ให้คะแนนรีวิว
                                        </Text>
                                    </View>
                                    <View style={InputStyles.contentInputForm}>
                                        <TextInput
                                            allowFontScaling={false}
                                            numberOfLines={10}
                                            multiline={true}
                                            placeholder="ได้รับของแล้วนะครับ สินค้าสวยและดีมาก ไม่ผิดหวังครับ"
                                            style={[InputStyles.inputFormAreaGreen, MainStyles.mb10]}
                                            placeholderTextColor="#838383"
                                            clearButtonMode="always"
                                            value={this.state.AccountName}
                                            onChange={e => this.handleChange(e, 'AccountName')}
                                        />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16, MainStyles.ml10]}>
                                        รูปภาพ / วิดีโอ
                                    </Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: '#1562cd',
                                        borderRadius: 5,
                                        padding: 10,
                                        marginTop: 10,
                                        alignItems: 'center'
                                    }}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[MainStyles.btnTransfer, { marginBottom: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                            onPress={() => this.onChooseImage()}
                                        >
                                            <FontAwesome5 name='plus-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                            <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>เลือกไฟล์</Text>
                                        </TouchableOpacity>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ลากไฟล์มาวางที่นีี่ หรือกดปุ่ม "เลือกไฟล์"
                                        </Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            แนบได้มากกว่า 1 ไฟล์
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                    onPress={() => this.onBackToMain()}
                                >
                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ยืนยันข้อมูล</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                        }

                    </View>

                </ScrollView>
            </View >
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


const SelectBorderStyles1 = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
        paddingLeft: 50
    },
    inputAndroid: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
        paddingLeft: 50
    },
    selectForBank: {
        position: 'absolute',
        zIndex: 1,
        left: 15,
        top: 12,
    },
    selectFormArrow: {
        position: 'absolute',
        zIndex: 1,
        right: 15,
        top: 10,
    },
    selectFormArrowIcon: {
        height: 10,
        width: 10,
        marginRight: 10
    },

    selectCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    selectCardText: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    selectCardArrowIcon: {
        height: 16,
        width: 20,
        marginRight: 10
    },
});

const SelectBorderStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    inputAndroid: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    selectForBank: {
        position: 'absolute',
        zIndex: 1,
        left: 15,
        top: 12,
    },
    selectFormArrow: {
        position: 'absolute',
        zIndex: 1,
        right: 15,
        top: 10,
    },
    selectFormArrowIcon: {
        height: 10,
        width: 10,
        marginRight: 10
    },

    selectCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    selectCardText: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    selectCardArrowIcon: {
        height: 16,
        width: 20,
        marginRight: 10
    },
});