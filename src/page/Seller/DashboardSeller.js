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
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";


export default class DashboardSeller extends Component {

    onRegisSeller() {
        this.props.navigation.navigate('SellerRegister')
    }

    onGoToChat() {
        this.props.navigation.navigate('Home')
    }
    onGoToProduct() {
        this.props.navigation.navigate('SellerProductList')
    }
    onGoToOrder() {
        this.props.navigation.navigate('SellOrderList')
    }
    onGoToEent() {
        this.props.navigation.navigate('SellerEvent')
    }
    onGoToTour() {
        this.props.navigation.navigate('Home')
    }



    render() {
        const barData = [
            {
                value: 40,
                label: 'Q1',
                spacing: 2,
                labelWidth: 30,
                labelTextStyle: { color: 'gray' },
                frontColor: '#448165',
            },
            { value: 20, frontColor: '#e9b266' },
            {
                value: 50,
                label: 'Q2',
                spacing: 2,
                labelWidth: 30,
                labelTextStyle: { color: 'gray' },
                frontColor: '#448165',
            },
            { value: 40, frontColor: '#e9b266' },
            {
                value: 75,
                label: 'Q3',
                spacing: 2,
                labelWidth: 30,
                labelTextStyle: { color: 'gray' },
                frontColor: '#448165',
            },
            { value: 25, frontColor: '#e9b266' },
            {
                value: 30,
                label: 'Q4',
                spacing: 2,
                labelWidth: 30,
                labelTextStyle: { color: 'gray' },
                frontColor: '#448165',
            },
            { value: 20, frontColor: '#e9b266' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'white', paddingBottom: 15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                    <View style={{ flexDirection: "row", marginBottom: 30, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    width: '80%',
                                    backgroundColor: '#949494',
                                    borderRadius: 50,
                                    paddingVertical: 9,
                                    alignSelf: 'center',
                                }}
                            >
                                <Text allowFontScaling={false} style={[MainStyles.btnGreenWhiteText, MainStyles.Text18]}>Dashboard สำหรับผู้ขาย</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Transaction Menu */}
                    <View style={[styles.TransactionMenucontent, { backgroundColor: "#fdfdfd", paddingVertical: 10 }]}>
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
                            onPress={() => this.onGoToProduct()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGreen}>
                                <FontAwesome5 name='shopping-cart' style={styles.TransactionMenucustomIcon} size={20} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>ข้อมูลสินค้า</Text>
                            <View style={styles.TransactionMenutextActive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToOrder()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <FontAwesome5 name='store-alt' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, styles.notify]}>0</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToEent()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <FontAwesome5 name='calendar-check' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>จองกิจกรรม</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToTour()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <Foundation name='mountains' style={styles.TransactionMenucustomIcon} size={23} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แหล่งเที่ยว</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>
                    </View >

                    {/* Content */}
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <View style={{ marginBottom: 20 }}>
                            <BarChart
                                data={barData}
                                barWidth={20}
                                spacing={24}
                                xAxisThickness={0}
                                yAxisThickness={0}
                                yAxisTextStyle={{ color: 'gray' }}
                                hideYAxisText={true}
                                noOfSections={3}
                                maxValue={100}
                                label={false}
                                rulesType={"solid"}
                                width={Dimensions.get("window").width - 80}
                            />
                            {/* <BarChart
                                bezier
                                data={{
                                    labels: ["Q1", "Q2", "Q3", "Q4"],
                                    datasets: [
                                        {
                                            data: [20, 45, 28, 80],
                                            svg: { fill: 'rgb(134, 65, 244)', },
                                            strokeWidth: 2,

                                        },
                                        {
                                            data: [30, 15, 18, 10],
                                            svg: { fill: 'rgb(234, 80, 144)', },
                                            strokeWidth: 2,

                                        },
                                    ]
                                }}
                                segments={2}
                                width={Dimensions.get("window").width - 20}
                                height={220}
                                verticalLabelRotation={0}
                                fromZero={true}
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{
                                    backgroundGradientFrom: "#fff",
                                    backgroundGradientTo: "#fff",
                                    barPercentage: 0.7,
                                    height: 3000,
                                    fillShadowGradient: `#448165`,
                                    fillShadowGradientOpacity: 1,
                                    decimalPlaces: 0, // optional, defaults to 2dp
                                    color: (opacity = 1) => `#448165`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

                                    style: {
                                        borderRadius: 16,
                                        fontFamily: 'Prompt-Regular',
                                    },
                                    propsForBackgroundLines: {
                                        strokeWidth: 1,
                                        stroke: "#e3e3e3",
                                        strokeDasharray: "0",
                                    },
                                    propsForLabels: {
                                        fontFamily: 'Prompt-Regular',
                                    },

                                }}
                            /> */}
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 7, marginVertical: 15 }}>
                            <View style={{ flexDirection: 'column', width: '50%', paddingHorizontal: 7 }}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <View style={{ alignContent: 'flex-start' }}>
                                        <View style={styles.TransactionMenucustomYellow}>
                                            <Fontisto name='shopping-basket' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center', width: '80%' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, { marginTop: 10 }]}>คำสั่งซื้อ</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#e9b266', paddingVertical: 10, marginTop: 10 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text20, { color: '#fff' }]}>XX</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, { marginTop: 5, marginLeft: 15, color: '#fff' }]}>รายการ</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', width: '50%', paddingHorizontal: 7 }}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <View style={{ alignContent: 'flex-start' }}>
                                        <View style={[styles.TransactionMenucustomGreen]}>
                                            <Fontisto name='shopping-basket' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center', width: '80%' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, { marginTop: 10 }]}>จองกิจกรรม</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#448165', paddingVertical: 10, marginTop: 10 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text20, { color: '#fff' }]}>XX</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, { marginTop: 5, marginLeft: 15, color: '#fff' }]}>รายการ</Text>
                                </View>
                            </View>

                        </View>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnCartGreen, { marginRight: 10, flexDirection: 'row', justifyContent: 'center' }]}
                            onPress={() => this.onRegisSeller()}
                        >
                            <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>สมัคร</Text>
                        </TouchableOpacity>

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