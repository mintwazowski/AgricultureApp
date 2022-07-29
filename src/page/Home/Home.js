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
            <SafeAreaView style={[MainStyles.contentBG]}>
                <View style={[MainStyles.content]}>

                    {/* Search Content */}
                    <Search />


                    {/* Flash Sale Content */}
                    <View>
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
                        <View style={{ flex: 1 }}>
                            <Swiper
                                style={styles.wrapper}
                                showsButtons={true}
                                height='100%'
                            >
                                <View style={styles.slide1}>
                                    <Image
                                        resizeMode={'contain'}
                                        style={{ width: 50, height: 50, marginRight: 15 }}
                                        source={require('../../../assets/images/4.png')}
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Text style={styles.text}>Beautiful</Text>
                                </View>
                                <View style={styles.slide3}>
                                    <Text style={styles.text}>And simple</Text>
                                </View>
                            </Swiper>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
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

    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});