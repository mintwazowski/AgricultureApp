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

export default class TouristAttraction extends Component {
    onDetail() {
        this.props.navigation.navigate('TouristAttractionDetail')
    }

    onLocation() {
        this.props.navigation.navigate('SourceOfProduct')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 , paddingHorizontal :15 , marginTop:10}}>
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
                            dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                            activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: 0 }} />}
                        >
                            <View style={styles.slide1}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29' }}
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                            <View style={styles.slide2}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29' }}
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                            <View style={styles.slide3}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29' }}
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                        </Swiper>
                    </View>

                    {/* Content */}
                    <View style={{ flex: 1, marginTop: 15 }}>

                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this.onDetail()}
                                style={{ flexDirection: 'column', alignContent: 'center', width: '50%'}}
                            >

                                <Image
                                    resizeMode={'cover'}
                                    source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u113.png?token=80f7ad62be395aa30055664998be1b4018ecd3c6388d92b8ebf5571c8c224d1e' }}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>โหล่งฮิมคาว</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>โหล่งฮิมคาว คือชุมชนงานคราฟต์ในอำเภอสันกำแพง จังหวัดเชียงใหม่</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>เชียงใหม่</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-end' , paddingEnd:15}] } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>


                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingLeft: 7 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u102.png?token=7ce9bf978c1c340e495df21120be9289715fddbccd0c431637d5d9f05e1e1b26' }}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>เก็บชาเขียวหอมกรุ่น</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ชาอู่หลงยอดน้ำค้าง คือชาที่เก็บเฉพาะช่วงฤดูหนาวที่มีน้ำค้างลง</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>เชียงราย</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%' }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u101.png?token=09248a6cf9ea1bf538848901f87aa2a44ed5baf95bd9a18e60567b72d29ba6fb' }}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>บ้านหัตถกรรมไม้แกะสลัก</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>บ้านถวาย ถือว่าเป็นแหล่งท่องเที่ยวทางวัฒนธรรมที่ขึ้นชื่อที่สุดแห่งหนึ่ง</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>เชียงใหม่</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingLeft: 7 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u119.png?token=c0c935979be66dd728f43563a47f374cec504821551f4a39f0a715f506246a5f' }}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Icon name='heart-o' size={20} style={ [styles.heartIcon , {paddingHorizontal:8 }]} />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5, MainStyles.Text16]}>ครามสกล</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ถ้าพูกถึงครามต้องนึกถึง ครามสกลซึ่งเป็นจุดจำหน่ายผลิตภัณฑ์ฝ้ายย้อม</Text>
                                <View style={[MainStyles.textBD]}>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>สกลนคร</Text>
                                        </View>
                                        
                                        <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
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