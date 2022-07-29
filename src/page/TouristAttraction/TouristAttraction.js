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

export default class TouristAttraction extends Component {
    onDetail(){
        this.props.navigation.navigate('TouristAttractionDetail')
    }
    render() {
        return (
            <SafeAreaView style={[ MainStyles.contentBG , MainStyles.px15]}>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <Search />

                    {/* Content Slide */}
                    <View style={{ flex: 1 , marginTop: 15  }}>
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
                                        source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29'} }
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                            <View style={styles.slide2}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29'} }
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                            <View style={styles.slide3}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%', paddingHorizontal: 3 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u96.png?token=c560ed132506669b6d36dbcb11ee863ff76bec093a570311103b404013ef5e29'} }
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้าลำพูนผ้าไหมไทย</Text>
                                </View>
                            </View>
                        </Swiper>
                    </View>
                    
                    {/* Content */}
                    <View style={{ flex: 1 , marginTop: 15 }}>
    
                        <View style={{ flexDirection: "row" , marginTop: 15}}>
                            <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={()=>this.onDetail()}
                                    style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingRight: 7 }}
                                >
                                
                                    <Image
                                        resizeMode={'cover'}
                                        source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u113.png?token=80f7ad62be395aa30055664998be1b4018ecd3c6388d92b8ebf5571c8c224d1e'} }
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>โหล่งฮิมคาว</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>โหล่งฮิมคาว' คือชุมชนงานคราฟต์ในอำเภอสันกำแพง จังหวัดเชียงใหม่</Text>
                                    <View style={ [MainStyles.textBD ]}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt15]}>เชียงใหม่</Text>
                                            </View>
                                            <View style={{flex: 1, alignContent: 'flex-end', marginTop: 13 }} >
                                                <Text allowFontScaling={false} style={[MainStyles.textAlignRight]}>5</Text>
                                            </View>
                                        </View>
                                    </View>

                                  
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingLeft: 7 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u102.png?token=7ce9bf978c1c340e495df21120be9289715fddbccd0c431637d5d9f05e1e1b26'} }
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>เก็บชาเขียวหอมกรุ่น</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ชาอู่หลงยอดน้ำค้าง คือชาที่เก็บเฉพาะช่วงฤดูหนาวที่มีน้ำค้างลง</Text>
                                <View style={ [MainStyles.textBD]}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt15]}>เชียงราย</Text>
                                        </View>
                                        <View style={{flex: 1, alignContent: 'flex-end', marginTop: 13 }} >
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]}>5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" , marginTop: 15}}>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingRight: 7 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u101.png?token=09248a6cf9ea1bf538848901f87aa2a44ed5baf95bd9a18e60567b72d29ba6fb'} }
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>บ้านหัตถกรรมไม้แกะสลัก</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>บ้านถวาย ถือว่าเป็นแหล่งท่องเที่ยวทางวัฒนธรรมที่ขึ้นชื่อที่สุดแห่งหนึ่ง</Text>
                                <View style={ [MainStyles.textBD ]}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt15]}>เชียงใหม่</Text>
                                        </View>
                                        <View style={{flex: 1, alignContent: 'flex-end', marginTop: 13 }} >
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]}>5</Text>
                                        </View>
                                    </View>
                                </View>
        
                            </View>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingLeft: 7 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u119.png?token=c0c935979be66dd728f43563a47f374cec504821551f4a39f0a715f506246a5f'} }
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.textAlignLeft, MainStyles.mt5, MainStyles.mb5 , MainStyles.Text16 ]}>ครามสกล</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft, MainStyles.textCenterContent]}>ถ้าพูกถึงครามต้องนึกถึง ครามสกลซึ่งเป็นจุดจำหน่ายผลิตภัณฑ์ฝ้ายย้อม</Text>
                                <View style={ [MainStyles.textBD ]}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt15]}>สกลนคร</Text>
                                        </View>
                                        <View style={{flex: 1, alignContent: 'flex-end', marginTop: 13 }} >
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]}>5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" , marginVertical: 30 ,  alignSelf: 'center'}}>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%'}}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: '70%',
                                    backgroundColor: '#2eb16d',
                                    borderRadius: 9,
                                    paddingVertical: 9,
                                    alignSelf: 'center', }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>โหลดเพิ่มเติม</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    }
});