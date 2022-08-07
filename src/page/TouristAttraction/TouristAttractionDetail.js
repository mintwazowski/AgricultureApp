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
import ModalStyles from '../../styles/ModalStyles';
import Search from '../Search/Search'
import Swiper from 'react-native-swiper'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import RNPickerSelect from 'react-native-picker-select';

import { Rating } from 'react-native-ratings';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import ModalLib from 'react-native-modal';

export default class TouristAttractionDetail extends Component {
    state = {
        isAlert: null,
        images : [
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpGmKrfBFE90_MyomlXre9OJhLyjMvfGm5w&usqp=CAU",
                id: "12345"
            }, {
                src: "https://st.depositphotos.com/1007995/1274/i/600/depositphotos_12746726-stock-photo-fashion-man-wearing- sunglasses-thinking.jpg",
                id: "12346"
            }, {
                src: "https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg",
                id: "12347"
            }
        ]
    }
    
    onBack() {
        this.props.navigation.navigate('Home')
    }

    onEventReservation() {
        alert = (<ModalLib isVisible={true}>
            <View style={ModalStyles.ModalEvent}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text allowFontScaling={false} style={[ModalStyles.Text20 , MainStyles.textGreen , MainStyles.textAlignLeft]}>ยืนยันการจองเข้าร่วมกิจกรรม</Text>
                        <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    width: '35%',
                                    backgroundColor: '#448165',
                                    borderRadius: 9,
                                    paddingVertical: 5,
                                    alignSelf: 'center',
                                }}
                            >
                                <View style={{justifyContent:'center', flexDirection: "row"} } >
                                    <MaterialIcons name='contacts' size={16} color="#fff" style={{ paddingRight: 8 }}/>
                                    <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>ติดต่อสถานที่</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Image
                            resizeMode={'cover'}
                            source={require('../../../assets/placeholder.jpg')}
                            style={{
                                width: '30%',
                                height: 85,
                                alignSelf: 'center',
                                borderRadius: 9,
                            }}
                        />
                        <View style={{justifyContent:'center', flexDirection: "column" , paddingLeft:5, flexShrink: 1 } } >
                            <Text allowFontScaling={false} style={[MainStyles.textGray , ModalStyles.mb5]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้า</Text>
                            <Text allowFontScaling={false} style={[MainStyles.textGrayLight , {fontSize:10}]}>ผ้าไทย ถือเป็นหัตถกรรมและหัตถศิลป์มรดกอันล้ำค่าของเมืองไทย มีความงดงามของเส้นไหมที่เป็นเอกลักษณ์</Text>
                            <View style={{ flexDirection: "row" , paddingLeft:5}}>
                                <View style={{ flexDirection: "row" , paddingLeft:5}}>
                                    <Fontisto name='map-marker-alt' size={16} style={{ paddingRight: 8 }}/>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight ,ModalStyles.Text10]}>province</Text>
                                </View>
                                <View style={{ alignItems:'flex-end' , flex:1 , paddingTop:5}}>
                                    <Rating
                                        type='star'
                                        ratingCount={5}
                                        imageSize={13}
                                        isDisabled={true}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View>
                        <Text allowFontScaling={false} style={[ModalStyles.Text18 , MainStyles.textGray]}>รายละเอียด</Text>
                        <View style={{ flexDirection: 'row' , paddingLeft:10 , marginTop:5}}>
                            <Text allowFontScaling={false} style={[{fontSize:10} , MainStyles.textGrayLight]}>วันเสาร์ที่ 27 พฤศจิกายน 2564</Text>
                            <View style={{ alignItems:'flex-end' , flex:1 }}>
                                <Text allowFontScaling={false} style={[{fontSize:10}, MainStyles.textGrayLight]}>เวลา 08.00 น. - 10.00 น.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' , paddingLeft:10 , marginTop:5}}>
                            <Text allowFontScaling={false} style={[{fontSize:10} , MainStyles.textGrayLight]}>เข้าร่วมกิจกรรม  50.00 บาท  x 8 คน (ผู้ใหญ่)</Text>
                            <View style={{ alignItems:'flex-end' , flex:1 }}>
                                <Text allowFontScaling={false} style={[{fontSize:10}, MainStyles.textGrayLight]}>500.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' , paddingLeft:10 , marginTop:5}}>
                            <Text allowFontScaling={false} style={[{fontSize:10} , MainStyles.textGrayLight]}>เข้าร่วมกิจกรรม  50.00 บาท  x 2 คน (เด็ก)</Text>
                            <View style={{ alignItems:'flex-end' , flex:1 }}>
                                <Text allowFontScaling={false} style={[{fontSize:10}, MainStyles.textGrayLight]}>500.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' , paddingLeft:10 , marginTop:5}}>
                            <Text allowFontScaling={false} style={[{fontSize:10} , MainStyles.textGrayLight]}>อาหารเช้า  30.00 บาท  x 10 คน</Text>
                            <View style={{ alignItems:'flex-end' , flex:1 }}>
                                <Text allowFontScaling={false} style={[{fontSize:10}, MainStyles.textGrayLight]}>300.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' , marginTop:5 }}>
                            <Text allowFontScaling={false} style={[{fontSize:12} , MainStyles.textGray]}>รวม</Text>
                            <View style={{ alignItems:'flex-end' , flex:1 }}>
                                <Text allowFontScaling={false} style={[{fontSize:12}, MainStyles.textGray]}>800.00 บาท</Text>
                            </View>
                        </View>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text allowFontScaling={false} style={[{fontSize:12} , MainStyles.textGray]}>หมายเหตุ : เจ้าของสถานที่ต้องตอบรับคำขอจองเข้าร่วมกิจกรรมก่อน การยืนยันจองเข้าร่วมกิจกรรมจึงจะสมบูรณ์ (ภายใน 24 ชั่วโมง)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' , marginTop:15 }}>
                            <Text allowFontScaling={false} style={[{fontSize:12} , MainStyles.textGray]}>นโยบายการยกเลิกจองเข้าร่วมกิจกรรม ดูข้อมูลเพิ่มเติม</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'column' , marginTop:10}}>
                            <Text allowFontScaling={false} style={[{fontSize:16} , MainStyles.textGray]}>กิจกรรมของคุณ</Text>
                            <View style={{ flexDirection: 'row' , marginVertical:10 }}>
                                <MaterialIcons name='event' size={22} color="#000" style={{ paddingHorizontal:10 , alignSelf:'center' }} />
                                <Text allowFontScaling={false} style={[{fontSize:14} , MainStyles.textGray]}>วันที่และระยะเวลาร่วมกิจกรรม</Text>
                            </View>
                            <RNPickerSelect
                                allowFontScaling={false}
                                useNativeAndroidPickerStyle={false}
                                style={SelectHaveBorderStyles}
                                items={[
                                    { label: '1 คน', value: '1 คน' },
                                    { label: '5 คน', value: '5 คน' },
                                    { label: '10 คน', value: '10 คน' },
                                ]}
                                onValueChange={(value) => console.log(value)}
                                placeholder={{ label: "วันเสาร์ที่ 27 พฤศจิกายน 2564 เวลา 08.00 - 10.00 น." }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' , marginVertical:10 }}>
                                <FontAwesome5 name='users' size={20} color="#000" style={{ paddingHorizontal:10 , alignSelf:'center' }} />
                                <Text allowFontScaling={false} style={[{fontSize:14} , MainStyles.textGray]}>ผู้เข้าร่วมกิจกรรม</Text>
                            </View>
                            <RNPickerSelect
                                allowFontScaling={false}
                                useNativeAndroidPickerStyle={false}
                                style={SelectHaveBorderStyles}
                                items={[
                                    { label: '1 คน', value: '1 คน' },
                                    { label: '5 คน', value: '5 คน' },
                                    { label: '10 คน', value: '10 คน' },
                                ]}
                                onValueChange={(value) => console.log(value)}
                                placeholder={{ label: "ผู้เข้าร่วม 10 คน" }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' , marginVertical:10 }}>
                                <MaterialIcons name='fastfood' size={22} color="#000" style={{ paddingHorizontal:10 , alignSelf:'center' }} />
                                <Text allowFontScaling={false} style={[{fontSize:14} , MainStyles.textGray]}>อาหารและเครื่องดื่ม</Text>
                            </View>
                            <RNPickerSelect
                                allowFontScaling={false}
                                useNativeAndroidPickerStyle={false}
                                style={SelectHaveBorderStyles}
                                items={[
                                    { label: '1 คน', value: '1 คน' },
                                    { label: '5 คน', value: '5 คน' },
                                    { label: '10 คน', value: '10 คน' },
                                ]}
                                onValueChange={(value) => console.log(value)}
                                placeholder={{ label: "อาหารเช้า 10 คน" }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' , marginTop:10}}>
                            <Text allowFontScaling={false} style={[{fontSize:16} , MainStyles.textGray]}>ข้อควรทราบ</Text>

                            <View style={{ flexDirection: 'column' , marginTop:10 , alignItems:'center'}}>
                                <Text allowFontScaling={false} style={[{fontSize:12} , MainStyles.textGray]}>การเลือกปุ่มด้านข้างถือเป็นการยอมรับการจองเข้าร่วมกิจกรรม การสละสิทธิ์และยกเว้นความรับผิดของผู้เข้าร่วม นโยบายยกเลิกการจองและคำแนะนำว่าด้วยการรักษาระยะห่าง ระหว่างบุคคลและ COVID-19</Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    width: '60%',
                                    backgroundColor: '#2eb16d',
                                    borderRadius: 9,
                                    paddingVertical: 9,
                                    alignSelf: 'center',
                                    marginTop:15
                                }}
                            >
                                <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>ยืนยันการจองเข้าร่วมกิจกรรม</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ModalLib>)
        this.setState({
            isAlert: alert,
        });
    }

    onEventAndLocation(type, info) {
        alert = (<ModalLib isVisible={true}>
            <View style={ModalStyles.ModalEvent}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
                    <Image
                        resizeMode={'cover'}
                        source={require('../../../assets/placeholder.jpg')}
                        style={{
                            width: '100%',
                            height: 35,
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <Text allowFontScaling={false} style={[ModalStyles.Text18 , MainStyles.textGreen]}>Title</Text>
                <Text allowFontScaling={false} style={[ModalStyles.Text10 , MainStyles.textGrayLight]}>Sub title</Text>
                <View style={[MainStyles.textBD, { marginVertical: 20 }]}>
                    <View style={{ flexDirection: "row"}}>
                        <Fontisto name='map-marker-alt' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                        {/* <View style={{ flexDirection: "column" }}> */}
                            <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGray]}>259 หมู่ 4 บ้านขัวแคร่ ถนนไฮเวย์เชียงใหม่-ลำปาง ตำบลศรีบัวบาน อำเภอเมือง จังหวัดลำพูน  
                            <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textGreenBd ]}> &emsp; ดูแผนที่
                            </Text>
                            </Text>

                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row"}}>
                        <FontAwesome5 name='phone-alt' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>087-3043220 , 089-6351607</Text>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row"}}>
                        <Fontisto name='email' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>sale@lamphunthaisilk.com</Text>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row"}}>
                        <FontAwesome5 name='globe-asia' size={22} style={{ paddingHorizontal:20 , alignSelf:'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>http://www.lamphunthaisilk.com</Text>
                    </View>

                </View>
                <View style={ModalStyles.content2Button}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOneYellow}
                        onPress={() => this.onNextToCart()}
                    >
                         <View style={{ flexDirection: "row", justifyContent:'center'}}>
                            <FontAwesome5 name='stamp' size={20} color="#fff" style={{ marginHorizontal: 15}} />
                            <Text allowFontScaling={false} style={ModalStyles.btnOneText}>จองเข้าร่วมกิจกรรม</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOneBlue}
                        onPress={() => this.onNextToProductAgain()}
                    >
                        <View style={{ flexDirection: "row", justifyContent:'center'}}>
                            <FontAwesome5 name='comment-dots' size={20} color="#fff" style={{ marginHorizontal: 15}} />
                            <Text allowFontScaling={false} style={ModalStyles.btnOneText}>ส่งข้อความ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalLib>)
        this.setState({
            isAlert: alert,
        });
    }

    constructor(props) {
        super(props);
        this.tog = this.tog.bind(this);
    
        this.state = {
            col: 0,
            activeIndex: 0,
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
  
    _onChange(index) {
        this.setState({
            activeIndex: index,
        })
    };

    tog(e) {
        let event = e.target.dataset.event;
        this.setState({
            col: this.state.col === Number(event) ? 0 : Number(event)
        });
    }

    
    render() {

        const { col, cards , isAlert , index } = this.state;


        const getFavProduct = [
            { id: 1, img_src: require('../../../assets/image/22.png'), name: 'เสื้อคลุมผ้าคราม', price: '8,000' , rating: 5 },
            { id: 2, img_src: require('../../../assets/image/23.png'), name: 'ผ้าพันคอคราม', price: '500', rating: 5 },
            { id: 3, img_src: require('../../../assets/image/24.png'), name: 'เสื้อคราม', price: '1,000', rating: 4 },
        ]

        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/images/36.png'), title: 'เก็บสตรอเบอร์รี่ที่สะเมิง', subTitle: 'ฤดูหนาวแบบนี้หลายๆ คนมาเที่ยวเชียงใหม่ก็อยากจะไปเก็บ ไปซื้อ' , province: 'เชียงใหม่' },
            { id: 2, img_src: require('../../../assets/images/37.png'), title: 'เมล็ดกาแฟ เขาทะลุ', subTitle: 'กาแฟเขาทะชุมพร เริ่มต้นจากการเป็นครอบครัวเกษตรกร ชาวสวนกาแฟ' , province: 'ชุมพร' },
            { id: 3, img_src: require('../../../assets/images/38.png'), title: 'ข้าวหอมมะลิสุรินทร์', subTitle: 'ข้าวหอมมะลิสุรินทร์ยังอุดมด้วยสารอาหารที่มีประโยชน์นานาชนิด' , province: 'สุรินทร์' },
        ]

        var getFavProductCard = []
        for (let i = 0; i < 1; i++) {
            getFavProductCard.push(
                <View style={styles.slide1}>
                    {getFavProduct.map((data, index) => {
                        return (
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '33%', paddingHorizontal: 3 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={getFavProduct[index].img_src}
                                    style={{
                                        width: '100%',
                                        height: 170,
                                        paddingBottom: 10,
                                        paddingTop: 5,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt10, MainStyles.mb5]}>{getFavProduct[index].name}</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft]}>{getFavProduct[index].price} บาท</Text>
                                <View style={{ flexDirection: 'row'  , marginTop:10}}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' size={15} style={{ marginRight: 5 }} color="#e9b266" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10, MainStyles.textCenterContent]}>5</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: "flex-end" , paddingRight:10}}>
                                        <FontAwesome5 name='shopping-cart' size={14} color="#949494" style={{
                                            alignSelf: 'flex-end',
                                            
                                        }} />
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        }
      
        return (

            <SafeAreaView style={[MainStyles.contentBG]}>
                {isAlert}
                <View style={[MainStyles.contentBG]}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* Banner Content */}
                        <View style={{ flex: 1, marginTop: -10 }}>
                            <Swiper
                                ref='swiper'
                                height={'100%'}
                                showsButtons={false}
                                showsPagination={false}
                                onIndexChanged={(index) => this.setState({ index: index })}
                            >
                                <View style={styles.slide1}>
                                    <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/image/1.png')}
                                            style={{
                                                width: '100%',
                                                height: 300
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide1}>
                                    <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/image/1.png')}
                                            style={{
                                                width: '100%',
                                                height: 300
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide1}>
                                    <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/image/1.png')}
                                            style={{
                                                width: '100%',
                                                height: 300
                                            }}
                                        />
                                    </View>
                                </View>
                            </Swiper>
                            <View style={{ flexDirection: 'row', position: 'absolute', left: 10, top: 45, right: 10, paddingHorizontal: 7 }}>
                                <FontAwesome5 name='long-arrow-alt-left' size={26} color="#fff" style={{}} onPress={() => this.onBack()} />
                                <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                    <FontAwesome5 name='share-alt' size={22} color="#fff" style={{ paddingHorizontal: 7 }} />
                                    <Icon name='like2' size={25} color="#fff" style={{ paddingHorizontal: 7 }} />
                                    <MaterialIcons name='favorite-border' size={26} color="#fff" style={{ paddingHorizontal: 7 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', position: 'absolute', left: 5, bottom: 10, right: 5, paddingHorizontal: 7 }}>
                                <View style={{ backgroundColor: '#666666', paddingVertical: 3, paddingHorizontal: 15, borderRadius: 13 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text12]}>{index + 1} / 3</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#666666', paddingVertical: 3, paddingHorizontal: 15, borderRadius: 13 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text12]}>แจ้งแก้ไขข้อมูล</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 10,  width: '100%' }}>
                                <View style={{ width: '30.5%', marginLeft: '2%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/30.png')}
                                        style={{
                                            width: '100%',
                                            height: 80,
                                        }}
                                    />
                                </View>
                                <View style={{ width: '30.5%', marginHorizontal: '2%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/31.png')}
                                        style={{
                                            width: '100%',
                                            height: 80,
                                        }}
                                    />
                                </View>
                                <View style={{ width: '30.5%', marginRight: '2%' }}>
                                    <View style={{
                                        backgroundColor: '#333',
                                        opacity: 0.8,
                                        width: '100%',
                                        position: 'absolute',
                                        zIndex: 999,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                        <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text24]}>+20</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text12]}>ดูรูปทั้งหมด</Text>
                                    </View>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/31.png')}
                                        style={{
                                            width: '100%',
                                            height: 80,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Content */}
                        <View style={{ flex: 1, paddingHorizontal:10 }}>
                            <View style={{ flexDirection: "column", flex: 1, marginTop: 15 }}>
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
                                    <View style={{ flex: 1, marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen, MainStyles.mb20]}>จองเข้าร่วมกิจกรรม</Text>
                                        <View style={{
                                            flexDirection:'row',
                                            width:'100%'
                                        }}>
                                            <View style={{width:'50%'}}>
                                                <View style={[SelectBorderStyles.selectForBank]}>
                                                    <Text style={[MainStyles.textGrayLight , MainStyles.Text14]}>วันที่</Text>
                                                </View>
                                                <RNPickerSelect
                                                    allowFontScaling={false}
                                                    useNativeAndroidPickerStyle={false}
                                                    style={SelectBorderStyles}
                                                    items={[
                                                        { label: 'Football', value: 'football' },
                                                        { label: 'Baseball', value: 'baseball' },
                                                        { label: 'Hockey', value: 'hockey' },
                                                    ]}
                                                    onValueChange={(value) => console.log(value)}
                                                    placeholder={{ label: "วันที่จอง" }}
                                                    Icon={() => {
                                                        return <FontAwesome
                                                            name="caret-down"
                                                            size={18}
                                                            color="#000"
                                                        />
                                                    }}
                                                />
                                            </View>

                                            <View style={{width:'50%'}}>
                                                <View style={[SelectBorderStyles.selectForBank]}>
                                                    <Text style={[MainStyles.textGrayLight , MainStyles.Text14]}>ผู้เข้าร่วม</Text>
                                                </View>
                                                <RNPickerSelect
                                                    allowFontScaling={false}
                                                    useNativeAndroidPickerStyle={false}
                                                    style={SelectBorderStyles}
                                                    items={[
                                                        { label: '1 คน', value: '1 คน' },
                                                        { label: '5 คน', value: '5 คน' },
                                                        { label: '10 คน', value: '10 คน' },
                                                    ]}
                                                    onValueChange={(value) => console.log(value)}
                                                    placeholder={{ label: "จำนวน" }}
                                                    Icon={() => {
                                                        return <FontAwesome
                                                            name="caret-down"
                                                            size={18}
                                                            color="#000"
                                                        />
                                                    }}
                                                />
                                            </View>

                                        </View>

                                        <View style={{
                                            flexDirection:'row',
                                            width:'100%',
                                            marginBottom:15
                                        }}>
                                            <View style={{width:'60%'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>• รอบ 13.00 น. - 15.00 น.</Text>
                                            </View>
                                            <View style={{width:'40%' ,flexDirection:'row'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>50 บาท /คน</Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={{
                                                        width: '40%',
                                                        backgroundColor: '#448165',
                                                        borderRadius: 9,
                                                        paddingVertical: 5,
                                                        marginLeft:7,
                                                        alignSelf: 'center',
                                                        alignContent:'center'
                                                    }}
                                                    onPress={() => this.onEventReservation()}
                                                >
                                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>จอง</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection:'row',
                                            width:'100%',
                                            marginBottom:15
                                        }}>
                                            <View style={{width:'60%'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>• รอบ 08.00 น. - 10.00 น.</Text>
                                            </View>
                                            <View style={{width:'40%' ,flexDirection:'row'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>50 บาท /คน</Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={{
                                                        width: '40%',
                                                        backgroundColor: '#a9a9a9',
                                                        borderRadius: 9,
                                                        paddingVertical: 5,
                                                        marginLeft:7,
                                                        alignSelf: 'center',
                                                        alignContent:'center'
                                                    }}
                                                >
                                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>เต็ม</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection:'row',
                                            width:'100%',
                                            marginBottom:15
                                        }}>
                                            <View style={{width:'60%'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>• รอบ 10.00 น. - 12.00 น.</Text>
                                            </View>
                                            <View style={{width:'40%' ,flexDirection:'row'}}>
                                                <Text style={[MainStyles.textGray , MainStyles.Text14]}>50 บาท /คน</Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={{
                                                        width: '40%',
                                                        backgroundColor: '#448165',
                                                        borderRadius: 9,
                                                        paddingVertical: 5,
                                                        marginLeft:7,
                                                        alignSelf: 'center',
                                                        alignContent:'center'
                                                    }}
                                                    onPress={() => this.onEventReservation()}
                                                >
                                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>จอง</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%' }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={{
                                                        width: '70%',
                                                        backgroundColor: '#fff',
                                                        borderRadius: 9,
                                                        paddingVertical: 9,
                                                        alignSelf: 'center',
                                                    }}
                                                >
                                                    <View style={{ flexDirection: "row", justifyContent:'center'}}>
                                                        <Text allowFontScaling={false} style={MainStyles.textGreen}>แสดงข้อมูลเพิ่มเติม</Text>
                                                        <MaterialIcons name='keyboard-arrow-down' size={20} color="#448165" style={{ marginHorizontal: 15}} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
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
                                                                <FontAwesome name={this.state.activeIndex === index ? "caret-down" : "caret-up"} size={24} color="#999" style={{paddingHorizontal:8}} />
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
                                        
                                        <View style={{ flex: 1, marginVertical: 15 , flexDirection: 'row' }}>
                                            <Swiper
                                                height={'100%'}
                                                showsButtons={false}
                                                dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                                activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                            >
                                                {getFavProductCard}
                                            </Swiper>
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
                                                    source={require('../../../assets/image/u1731.png')}
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 99,
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'column', marginLeft: 10, alignItems: 'flex-start' }}>
                                                    <Text style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>ย้อมผ้าสนุกมากเลยครับ</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                                        <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGray]}>เมตตา กรุณา</Text> 
                                                        <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>24 พ.ย. 2564</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row',  marginTop:8}}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/images/30.png')}
                                                    style={{
                                                        width: 100,
                                                        height: 65,
                                                        // borderRadius: 9,
                                                        marginHorizontal :5,
                                                    }}
                                                />
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/images/31.png')}
                                                    style={{
                                                        width: 100,
                                                        height: 65,
                                                        marginHorizontal :5,
                                                        // borderRadius: 9,
                                                    }}
                                                />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' , marginTop:20 }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/image/u1729.png')}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 99,
                                                }}
                                            />
                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <Text style={[MainStyles.Text16, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>เรียนรู้การทอผ้าได้ดีมากๆเลยค่ะ</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGray]}>มานี มีพร้อม</Text> 
                                                    <Text style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>24 พ.ย. 2564</Text>
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

                                        <View style={{ marginTop:10, flex: 0.45 }}>
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
                                                                        height: 180,
                                                                        borderRadius: 9,
                                                                    }}
                                                                />                     
                                                                <FontAwesome name='heart-o' size={20} style={ [styles.heartIcon, {paddingHorizontal:8 }]} />                                       
                                                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.mt14, MainStyles.mb5]}>{getBannerFlashSale[index].title}</Text>
                                                                <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10, MainStyles.textAlignLeft]}>{getBannerFlashSale[index].subTitle}</Text>
                                                                <View style={ {flexDirection: "row" , marginTop:15}}>
                                                                    <FontAwesome name='map-marker' size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                                                    <Text style={[MainStyles.textGreen, MainStyles.Text12]}>{getBannerFlashSale[index].province}</Text>
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
    heartIcon : {
        position : 'absolute' , right:3 , top: 5 , color:'white'
    },
});

const SelectHaveBorderStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.8,
        borderRadius: 7,
        padding: 5,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    inputAndroid: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.8,
        borderRadius: 7,
        padding: 5,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    selectForBank: {
        position: 'absolute',
        zIndex: 1,
        left: 15,
        top: 15,
    },
    selectFormArrow: {
        position: 'absolute',
        zIndex: 1,
        right: 15,
        top: 10,
    },
    selectFormArrowIcon: {
        height: 10,
        width: 10,
        marginRight: 10
    },

    selectCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    selectCardText: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    selectCardArrowIcon: {
        height: 16,
        width: 20,
        marginRight: 10
    },
    placeholder: {
        color: "#000"
    },
    iconContainer: {
        top: 12,
        right: 15,
    },
});
const SelectBorderStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0,
        borderRadius: 7,
        paddingVertical: 10,
        paddingLeft: 80,
        paddingRight: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    inputAndroid: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0,
        borderRadius: 7,
        paddingVertical: 10,
        paddingLeft: 80,
        paddingRight: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    iconContainer: {
        top: 15,
        right: 15,
    },
    selectForBank: {
        position: 'absolute',
        zIndex: 1,
        left: 15,
        top: 15,
    },
    selectFormArrow: {
        position: 'absolute',
        zIndex: 1,
        right: 15,
        top: 10,
    },
    selectFormArrowIcon: {
        height: 10,
        width: 10,
        marginRight: 10
    },

    selectCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    selectCardText: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    selectCardArrowIcon: {
        height: 16,
        width: 20,
        marginRight: 10
    },
});

