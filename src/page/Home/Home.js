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
    ScrollView,
    Modal
} from 'react-native';

import TopTabNavigator from '../../routes/TopTabNavigator';

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';

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

        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/images/4.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '250' },
            { id: 2, img_src: require('../../../assets/images/5.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
            { id: 3, img_src: require('../../../assets/images/6.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ออร์แกนิค', price: '25' },
            { id: 4, img_src: require('../../../assets/images/7.png'), name: 'น้ำมันเมล็ดชา Camellia Oleifera', price: '250' },
            { id: 5, img_src: require('../../../assets/images/8.png'), name: 'ส้มมะปี๊ด เปรี้ยว หวานอมส้ม จันทบุรั', price: '49' },
        ]
        const getProduct = [
            { id: 1, img_src: require('../../../assets/images/11.png'), name: 'พืชผัก ผลไม้' },
            { id: 2, img_src: require('../../../assets/images/12.png'), name: 'อาหาร เครื่องดื่ม' },
            { id: 3, img_src: require('../../../assets/images/13.png'), name: 'ยา อาหารเสริม' },
            { id: 4, img_src: require('../../../assets/images/14.png'), name: 'เครื่องสำอาง' },
            { id: 5, img_src: require('../../../assets/images/15.png'), name: 'ต้นไม้ ไม้ประดับ' },
            { id: 6, img_src: require('../../../assets/images/16.png'), name: 'เครื่องแต่งกาย' },
            { id: 7, img_src: require('../../../assets/images/17.png'), name: 'ของฝากที่ระลึก' },
            { id: 8, img_src: require('../../../assets/images/18.png'), name: 'สมุนไพร' },
        ]

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'white', paddingBottom: 15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

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
                                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.mt10, MainStyles.mb5, styles.getFree]}>ซื้อ 1 แถม 1</Text>

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

                    {/* Best Sale Content */}
                    <View style={[MainStyles.m15]}>
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
                                            <View style={{ backgroundColor: '#fff', flexDirection: 'column', alignContent: 'center', width: '33%', marginRight: 3, marginLeft: 3 }}>
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
                                                            <Icon name='star' size={15} style={{ marginRight: 5 }} color="#e9b266" />
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                                        </View>
                                                        <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>250 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </Swiper>
                        </View>

                    </View>

                    {/* Product Content */}
                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter, MainStyles.textCenterContent, MainStyles.Text16]}>เลือกชมสินค้าเกษตรคุณภาพ</Text>

                                <View
                                    style={{
                                        width: '100%',
                                        marginTop: 15,
                                        flex: 1,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    {getProduct.map((data, index) => {
                                        return (
                                            <View style={{ width: '25%' }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={getProduct[index].img_src}
                                                    style={{
                                                        width: 70,
                                                        height: 70,
                                                        borderRadius: 50,
                                                        alignSelf: 'center'
                                                    }}
                                                />
                                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignCenter, MainStyles.mt10, MainStyles.mb5]}>{getProduct[index].name}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Product season Content */}
                    <View style={[MainStyles.m15]}>
                        <View style={{ flex: 0.45 }}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>สินค้าสั่งจอง / จำหน่ายตามฤดูกาล</Text>
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
                            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                                <View
                                    style={{
                                        width: '40%',
                                        backgroundColor: '#448165',
                                        borderRadius: 5,
                                        paddingVertical: 9,
                                        paddingHorizontal: 9,
                                        alignSelf: 'center',
                                        marginRight: 5
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnBlueWhiteText}>สินค้าสั่งจองล่วงหน้า </Text>
                                </View>
                                <View
                                    style={{
                                        width: '40%',
                                        backgroundColor: 'rgba(215, 215, 215, 1)',
                                        borderRadius: 5,
                                        paddingVertical: 9,
                                        paddingHorizontal: 9,
                                        alignSelf: 'center',
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnBlueWhiteTextDark}>สินค้าสั่งจองล่วงหน้า </Text>
                                </View>
                            </View>
                            <Swiper
                                height='100%'
                                showsButtons={false}
                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                            >
                                <View style={styles.slide1}>
                                    {getBannerFlashSale.map((data, index) => {
                                        return (
                                            <View style={{ backgroundColor: '#fff', flexDirection: 'column', alignContent: 'center', width: '49%', marginRight: 3, marginLeft: 3 }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={getBannerFlashSale[index].img_src}
                                                    style={{
                                                        width: '100%',
                                                        height: 100,
                                                    }}
                                                />
                                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.mt10, MainStyles.mb5, styles.advance]}>จองล่วงหน้า</Text>

                                                <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{getBannerFlashSale[index].name}</Text>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Icon name='star' size={15} style={{ marginRight: 5 }} color="#e9b266" />
                                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                                        </View>
                                                        <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>250 บาท</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </Swiper>
                        </View>

                    </View>

                    {/* Product Recommend Content */}
                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>สินค้าแนะนำ สำหรับคุณ</Text>
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
                                                <View
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        alignContent: 'center',
                                                        width: '48%',
                                                        marginLeft: '1%',
                                                        marginRight: '1%',
                                                        marginBottom: '2%',
                                                    }}
                                                >
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
                                                                    <Icon name='star' size={15} style={{ marginRight: 5 }} color="#e9b266" />
                                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                                                </View>
                                                                <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>250 บาท</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                            </Swiper>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[MainStyles.btnLoadMore]}
                            >
                                <Text allowFontScaling={false} style={MainStyles.btnLoadMoreText}>โหลดเพิ่มเติม</Text>
                            </TouchableOpacity>
                        </View>
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

    },
    getFree: {
        backgroundColor: '#ffd60c', position: 'absolute', left: 3, top: -10, paddingHorizontal: 7
    },
    advance: {
        backgroundColor: '#448165', position: 'absolute', left: 0, top: -10, padding: 10, color: 'white'
    },
});