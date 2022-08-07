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

        const geBestSale = [
            { id: 1, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1831.png?token=9814525f36af07037dbf74d929b153e331d2e08ff7b0c4946724ff73aef71e58' , name: 'กระเช้าของขวัญ ไอริสขนมสำหรับเทศกาลปีใหม่', price: '890' },
            { id: 2, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1846.png?token=9909ae3ce84cf79cf69fd951122a90338f2ac1a0eb089b0da636501507344140' , name: 'กระเช้าของขวัญ ลีลาวดีรวมเครื่องดื่มสมุนไพร', price: '1,890' },
            { id: 3, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1845.png?token=a940ca51a39fb82ee7619d377a8cff7fec6159db9f3bcea4519ddbfcfbcde930' , name: 'ชุดของขวัญ Premium fruit ผลไม้สดคัดสรรอย่างดี', price: '1,299' },
        ]

        const getProductSeason = [
            { id: 1, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1875.png?token=a5deb50a44b5e3dd56a32b02e633d81db66838e420a42a829e8b0574ecf59b13' , name: 'ส้มโอทับทิมสยาม ลุ่มน้ำปากพนัง' , getproduct : '(รับสินค้าเดือน ตุลาคม)', price: '180' },
            { id: 2, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1880.png?token=89e8d4b168ceee25ace8856af8e820884e4ded41e27a08a9910f136f3825c833' , name: 'ทุเรียนนนท์ ของดีจังหวัดนนทบุรี' , getproduct : '(รับสินค้าเดือน พฤษภาคม)', price: '5,000' },

        ]

        const getProductRecommend = [
            { id: 1, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1904.png?token=5bdcf9425b399030dd7bf6aba7fe8318ff5d0a479e13883fa7d1b2dc8cd8cd7d' , name: 'ผ้่าห่มงานฝีมือ สกลนคร' ,  price: '599' },
            { id: 2, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1919.png?token=ede0d1c8c00123a30b06ba488d98dde7776f1f3152f53281c60a67d5b1b1cad3' , name: 'น้ำมันมะพร้าวบริสุทธิ์สกัดเย็น' , price: '590' },
            { id: 3, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1908.png?token=5195b9f900ac52efd4f241ed352078bead54a5c9201bdd78427c58a9639c2e6f' , name: 'น้ำส้มมะปิ๊ดเปรี้ยว หวานอมส้ม' , price: '59' },
            { id: 4, img_src: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u1918.png?token=07298c75a8c14755b715c2b89b8dfc1a9402933241fcaf07d13043fa0a7c4be1' , name: 'ผ้าพันคอมัดย้อมคราม' , price: '340' },

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

        // Banner
        const Banner = [];
        for(let i = 0; i < 3; i++){
            Banner.push(
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
            )
        }
        
        // FlashSale
        const FlashSale = [];
        for(let i = 0; i < 3; i++){
            FlashSale.push(
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
            )
        }

        // BestSale
        const BestSale = [];
        for(let i = 0; i < 3; i++){
            BestSale.push(
                <View style={styles.slide1}>
                    {geBestSale.map((data, index) => {
                        return (
                            <View style={{ backgroundColor: '#fff', flexDirection: 'column', alignContent: 'center', width: '33%', marginRight: 3, marginLeft: 3 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{  uri: geBestSale[index].img_src }}
                                    style={{
                                        width: '100%',
                                        height: 100,
                                    }}
                                />
                                <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{geBestSale[index].name}</Text>
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
            )
        }

        // ProductSeason
        const ProductSeason = [];
        for(let i = 0; i < 3; i++){
            ProductSeason.push(
                <View style={styles.slide1}>
                    {getProductSeason.map((data, index) => {
                        return (
                            <View style={{ backgroundColor: '#fff', flexDirection: 'column', alignContent: 'center', width: '49%', marginRight: 3, marginLeft: 3 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{  uri: getProductSeason[index].img_src }}
                                    style={{
                                        width: '100%',
                                        height: 100,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.mt10, MainStyles.mb5, styles.advance]}>จองล่วงหน้า</Text>

                                <View style={{ paddingHorizontal: 5, paddingBottom: 5 }}>
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{getProductSeason[index].name}</Text>
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.mb5]}>{getProductSeason[index].getproduct}</Text>
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
            )
        }

        // ProductRecommend
        const ProductRecommend = [];
        ProductRecommend.push(
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
                    {getProductRecommend.map((data, index) => {
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
                                        source={{ uri : getProductRecommend[index].img_src }}
                                        style={{
                                            width: '100%',
                                            height: 100,
                                        }}
                                    />
                                    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                        <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.mt10, MainStyles.mb5]}>{getProductRecommend[index].name}</Text>
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
        )
        

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
                                    dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                    activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                >
                                    {Banner}
                                </Swiper>
                            </View>

                            {/* Flash Sale Content */}
                            <View style={{ marginTop: 30 , marginBottom: 10, flex: 0.45 }}>
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
                                    dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -60 }} />}
                                    activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -60 }} />}
                                >
                                    {FlashSale}
                                </Swiper>
                            </View>
                        </View>
                    </View>

                    {/* Best Sale Content */}
                    <View style={[MainStyles.m15 , { marginBottom: 30}]}>
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
                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                            >
                                {BestSale}
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
                    <View style={[MainStyles.m15 , { marginBottom: 30}]}>
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
                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                            >
                               {ProductSeason}
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
                                {ProductRecommend}
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