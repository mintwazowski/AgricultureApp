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

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class PaymentOrder extends Component {

    state = {
        content: "paymentOrder",
        // content: "paymentTransfer",
        // content: "paymentTransfer",
        checkShippingType: true,
        getImagePhoto: ""
    }

    onChangeContent(isContent) {
        this.setState({
            content: isContent
        })
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
        const { content, checkShippingType } = this.state
        return (
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
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} solid color={checkShippingType ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.ml10]}>ที่อยู่ตามข้อมูลส่วนตัว</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.ml10]}>ที่อยู่ใหม่</Text>
                            </View>
                        </View>
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
                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.mt15]}>วิธีจัดส่ง</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} solid color={checkShippingType ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>พัสดุลงทะเบียน</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>พัสดุ EMS</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                <FontAwesome5 name='check-circle' style={styles.customIcon} size={20} color={checkShippingType ? "#448165" : "#33333"} />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.ml10]}>
                                    รับที่ร้าาน / นัดรับนอกสถานที่
                                </Text>
                            </View>
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
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt15]}>ดูวิธีชำระทั้งหมด</Text>
                            </View>
                        </View>
                        <View style={{
                            marginTop: 10
                        }}>
                            <View style={SelectBorderStyles.selectForBank}>
                                <FontAwesome name='bank' style={styles.customIcon} size={20} color="#33333" />
                            </View>
                            <RNPickerSelect
                                allowFontScaling={false}
                                useNativeAndroidPickerStyle={false}
                                style={SelectBorderStyles}
                                items={[
                                    { label: 'Football', value: 'football' },
                                    { label: 'Baseball', value: 'baseball' },
                                    { label: 'Hockey', value: 'hockey' },
                                ]}
                                placeholder={{ label: "โอน / ชำระผ่านบัญชีธนาคาร" }}
                            />
                            <View style={SelectBorderStyles.selectFormArrow}>
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
                    </View>
                    : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({

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
        top: 15,
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