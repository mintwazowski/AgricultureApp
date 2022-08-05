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
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

import { Rating } from 'react-native-ratings';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
export default class TouristAttractionEvent extends Component {
    onEventAndLocation() {
        this.props.navigation.navigate('TouristAttractionEvent')
    }

    constructor(props) {
        super(props);
        this.tog = this.tog.bind(this);
    
        this.state = {
            col: 0,
    
            cards: [
                {
                id:1,
                title: "ได้รับรางวัลอะไรบ้าง ?",
                sub_title: "ปี 2560 พระเจ้าหลานเธอ พระองค์เจ้าสิริภาจุฑาภรณ์ พระราชทานพระราชวโรกาสให้ พนักงานร้านลำพูนไทยซิลค์ และ เหล่าช่างทอผ้าไหมลำพูน เฝ้าทูลละอองธุลีพระบาทเป็นการส่วนพระองค์ ณ ที่ประทับกองบิน 41 จ. เชียงใหม่ ถวายรายงานเกี่ยวกับการทอผ้าไหมยกดอกลำพูน เหล่าข้าพระพุทธเจ้า สำนึกในพระมหากรุณาธิคุณ",
                },
                {
                id:2,
                title: "ราคาอยู่ที่ผืนละเท่าไหร่ ?",
                sub_title: "xxxxxxxxxxxxxx",
                },
                {
                id:3,
                title: "ใช้เวลาท่องเที่ยวได้นานแค่ไหน ?",
                sub_title: "aaaaaaaaaaaa",
                },
                {
                id:4,
                title: "สามารถลองทอผ้าไหมได้หรอไหม ?",
                sub_title: "bbbbbbbbbbb",
                },
                {
                id:5,
                title: "มีการท่องเที่ยวแบบไหนบ้าง ?",
                sub_title: "ccccccccccc",
                },
            ]
        };
    }
  
    tog(e) {
        let event = e.target.dataset.event;
        this.setState({
            col: this.state.col === Number(event) ? 0 : Number(event)
        });
    }

    render() {

        const { col, cards } = this.state;

        const getFavProduct = [
            { id: 1, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 2, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 3, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 4 },
            { id: 4, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 5, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 3 },
            { id: 6, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
        ]

        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title' , province: 'province' },
            { id: 2, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title' , province: 'province' },
            { id: 3, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title' , province: 'province' },
            { id: 4, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title' , province: 'province' },
            { id: 5, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title' , province: 'province' },
        ]

        var getFavProductCard = []
        getFavProduct.map((key, index) => {
            getFavProductCard.push(
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        width: '30%',
                        paddingRight: 15,
                    }}
                >
                    <View style={{
                        width: '100%',
                        height: 200,
                        paddingBottom: 10,
                        paddingTop: 5,
                    }}>
                        <ImageBackground
                            source={getFavProduct[index].img_src}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 6 }}
                        >
                        </ImageBackground>
                    </View>
                    <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textGray]} numberOfLines={1} ellipsizeMode="tail">
                        {getFavProduct[index].name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={15} style={{ marginRight: 5 }} color="#e9b266" />
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textEndContent]}>5</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-end" }}>
                            <FontAwesome5 name='shopping-cart' size={15} style={[ MainStyles.textGrayLight , { marginRight: 5 , alignSelf: 'flex-end' }]}  />

                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (

            <SafeAreaView style={[MainStyles.contentBG]}>
                <View style={[MainStyles.contentBG, MainStyles.mx15]}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* Content */}
                        <View style={{ flex: 1, marginTop: 15 }}>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%', paddingRight: 7 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u113.png?token=80f7ad62be395aa30055664998be1b4018ecd3c6388d92b8ebf5571c8c224d1e' }}
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            borderRadius: 10,
                                        }}
                                    />
                                    

                                </View>
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
                                
                                </View>
                            </View>
                            
                            <View style={{ flexDirection: "column", flex: 1, marginTop: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnProductDetailGreenRadius , {paddingVertical:10 }]}
                                    >
                                        <Fontisto name='clock' size={18} color="#fff" style={{ paddingHorizontal:6 , alignSelf:'center' }} />
                                        <Text allowFontScaling={false} style={MainStyles.btnProductDetailYellowText}>เปิดทำการ</Text>
                                
                                    </TouchableOpacity>

                                    <View style={{ flex: 1, alignContent: 'flex-end' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textBlue, MainStyles.Text14, MainStyles.textAlignRight, { marginTop: 6 }]}>(25 รีวิว)
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                imageSize={16}
                                                style={{ paddingHorizontal:10 , alignSelf:'center'}}
                                            />
                                        </Text>
                                    </View>
                                </View>

                                <View style={[MainStyles.textBD, { marginVertical: 20 }]}>
                                    <View style={{ flex: 1 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text22, MainStyles.textAlignCenter, MainStyles.textGrayBd]}>ลำพูนผ้าไหมไทย ผ้าไหมยกดอก</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignCenter, MainStyles.textGrayLight]}>ลำพูน , อำเภอเมือง</Text>
                                    </View>
                                </View>

                                <Image
                                    resizeMode={'cover'}
                                    source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/F0DBRW/a8/56/7c/a8567c272666474f8e09bbe37f087f89/images/mobileapp-front/u279.png?token=77a48855b2f1ffeffed1748361bada32f359388d3afea5bf516fe37c364711e7' }}
                                    style={{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 10,
                                    }}
                                />

                                <View style={[MainStyles.textBD, { marginVertical: 20 }]}>
                                    <View style={{ flex: 1 , flexDirection: "row"}}>
                                        <Fontisto name='map-marker-alt' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>259 หมู่ 4 บ้านขัวแคร่ ถนนไฮเวย์เชียงใหม่-ลำปาง ตำบลศรีบัวบาน อำเภอเมือง จังหวัดลำพูน</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1 , flexDirection: "row"}}>
                                        <FontAwesome5 name='phone-alt' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>087-3043220 , 089-6351607</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1 , flexDirection: "row"}}>
                                        <Fontisto name='email' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>sale@lamphunthaisilk.com</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1 , flexDirection: "row"}}>
                                        <FontAwesome5 name='globe-asia' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>http://www.lamphunthaisilk.com</Text>
                                    </View>
                                    <View style={{ flex: 1 , marginTop: 50 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>รายละเอียด</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>ผ้าไทย ถือเป็นหัตถกรรมและหัตถศิลป์มรดกอันล้ำค่าของเมืองไทย มีความงดงามของเส้นไหมที่เป็นเอกลักษณ์ลวดลายที่บ่งบอกถึงความเป็นไทย ทำให้เป็นผ้าไหมไทยได้รับความนิยมและโด่งดังไปทั่วโลก ในอดีตผ้าไหมไทยถูกนำมาใช้ในหมู่สมาชิกของราชวงศ์ และข้าราชการเท่านั้น แต่ในยุคปัจจุบันผ้าไหมไทยก็เป็นที่นิยมในวงการแฟชั่น วงสังคมชั้นสูงและประชาชน ทั่วไป เช่นกัน ผ้าไหมไทยเป็นผ้าที่นิยมใช้ในชุดแต่งงาน, ชุดไทย, ชุดไทยออกงานสำหรับสวมใส่ ในงานปาร์ตี้ งานบุญ</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>ลักษณะเด่น</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>ศิลปะการทอผ้า การทอผ้า เป็นศิลปะอย่างหนึ่ง ที่คนไทยรุ่นปัจจุบันต้องช่วยกันอนุรักษ์ไว้ในสมัยก่อน ผู้หญิงไทยจะทำเครื่องใช้ต่างๆ ในบ้านเอง งานสำคัญอย่างหนึ่งคือการทำเสื้อผ้า ผ้านุ่ง ผ้าห่ม ไว้ใช้กันในครอบครัว ในพิธีกรรมต่างๆ เกี่ยวกับการเกิด การบวช การตาย การแต่งงาน ก็ต้องใช้ผ้า ผ้าทอจึงเป็นสิ่งจำเป็นสำหรับชีวิตคนไทย</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>ข้อมูลแนะนำ</Text>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome5 name='handshake' size={22} style={{ paddingEnd:10, alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>กิจกรรม</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGray]}>1 Day Workshop</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>กลับคืนสู่ธรรมชาติ กับเครื่องนุ่งห่มที่ย้อมสีผ้าจากวัสดุธรรมชาติ ใช้วัสดุจากธรรมชาติซึ่งมีอยู่รอบๆ ตัว ใบไม้ กิ่งไม้ ผลไม้ ดอกไม้ ได้สีสันสวยเป็นธรรมชาติ และลวดลายที่ไม่ซ้ำใคร ออกแบบอย่างเป็นตัวเอง การย้อมผ้าเป็นศิลปะอย่างหนึ่งที่อยู่คู่กับเรามาอย่างยาวนานเป็นเรื่องพื้นฐานของทุกๆบ้าน เมื่อความเจริญมาถึงมนุษย์ก็ออกห่างจากกิจกรรมนี้ไปเรื่อยๆ การย้อมผ้าเป็น กิจกรรมที่สนุกและตื่นเต้นทุกขั้นตอน ที่จะได้แต่ละลวดลายและสีสันออกมา</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen, MainStyles.mb20]}>จองเข้าร่วมกิจกรรม</Text>

                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <Fontisto name='clock' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>วันและเวลาทำการ</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• ทุกวัน  08.00 น. - 17.00 น. </Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• หมายเหตุ : หยุดทุกวันที่ 1 และ 16 ของเดือน</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome5 name='money-bill' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>ราคาเข้าชม</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• ไม่มีค่าใช้จ่ายในการเข้าชมสถานที่ แต่จะมีค่าเข้าร่วมกิจกรรมย้อมผ้า 50 บาท /คน</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome5 name='star' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>สิ่งอำนวยความสะดวก</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• บริการรถรับส่งระยะไม่เกิน 2 กิโล</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• ร้ายขายอาหาร</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome5 name='wifi' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>สาธารณูปโภค</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• สัญญาณ wifi</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome5 name='car-alt' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>การเดินทาง</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• รถยนต์</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• รถมอเตอร์ไซค์</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <View style={{ flex: 1 , flexDirection: "row" , paddingVertical:10 }}>
                                            <FontAwesome name='group' size={18} style={{ paddingEnd:10 , alignSelf:'center' }} />
                                            <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>หน่วยงานผู้รับผิดชอบ</Text>
                                        </View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight, MainStyles.pl20]}>• อบจ. ลำพู</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>คำถามที่พบบ่อย</Text>
                                        <View>
                                            {cards.map((element, index) => {
                                                return (
                                                    <View>
                                                        <Collapse style={[MainStyles.my10]}>
                                                            <CollapseHeader>
                                                            <View>
                                                                <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGray]}>{element.title}</Text>
                                                            </View>
                                                            </CollapseHeader>
                                                            <CollapseBody>
                                                            <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>{element.sub_title}</Text>
                                                            </CollapseBody>
                                                        </Collapse>                                        
                                                    </View>
                                                );
                                            })}
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 20 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>สินค้าแนะนำ</Text>
                                        
                                        <View style={{ flexDirection: 'row' }}>
                                            <ScrollView style={[{ flex: 1, marginTop: 10 }]} horizontal showsHorizontalScrollIndicator={false}>
                                                {getFavProductCard}
                                            </ScrollView>
                                        </View>
                                        <View style={MainStyles.BorderBottomGrayWhite}></View>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>คะแนนรีวิวแหล่งท่องเที่ยว</Text>
                                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreenBd, MainStyles.Text26]}>
                                                4.5
                                            </Text>
                                            <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                                                <Rating
                                                    type='star'
                                                    ratingCount={5}
                                                    imageSize={15}
                                                    isDisabled={true}
                                                />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                                <View style={{ width: '35%' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                    ความพร้อมสถานที่
                                                    </Text>
                                                </View>
                                                <View style={{ width: '45%', justifyContent: 'center' }}>
                                                    <Progress.Bar
                                                        progress={0.8}
                                                        borderWidth={0}
                                                        color='#448165'
                                                        unfilledColor='#rgba(228, 228, 228, 1)'
                                                    />
                                                </View>
                                                <View style={{ width: '30%', justifyContent: 'center' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                                        4.8
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                                <View style={{ width: '35%' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                    ความคุ้มค่า
                                                    </Text>
                                                </View>
                                                <View style={{ width: '45%', justifyContent: 'center' }}>
                                                    <Progress.Bar
                                                        progress={0.8}
                                                        borderWidth={0}
                                                        color='#448165'
                                                        unfilledColor='#rgba(228, 228, 228, 1)'
                                                    />
                                                </View>
                                                <View style={{ width: '30%', justifyContent: 'center' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                                        4.8
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                                <View style={{ width: '35%' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                        การให้บริการ
                                                    </Text>
                                                </View>
                                                <View style={{ width: '45%', justifyContent: 'center' }}>
                                                    <Progress.Bar
                                                        progress={0.8}
                                                        borderWidth={0}
                                                        color='#448165'
                                                        unfilledColor='#rgba(228, 228, 228, 1)'
                                                    />
                                                </View>
                                                <View style={{ width: '30%', justifyContent: 'center' }}>
                                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                                        4.8
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'column'}}>
                                            <View style={{ flexDirection: 'row' , marginTop:20 }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 99,
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'column', marginLeft: 10, alignItems: 'flex-start' }}>
                                                    <Text style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>ย้อมผ้าสนุกมากเลยครับ</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                                        <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGray]}>name</Text> 
                                                        <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>dd/mm/yyyy</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row',  marginTop:8}}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: 120,
                                                        height: 60,
                                                        borderRadius: 9,
                                                        marginHorizontal :5,
                                                    }}
                                                />
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: 120,
                                                        height: 60,
                                                        marginHorizontal :5,
                                                        borderRadius: 9,
                                                    }}
                                                />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' , marginTop:20 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 99,
                                                }}
                                            />
                                            <View style={{ flexDirection: 'column', marginLeft: 10, alignItems: 'flex-start' }}>
                                                <Text style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>ย้อมผ้าสนุกมากเลยครับ</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                                    <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGray]}>name</Text> 
                                                    <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>dd/mm/yyyy</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", marginVertical: 30, alignSelf: 'center' }}>
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%' }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={{
                                                        width: '70%',
                                                        backgroundColor: '#448165',
                                                        borderRadius: 9,
                                                        paddingVertical: 9,
                                                        alignSelf: 'center',
                                                        alignContent:'center'
                                                    }}
                                                >
                                                    <View style={{flex: 1 , justifyContent:'flex-end', flexDirection: "row", paddingEnd:15} } >
                                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>ดูรีวิวเพิ่มเติม</Text>
                                                        <Icon name='arrowright' size={15} style={{ paddingLeft: 8 }} color="#fff" />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <Text allowFontScaling={false} style={[MainStyles.Text18, MainStyles.textAlignLeft, MainStyles.textGreen]}>แนะนำแหล่งท่องเที่ยวเชิงเกษตรที่คล้ายกัน</Text>

                                        <View style={{ marginTop: 30, flex: 0.45 }}>
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
                                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '33%', paddingHorizontal: 3 }}>
                                                                <Image
                                                                    resizeMode={'cover'}
                                                                    source={getBannerFlashSale[index].img_src}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 80,
                                                                        borderRadius: 10,
                                                                    }}
                                                                />                                                            
                                                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.mt14, MainStyles.mb5]}>{getBannerFlashSale[index].title}</Text>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>{getBannerFlashSale[index].subTitle}</Text>
                                                                <View style={ {flexDirection: "row" , marginTop:15}}>
                                                                    <FontAwesome name='map-marker' size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                                                    <Text style={[MainStyles.textGreen, MainStyles.Text14]}>{getBannerFlashSale[index].province}</Text>
                                                                </View>
                                                            </View>
                                                        )
                                                    })}
                                                </View>
                                            </Swiper>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={[styles.cardBottom]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', paddingHorizontal: 20 ,marginVertical:5}}>
                            <FontAwesome5 name='comment-alt' size={20} color="#448165" />
                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textCenterContent]}>
                                รีวิว
                            </Text>
                        </View>
                        <View style={{
                            borderLeftWidth: 1,
                            borderLeftColor: '#e4e4e4',
                        }} />
                        <View style={{ flexDirection: 'column', paddingHorizontal: 20 ,marginVertical:5}}>
                            <FontAwesome5 name='comment-dots' size={20} />
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textCenterContent]}>
                                แชท
                            </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnProductDetailGreen]}
                            onPress={() => this.onEventAndLocation()}
                        >
                            <FontAwesome5 name='id-card-alt' size={20} color="#fff" style={{ paddingRight: 8 , marginTop:13 }}/>
                            <Text allowFontScaling={false} style={MainStyles.btnProductDetailGreenText}>ติดต่อสถานที่</Text>
                            <Icon name='arrowright' size={15} style={{ paddingLeft: 8 , marginTop:16 }} color="#fff" />
                                              
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnProductDetailYellow]}
                            onPress={() => this.onEventAndLocation()}
                        >
                            <FontAwesome5 name='calendar' size={20} color="#fff" style={{ paddingRight: 8 , marginTop:13 }}/>
                            <Text allowFontScaling={false} style={MainStyles.btnProductDetailGreenText}>จองกิจกรรม</Text>
                            <Icon name='arrowright' size={15} style={{ paddingLeft: 8 , marginTop:16 }} color="#fff" />
                        </TouchableOpacity>
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
    cardBottom: {
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 0,
        borderColor: "#e0e0e0",
    },
});