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

import TopTabNavigator from '../../routes/TopTabNavigator';
import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
import Swiper from 'react-native-swiper'

export default class Product extends Component {

    state = {
        filterType: "",
        filterData: [],
        filterOpen: false,
        filterSelect: ""
    }

    onDetail() {
        this.props.navigation.navigate('ProductDetail')
    }

    onChangeFilter(type) {
        if (type === "type") {
            const isType = [
                { label: "ประเภท 1", value: "ประเภท 1" },
                { label: "ประเภท 2", value: "ประเภท 2" },
                { label: "ประเภท 3", value: "ประเภท 3" },
            ]
            this.setState({
                filterData: isType
            })
        } else if (type === "symbol") {
            const symbol = [
                { label: "symbol 1", value: "symbol 1" },
                { label: "symbol 2", value: "symbol 2" },
                { label: "symbol 3", value: "symbol 3" },
            ]
            this.setState({
                filterData: symbol
            })
        } else if (type === "review") {
            const review = [
                { label: "1 ดาว", value: "1 ดาว" },
                { label: "2 ดาว", value: "2 ดาว" },
                { label: "3 ดาว", value: "3 ดาว" },
            ]
            this.setState({
                filterData: review
            })
        } else if (type === "sort") {
            const sort = [
                { label: "ยอดนิยม", value: "ยอดนิยม" },
                { label: "ใหม่ล่าสุด", value: "ใหม่ล่าสุด" },
                { label: "ที่น่าสนใจ", value: "ที่น่าสนใจ" },
            ]
            this.setState({
                filterData: sort
            })
        }
        this.setState({
            filterOpen: true,
            filterType: type
        })
    }

    onCloseFilter() {
        this.setState({
            filterOpen: false,
            filterData: [],
            filterType: "",
        })
    }

    onSelectFilter(label) {
        this.setState({
            filterOpen: false,
            filterData: [],
            filterType: "",
            filterSelect: label,
        })
    }

    onBackToMain() {
        this.props.navigation.navigate('Home')
    }

    render() {
        const { filterData, filterOpen, filterType, filterSelect } = this.state
        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/image/25.png'), name: 'กระเช้าของขวัญ ไอริสขนมสำหรับเทศกาลปีใหม่', price: '890' },
            { id: 2, img_src: require('../../../assets/image/26.png'), name: 'กระเช้าของขวัญ ลีลาวดีรวมเครื่องดื่มสมุนไพรสุขภาพ', price: '1,890' },
            { id: 3, img_src: require('../../../assets/image/27.png'), name: "ผ้าคราม สิงห์ล้านนา'Singha Lanna'", price: '1,000' },
            { id: 4, img_src: require('../../../assets/image/28.png'), name: 'ชุดของขวัญ Premium fruitb ผลไม้สดคัดสรรอย่างดี', price: '1,299' },
            { id: 5, img_src: require('../../../assets/image/29.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์(ออร์แกนิค 100%)  200 กรัม', price: '25' },
            { id: 6, img_src: require('../../../assets/image/30.png'), name: 'น้ำผึ้งดอกลำไย และ ชาเขียวมะลิ Premium Gift Boxes', price: '250' },
        ]

        // Filter
        const filterCard = [];
        filterCard.push(
            filterData.map((data, index) => {
                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            backgroundColor: filterSelect === filterData[index].label ? '#448165' : '#fff',
                            borderWidth: 0.5,
                            borderColor: '#e4e4e4',
                            paddingVertical: 10,
                            paddingHorizontal: 18
                        }}
                        onPress={() => this.onSelectFilter(filterData[index].label)}
                    >
                        <Text allowFontScaling={false} style={[filterSelect === filterData[index].label ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text14]}>• {filterData[index].label}</Text>
                    </TouchableOpacity>
                )
            })
        )

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                    <View style={[MainStyles.contentBG]}>
                    </View>
                    {filterOpen ?
                        <View style={{ flexDirection: 'column', backgroundColor: 'white', zIndex: 999, position: 'absolute', left: 0, right: 0, top: 0, }}>
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
                            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 15 }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '20%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('type')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "type" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "type" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>ประเภท</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "type" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "type" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '35%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('review')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "review" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "review" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>ได้รับสัญลักษณ์</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "review" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "review" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '25%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('symbol')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "symbol" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "symbol" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>คะแนนรีวิว</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "symbol" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "symbol" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '20%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('sort')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "sort" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "sort" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>จัดเรียง</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "sort" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "sort" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {filterCard}
                        </View>
                        :
                        <View>
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
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 15 }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '20%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('type')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "type" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "type" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>ประเภท</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "type" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "type" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '35%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('review')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "review" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "review" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>ได้รับสัญลักษณ์</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "review" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "review" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '25%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('symbol')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "symbol" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "symbol" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>คะแนนรีวิว</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "symbol" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "symbol" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '20%', paddingHorizontal: 2 }}
                                    onPress={() => this.onChangeFilter('sort')}
                                >
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: filterType === "sort" ? '#448165' : '#f2f2f2' }}>
                                        <Text allowFontScaling={false} style={[filterType === "sort" ? MainStyles.textWhite : MainStyles.textGray, MainStyles.Text10, MainStyles.textAlignCenter]}>จัดเรียง</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcons name={filterType === "sort" ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={15} color={filterType === "sort" ? "#fff" : "#333"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    <View>
                        {filterOpen ?
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[{ opacity: 0.5, backgroundColor: '#333', zIndex: 999, height: '100%', position: 'absolute', left: 0, right: 0, top: 0, }]}
                                onPress={() => this.onCloseFilter()}
                            >
                            </TouchableOpacity>
                            : null
                        }
                        <View style={[MainStyles.m15, { backgroundColor: '#fff' }]}>
                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.mt15, MainStyles.Text16]}>สินค้าขายดีประจำสัปดาห์</Text>
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
                                                                    height: 180,
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
                    </View>


                </ScrollView >
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

