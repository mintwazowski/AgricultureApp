import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
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
import { ScrollView } from 'react-native-gesture-handler'

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper'

export const width1 = Dimensions.get('window').width - 80
const SLIDER_1_FIRST_ITEM = 4;

export default class Home extends Component {

    state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                <Image
                    resizeMode={'cover'}
                    source={item.img_src}
                    style={{
                        width: itemWidth,
                        height: 120,
                        borderRadius: 10,
                    }}
                />
                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignCenter, MainStyles.mt10]}>{item.name}</Text>
                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text10, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>{item.price} บาท</Text>
            </View>
        );
    }

    render() {
        const { slider1ActiveSlide } = this.state

        var getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/images/4.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '250' },
            { id: 2, img_src: require('../../../assets/images/5.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
            { id: 3, img_src: require('../../../assets/images/6.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '25' },
            { id: 4, img_src: require('../../../assets/images/7.png'), name: 'น้ำมันเมล็ดชา Camellia Oleifera', price: '250' },
            { id: 5, img_src: require('../../../assets/images/8.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
        ]

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>

                            {/* Search Content */}
                            <Search />

                            {/* Banner Content */}
                            <View style={{ marginTop: 15, flex: 0.45 }}>
                                <Swiper
                                    ref='swiper'
                                    height='100%'
                                    showsButtons={false}
                                    dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                    activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                >
                                    <View style={styles.slide1}>
                                        <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/images/1.png')}
                                                style={{
                                                    width: '100%',
                                                    height: 120,
                                                    borderRadius: 10,
                                                }}
                                            />
                                            <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                                <View style={{ width: '50%', paddingRight: 3 }}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={require('../../../assets/images/2.png')}
                                                        style={{
                                                            width: '100%',
                                                            height: 90,
                                                            borderRadius: 10,
                                                        }}
                                                    />
                                                </View>
                                                <View style={{ width: '50%', paddingLeft: 3 }}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={require('../../../assets/images/3.png')}
                                                        style={{
                                                            width: '100%',
                                                            height: 90,
                                                            borderRadius: 10,
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Swiper>
                            </View>

                            {/* Flash Sale Content */}
                            <View style={{ marginTop: 30, flex: 0.45 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image
                                            resizeMode={'contain'}
                                            style={{ width: 50, height: 50, marginRight: 15 }}
                                            source={require('../../../assets/icon/flashsale.png')}
                                        />
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>สินค้าราคาพิเศษ</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignContent: 'flex-end',
                                            marginTop: 13
                                        }}
                                    >
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignRight]}>ดูสินค้าเพิ่มเติม {`>`} </Text>
                                    </View>
                                </View>
                                <Swiper
                                    ref='swiper'
                                    height='100%'
                                    showsButtons={false}
                                    dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                    activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                >
                                    <View style={styles.slide1}>
                                        {getBannerFlashSale.map((data, index) => {
                                            return (
                                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '25%', paddingHorizontal: 3 }}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={getBannerFlashSale[index].img_src}
                                                        style={{
                                                            width: '100%',
                                                            height: 80,
                                                            borderRadius: 10,
                                                        }}
                                                    />
                                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignCenter, MainStyles.mt10, MainStyles.mb5]}>{getBannerFlashSale[index].name}</Text>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text10, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>250 บาท</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </Swiper>
                            </View>
                        </View>
                    </View>

                    <View style={[MainStyles.m15]}>
                        {/* Best Sale Content */}
                        <View style={{ flex: 0.45 }}>
                            <View style={{ flexDirection: "row", marginBottom: 15, }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>สินค้าขายดีประจำสัปดาห์</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignContent: 'flex-end',
                                    }}
                                >
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignRight]}>ดูสินค้าเพิ่มเติม {`>`} </Text>
                                </View>
                            </View>
                            <Swiper
                                ref='swiper'
                                height='100%'
                                showsButtons={false}
                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                            >
                                <View style={styles.slide1}>
                                    {getBannerFlashSale.map((data, index) => {
                                        return (
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '33.3%', paddingHorizontal: 3 }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={getBannerFlashSale[index].img_src}
                                                    style={{
                                                        width: '100%',
                                                        height: 100,
                                                        borderRadius: 10,
                                                    }}
                                                />
                                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{getBannerFlashSale[index].name}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={require('../../../assets/icon/search.png')}
                                                            style={{
                                                                width: 10,
                                                                height: 10,
                                                            }}
                                                        />
                                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                                    </View>
                                                    <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>250 บาท</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </Swiper>
                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView >
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