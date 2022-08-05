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
    Button,
} from 'react-native';

import TopTabNavigator from '../../routes/TopTabNavigator';
import Search from '../Search/Search';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';

import Swiper from 'react-native-swiper'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import Timeline from 'react-native-timeline-flatlist'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class SellerRegister extends Component {

    onGoToShop() {
        this.props.navigation.navigate('SellerRegisterInfo')
    }

    onBackToMain() {
        this.props.navigation.navigate('DashboardSeller')
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'white' }}>
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

                            <View style={{ flexDirection: 'column', marginTop: 20 }}>
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.textAlignCenter]}>สมัครเป็นผู้ขายกับเว็บไซต์เกตรผลิต พาณิชย์ตลาด</Text>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                    <View style={{ flexDirection: 'column', marginVertical: 10, alignItems: 'center' }}>
                                        <View style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            backgroundColor: '#448165',
                                            justifyContent: 'center',
                                            marginBottom: 10
                                        }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text24, {
                                                alignSelf: 'center'
                                            }]}>1</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textAlignCenter]}>กรอกข้อมูลร้านค้า</Text>
                                    </View>
                                    <View style={{
                                        borderBottomColor: '#333',
                                        borderBottomWidth: 3,
                                        width: 50,
                                        marginBottom: 65,
                                        marginLeft: -20,
                                    }}>
                                    </View>
                                    <View style={{
                                        flexDirection: 'column', marginVertical: 10, alignItems: 'center', marginLeft: -10,
                                    }}>
                                        <View style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            backgroundColor: '#cccccc',
                                            justifyContent: 'center',
                                            marginBottom: 10
                                        }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text24, {
                                                alignSelf: 'center'
                                            }]}>2</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textAlignCenter]}>ระบุข้อมูลสินค้า</Text>
                                    </View>
                                    <View style={{
                                        borderBottomColor: '#333',
                                        borderBottomWidth: 3,
                                        width: 55,
                                        marginBottom: 65,
                                        marginLeft: -10,
                                    }}>
                                    </View>
                                    <View style={{
                                        flexDirection: 'column', marginVertical: 10, alignItems: 'center', marginLeft: -20,
                                    }}>
                                        <View style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            backgroundColor: '#cccccc',
                                            justifyContent: 'center',
                                            marginBottom: 10
                                        }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text24, {
                                                alignSelf: 'center'
                                            }]}>3</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textAlignCenter]}>ยืนยันบัญชีผู้ใช้งาน</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.contentTitle}>
                                <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>ข้อมูลสำหรับใช้ติดต่อ</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 15 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        ชื่อ-นามสกุล
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml10]}>
                                        นายเมตตา กรุณา
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        อีเมล์
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml10]}>
                                        metta@gmail.com
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        เบอร์โทรศัพท์
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml10]}>
                                        0999999999
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTitle}>
                                <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16]}>ข้อมูลร้านค้า</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        ชื่อร้านค้า *
                                    </Text>
                                    <View style={{ flex: 1, marginLeft: 15 }}>
                                        <View style={InputStyles.contentInputForm}>
                                            <TextInput
                                                allowFontScaling={false}
                                                placeholder=""
                                                style={[InputStyles.inputForm, MainStyles.mb10]}
                                                placeholderTextColor="#838383"
                                                clearButtonMode="always"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        บอร์โทรศัพท์ *
                                    </Text>
                                    <View style={{ flex: 1, marginLeft: 15 }}>
                                        <View style={InputStyles.contentInputForm}>
                                            <TextInput
                                                allowFontScaling={false}
                                                placeholder=""
                                                style={[InputStyles.inputForm, MainStyles.mb10]}
                                                placeholderTextColor="#838383"
                                                clearButtonMode="always"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        ที่อยู่ร้านค้า *
                                    </Text>
                                    <View style={{ flex: 1, marginLeft: 15 }}>
                                        <View style={InputStyles.contentInputForm}>
                                            <TextInput
                                                allowFontScaling={false}
                                                placeholder=""
                                                style={[InputStyles.inputForm, MainStyles.mb10]}
                                                placeholderTextColor="#838383"
                                                clearButtonMode="always"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        รูปภาพหน้าปก
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
                            </View>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                                onPress={() => this.onGoToShop()}
                            >
                                <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>ยืนยันข้อมูล</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ScrollView>
            </View>
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
        borderBottomColor: "#448165",
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
    TransactionMenucustomBadgeGreen: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#448165",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomGreen: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#448165",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 5
    },
    TransactionMenucustomYellow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
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
    notify: {
        backgroundColor: '#cc3300',
        position: 'absolute',
        right: 8,
        top: -5,
        paddingHorizontal: 7,
        color: 'white',
        borderRadius: 50,
        fontSize: 15,
        width: 23,
        height: 23
    }
});