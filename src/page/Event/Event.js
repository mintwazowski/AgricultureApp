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

import MainStyles from '../../styles/MainStyles';
import Search from '../Search/Search'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
import TopTabNavigator from '../../routes/TopTabNavigator';

export default class Event extends Component {
    onDetail() {
        this.props.navigation.navigate('EventDetail')
    }

    onLocation() {
        // this.props.navigation.navigate('SourceOfProduct')
    }

    render() {
        // Banner
        const Banner = [];
        for (let i = 0; i < 3; i++) {
            Banner.push(
                <TouchableOpacity
                    onPress={() => this.onDetail()}
                    activeOpacity={1}
                >
                    <View style={styles.slide1} >
                        <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                            <Image
                                resizeMode={'cover'}
                                source={require('../../../assets/image/38.png')}
                                style={{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 10,
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignCenter, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ตลาดสวนผักคนเมือง</Text>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/u99.png')}
                                    style={{
                                        width: 55,
                                        height: 25,
                                        marginLeft:15,
                                        padding:0,
                                        marginTop:7
                                    }}
                                />
                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Hot]}>HOT</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 , paddingHorizontal :5 , marginTop:10}}>
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
                        <View style={{ width: '70%' }}>
                            <Search />
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', width: '15%', marginLeft: 5 }}>
                            <TouchableOpacity
                                onPress={() => this.onLocation()}
                            >
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/icon/pin.png')}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        alignSelf: 'center'
                                    }}
                                    
                                />
                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text10]} >ค้นหารอบตัว</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Content Slide */}
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <Swiper
                            height={'100%'}
                            showsButtons={false}
                            dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -50 }} />}
                            activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -50 }} />}
                        >
                            {Banner}
                        </Swiper>
                    </View>

                    {/* Content */}
                    <View style={{ flex: 1, marginTop: 15 }}>

                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this.onDetail()}
                                style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingHorizontal:5}}
                            >

                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/39.png')}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ตลาดปันอยู่ปันกิน</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>ตลาดเล็กๆ แต่อบอุ่นเป็นกันเอง บรรยากาศแบบสวนในเมือง</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>กรุงเทพ</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-end' , paddingEnd:15}] } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this.onDetail()}
                                style={{ flexDirection: 'column', alignContent: 'center', width: '50%' , paddingHorizontal:5}}
                            >
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/40.png')}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ตลาดร่มหุบ</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ตลาดร่มหุบ เริ่มมีการตั้งขายของบริเวณทางรถไฟนี้ มาตั้งแต่ประมาณปี 2527</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>สมุทรสงคราม</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                           
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this.onDetail()}
                                    style={{ flexDirection: 'column', alignContent: 'center', width: '50%' , paddingHorizontal:5}}
                                >
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/41.png')}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ตลาดถนนคนเดินปากแพรก</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>บริเวณชุมชนปากแพรกและถนนสายปากแพรก จะมีการจัดกิจกรรมถนนคนเดิน</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>กาญจนบุรี</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this.onDetail()}
                                style={{ flexDirection: 'column', alignContent: 'center', width: '50%' , paddingHorizontal:5}}
                            >
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/42.png')}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon , {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ตลาดใต้เคี่ยม</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ตลาดแนวพักผ่อนเชิงธรรมชาติ เพื่อให้นักท่องเที่ยวจะได้มาพักผ่อนกับเพื่อนฝูง</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>ชุมพร</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginVertical: 30, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        width: '70%',
                                        backgroundColor: '#2eb16d',
                                        borderRadius: 9,
                                        paddingVertical: 9,
                                        alignSelf: 'center',
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>โหลดเพิ่มเติม</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    slide3: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    heartIcon : {
        position : 'absolute' , right:5, top: 5 , color:'white'
    },
});