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
export default class TouristAttractionDetail extends Component {

    render() {
        return (
            <SafeAreaView style={[ MainStyles.contentBG , MainStyles.px15]}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {/* Content */}
                    <View style={{ flex: 1 , marginTop: 15 }}>
                        <View style={{ flexDirection: "row" , marginTop: 15}}>
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingRight: 7 }}>
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
    
                            </View>
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
                        <View style={{ flexDirection: "column" , flex:1, marginTop: 15 }}>
                            <View style={{ flexDirection: "row"}}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ 
                                        width: '30%',
                                        backgroundColor: '#448165',
                                        borderRadius: 9,
                                        paddingVertical: 9,
                                        paddingHorizontal: 0,
                                        alignSelf: 'center', 
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>เปิดทำการ</Text>
                                </TouchableOpacity>
                                <View style={{ flex: 1 ,  alignContent: 'flex-end'}}>
                                    <Text allowFontScaling={false} style={[MainStyles.textBlue, MainStyles.Text14, MainStyles.textAlignRight, {marginTop:6}]}>(25 รีวิว)</Text>
                                </View>
                            </View>
                      
                            <View style={ [MainStyles.textBD , {marginVertical: 20}]}>
                                <View style={{ flex: 1 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignCenter , MainStyles.textGrayBd]}>ลำพูนผ้าไหมไทย ผ้าไหมยกดอก</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignCenter , MainStyles.textGrayLight]}>ลำพูน , อำเภอเมือง</Text>
                                </View>
                            </View>
                            
                            <Image
                                resizeMode={'cover'}
                                source={ {uri:'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u279.png?token=77a48855b2f1ffeffed1748361bada32f359388d3afea5bf516fe37c364711e7'} }
                                style={{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 10,
                                }}
                            />        

                            <View style={ [MainStyles.textBD , {marginVertical: 20}]}>
                                <View style={{ flex: 1 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignLeft , MainStyles.textGrayLight]}>259 หมู่ 4 บ้านขัวแคร่ ถนนไฮเวย์เชียงใหม่-ลำปาง ตำบลศรีบัวบาน อำเภอเมือง จังหวัดลำพูน</Text>
                                </View>
                                <View style={MainStyles.BorderBottomGrayWhite}></View>
                                <View style={{ flex: 1 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignLeft , MainStyles.textGreen]}>087-3043220 , 089-6351607</Text>
                                </View>
                                <View style={MainStyles.BorderBottomGrayWhite}></View>
                                <View style={{ flex: 1 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignLeft , MainStyles.textGreen]}>sale@lamphunthaisilk.com</Text>
                                </View>
                                <View style={MainStyles.BorderBottomGrayWhite}></View>
                                <View style={{ flex: 1 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignLeft , MainStyles.textGreen]}>http://www.lamphunthaisilk.com</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 50}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignLeft , MainStyles.textGreen]}>รายละเอียด</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight]}>ผ้าไทย ถือเป็นหัตถกรรมและหัตถศิลป์มรดกอันล้ำค่าของเมืองไทย มีความงดงามของเส้นไหมที่เป็นเอกลักษณ์ลวดลายที่บ่งบอกถึงความเป็นไทย ทำให้เป็นผ้าไหมไทยได้รับความนิยมและโด่งดังไปทั่วโลก ในอดีตผ้าไหมไทยถูกนำมาใช้ในหมู่สมาชิกของราชวงศ์ และข้าราชการเท่านั้น แต่ในยุคปัจจุบันผ้าไหมไทยก็เป็นที่นิยมในวงการแฟชั่น วงสังคมชั้นสูงและประชาชน ทั่วไป เช่นกัน ผ้าไหมไทยเป็นผ้าที่นิยมใช้ในชุดแต่งงาน, ชุดไทย, ชุดไทยออกงานสำหรับสวมใส่ ในงานปาร์ตี้ งานบุญ</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignLeft , MainStyles.textGreen]}>ลักษณะเด่น</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight]}>ศิลปะการทอผ้า การทอผ้า เป็นศิลปะอย่างหนึ่ง ที่คนไทยรุ่นปัจจุบันต้องช่วยกันอนุรักษ์ไว้ในสมัยก่อน ผู้หญิงไทยจะทำเครื่องใช้ต่างๆ ในบ้านเอง งานสำคัญอย่างหนึ่งคือการทำเสื้อผ้า ผ้านุ่ง ผ้าห่ม ไว้ใช้กันในครอบครัว ในพิธีกรรมต่างๆ เกี่ยวกับการเกิด การบวช การตาย การแต่งงาน ก็ต้องใช้ผ้า ผ้าทอจึงเป็นสิ่งจำเป็นสำหรับชีวิตคนไทย</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignLeft , MainStyles.textGreen]}>ข้อมูลแนะนำ</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray]}>กิจกรรม</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text14 , MainStyles.textAlignLeft , MainStyles.textGray]}>1 Day Workshop</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight]}>กลับคืนสู่ธรรมชาติ กับเครื่องนุ่งห่มที่ย้อมสีผ้าจากวัสดุธรรมชาติ ใช้วัสดุจากธรรมชาติซึ่งมีอยู่รอบๆ ตัว ใบไม้ กิ่งไม้ ผลไม้ ดอกไม้ ได้สีสันสวยเป็นธรรมชาติ และลวดลายที่ไม่ซ้ำใคร ออกแบบอย่างเป็นตัวเอง การย้อมผ้าเป็นศิลปะอย่างหนึ่งที่อยู่คู่กับเรามาอย่างยาวนานเป็นเรื่องพื้นฐานของทุกๆบ้าน เมื่อความเจริญมาถึงมนุษย์ก็ออกห่างจากกิจกรรมนี้ไปเรื่อยๆ การย้อมผ้าเป็น กิจกรรมที่สนุกและตื่นเต้นทุกขั้นตอน ที่จะได้แต่ละลวดลายและสีสันออกมา</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignLeft , MainStyles.textGreen ,MainStyles.mb20 ]}>จองเข้าร่วมกิจกรรม</Text>
                                    
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>วันและเวลาทำการ</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• ทุกวัน  08.00 น. - 17.00 น. </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20]}>• หมายเหตุ : หยุดทุกวันที่ 1 และ 16 ของเดือน</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>ราคาเข้าชม</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• ไม่มีค่าใช้จ่ายในการเข้าชมสถานที่ แต่จะมีค่าเข้าร่วมกิจกรรมย้อมผ้า 50 บาท /คน</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>สิ่งอำนวยความสะดวก</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• บริการรถรับส่งระยะไม่เกิน 2 กิโล</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20]}>• ร้ายขายอาหาร</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>สาธารณูปโภค</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• สัญญาณ wifi</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>การเดินทาง</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• รถยนต์</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20]}>• รถมอเตอร์ไซค์</Text>
                                </View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>หน่วยงานผู้รับผิดชอบ</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight , MainStyles.pl20 ]}>• อบจ. ลำพู</Text>
                                </View>
                                <View style={MainStyles.BorderBottomGrayWhite}></View>
                                <View style={{ flex: 1 , marginTop: 20}}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text20 , MainStyles.textAlignLeft , MainStyles.textGreen ,MainStyles.mb20 ]}>คำถามที่พบบ่อย</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text16 , MainStyles.textAlignLeft , MainStyles.textGray ]}>ได้รับรางวัลอะไรบ้าง ?</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.Text12 , MainStyles.textAlignLeft , MainStyles.textGrayLight ]}>ปี 2560 พระเจ้าหลานเธอ พระองค์เจ้าสิริภาจุฑาภรณ์ พระราชทานพระราชวโรกาสให้ พนักงานร้านลำพูนไทยซิลค์ และ เหล่าช่างทอผ้าไหมลำพูน เฝ้าทูลละอองธุลีพระบาทเป็นการส่วนพระองค์ ณ ที่ประทับกองบิน 41 จ. เชียงใหม่ ถวายรายงานเกี่ยวกับการทอผ้าไหมยกดอกลำพูน เหล่าข้าพระพุทธเจ้า สำนึกในพระมหากรุณาธิคุณ</Text>
                                </View>
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