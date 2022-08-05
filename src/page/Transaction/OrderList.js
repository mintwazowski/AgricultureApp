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

export default class OrderList extends Component {

    state = {
        tab: "review",
        count: 1,
        value: 500
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
    onGoToFav() {
        this.props.navigation.navigate('Favorite')
    }
    onGoToNoti() {
        this.props.navigation.navigate('Notify')
    }

    render() {
        const { count, value, tab } = this.state
        const dataTimeline = [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
        ]
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
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                    onPress={() => this.onChangeTab('shipping')}
                                >
                                    <FontAwesome5 name='check-circle' style={styles.customIcon} size={15} solid color="#FFF" />
                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ส่งข้อมูล</Text>
                                </TouchableOpacity>
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
                                        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                                        timeStyle={{ textAlign: 'center', color: '#333', padding: 5, borderRadius: 13 }}
                                        descriptionStyle={{ color: 'gray' }}
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