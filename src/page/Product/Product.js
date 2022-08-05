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
} from 'react-native';

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';

import Swiper from 'react-native-swiper'
import TopTabNavigator from '../../routes/TopTabNavigator';

export default class Product extends Component {

    onDetail() {
        this.props.navigation.navigate('ProductDetail')
    }

    render() {
        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/images/4.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '250' },
            { id: 2, img_src: require('../../../assets/images/5.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
            { id: 3, img_src: require('../../../assets/images/6.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '25' },
            { id: 4, img_src: require('../../../assets/images/7.png'), name: 'น้ำมันเมล็ดชา Camellia Oleifera', price: '250' },
            { id: 5, img_src: require('../../../assets/images/8.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
            { id: 6, img_src: require('../../../assets/images/5.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
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
                                <View style={{ justifyContent: 'center', width: '10%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/icon/back.png')}
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Search />
                                </View>
                            </View>

                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.mt15, MainStyles.Text16]}>สินค้าขายดีประจำสัปดาห์</Text>
                        </View>
                    </View>

                    <View style={[MainStyles.m15]}>

                        {/* Product Recommend Content */}
                        <View>
                            <Swiper
                                height='100%'
                                showsButtons={false}
                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                            >
                                <View style={styles.slide1}>
                                    <View
                                        style={{
                                            width: '100%',
                                            flex: 1,
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        {getBannerFlashSale.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    onPress={() => this.onDetail()}
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        alignContent: 'center',
                                                        width: '48%',
                                                        marginLeft: '1%',
                                                        marginRight: '1%',
                                                        marginBottom: '2%',
                                                    }}                                                >
                                                    <View
                                                        style={{
                                                            shadowColor: "#000",
                                                            shadowOffset: { height: 2 },
                                                            shadowOpacity: 0.1,
                                                            shadowRadius: 4,
                                                            borderColor: "#f5f5f5",
                                                            borderWidth: 1,
                                                        }}
                                                    >
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={getBannerFlashSale[index].img_src}
                                                            style={{
                                                                width: '100%',
                                                                height: 100,
                                                            }}
                                                        />
                                                        <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                                            <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{getBannerFlashSale[index].name}</Text>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Image
                                                                        resizeMode={'cover'}
                                                                        source={require('../../../assets/icon/star.png')}
                                                                        style={{
                                                                            width: 12,
                                                                            height: 12,
                                                                            alignSelf: 'center',
                                                                            marginRight: 3
                                                                        }}
                                                                    />
                                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                                                </View>
                                                                <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>250 บาท</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                            </Swiper>
                        </View>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnLoadMore]}
                        >
                            <Text allowFontScaling={false} style={MainStyles.btnLoadMoreText}>โหลดเพิ่มเติม</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: -5
    },

    slide1: {
        flexDirection: 'row'
    },
    slide2: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',

    }
});