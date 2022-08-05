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

export default class History extends Component {

    onBackToMain() {
        this.props.navigation.navigate('Home')
    }
    onGoToFav() {
        this.props.navigation.navigate('Favorite')
    }
    onGoToCart() {
        this.props.navigation.navigate('OrderList')
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


                    <View style={[MainStyles.mx15, MainStyles.mb15]}>
                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.mb15, MainStyles.Text16]}>ประวัติการเข้าชมข้อมูล</Text>

                        <View style={styles.contentCartShopProductGray}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/placeholder.jpg')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                        เมล็ดกาแฟ เขาทะลุ
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        กาแฟเขาทะชุมพร เริ่มต้นจากการเป็นครอบครัวเกษตรกร ชาวสวนกาแฟ
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={12} color="#333" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.contentCartShopProduct}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/placeholder.jpg')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                        เมล็ดกาแฟ เขาทะลุ
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        กาแฟเขาทะชุมพร เริ่มต้นจากการเป็นครอบครัวเกษตรกร ชาวสวนกาแฟ
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={12} color="#333" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.contentCartShopProductGray}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/placeholder.jpg')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                        เมล็ดกาแฟ เขาทะลุ
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        กาแฟเขาทะชุมพร เริ่มต้นจากการเป็นครอบครัวเกษตรกร ชาวสวนกาแฟ
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <FontAwesome5 name='trash' style={styles.TransactionMenucustomIcon} size={12} color="#333" />
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
    contentCartShopProductGray: {
        flexDirection: 'column',
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 10
    },
    contentCartShopProduct: {
        flexDirection: 'column',
        padding: 10
    },
    contentCartShopProductList: {
        flexDirection: 'row',
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