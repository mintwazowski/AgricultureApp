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
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import ModalLib from 'react-native-modal';

export default class SourceOfProductDetail extends Component {
    state = {
        isAlert: null,
        images: [
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
                        <Text allowFontScaling={false} style={[ModalStyles.Text20, MainStyles.textGreen, MainStyles.textAlignLeft]}>ยืนยันการจองเข้าร่วมกิจกรรม</Text>
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
                            <View style={{ justifyContent: 'center', flexDirection: "row" }} >
                                <MaterialIcons name='contacts' size={16} color="#fff" style={{ paddingRight: 8 }} />
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
                        <View style={{ justifyContent: 'center', flexDirection: "column", paddingLeft: 5, flexShrink: 1 }} >
                            <Text allowFontScaling={false} style={[MainStyles.textGray, ModalStyles.mb5]}>ศูนย์เรียนรู้และอนุรักษ์การทอผ้า</Text>
                            <Text allowFontScaling={false} style={[MainStyles.textGrayLight, { fontSize: 10 }]}>ผ้าไทย ถือเป็นหัตถกรรมและหัตถศิลป์มรดกอันล้ำค่าของเมืองไทย มีความงดงามของเส้นไหมที่เป็นเอกลักษณ์</Text>
                            <View style={{ flexDirection: "row", paddingLeft: 5 }}>
                                <View style={{ flexDirection: "row", paddingLeft: 5 }}>
                                    <Fontisto name='map-marker-alt' size={16} style={{ paddingRight: 8 }} />
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, ModalStyles.Text10]}>province</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 1, paddingTop: 5 }}>
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
                        <Text allowFontScaling={false} style={[ModalStyles.Text18, MainStyles.textGray]}>รายละเอียด</Text>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 5 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>วันเสาร์ที่ 27 พฤศจิกายน 2564</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>เวลา 08.00 น. - 10.00 น.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 5 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>เข้าร่วมกิจกรรม  50.00 บาท  x 8 คน (ผู้ใหญ่)</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>500.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 5 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>เข้าร่วมกิจกรรม  50.00 บาท  x 2 คน (เด็ก)</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>500.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 5 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>อาหารเช้า  30.00 บาท  x 10 คน</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 10 }, MainStyles.textGrayLight]}>300.00 บาท</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 12 }, MainStyles.textGray]}>รวม</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 12 }, MainStyles.textGray]}>800.00 บาท</Text>
                            </View>
                        </View>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 12 }, MainStyles.textGray]}>หมายเหตุ : เจ้าของสถานที่ต้องตอบรับคำขอจองเข้าร่วมกิจกรรมก่อน การยืนยันจองเข้าร่วมกิจกรรมจึงจะสมบูรณ์ (ภายใน 24 ชั่วโมง)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 12 }, MainStyles.textGray]}>นโยบายการยกเลิกจองเข้าร่วมกิจกรรม ดูข้อมูลเพิ่มเติม</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 16 }, MainStyles.textGray]}>กิจกรรมของคุณ</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <MaterialIcons name='event' size={22} color="#000" style={{ paddingHorizontal: 10, alignSelf: 'center' }} />
                                <Text allowFontScaling={false} style={[{ fontSize: 14 }, MainStyles.textGray]}>วันที่และระยะเวลาร่วมกิจกรรม</Text>
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
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <FontAwesome5 name='users' size={20} color="#000" style={{ paddingHorizontal: 10, alignSelf: 'center' }} />
                                <Text allowFontScaling={false} style={[{ fontSize: 14 }, MainStyles.textGray]}>ผู้เข้าร่วมกิจกรรม</Text>
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
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <MaterialIcons name='fastfood' size={22} color="#000" style={{ paddingHorizontal: 10, alignSelf: 'center' }} />
                                <Text allowFontScaling={false} style={[{ fontSize: 14 }, MainStyles.textGray]}>อาหารและเครื่องดื่ม</Text>
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
                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                            <Text allowFontScaling={false} style={[{ fontSize: 16 }, MainStyles.textGray]}>ข้อควรทราบ</Text>

                            <View style={{ flexDirection: 'column', marginTop: 10, alignItems: 'center' }}>
                                <Text allowFontScaling={false} style={[{ fontSize: 12 }, MainStyles.textGray]}>การเลือกปุ่มด้านข้างถือเป็นการยอมรับการจองเข้าร่วมกิจกรรม การสละสิทธิ์และยกเว้นความรับผิดของผู้เข้าร่วม นโยบายยกเลิกการจองและคำแนะนำว่าด้วยการรักษาระยะห่าง ระหว่างบุคคลและ COVID-19</Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    width: '60%',
                                    backgroundColor: '#2eb16d',
                                    borderRadius: 9,
                                    paddingVertical: 9,
                                    alignSelf: 'center',
                                    marginTop: 15
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
                <Text allowFontScaling={false} style={[ModalStyles.Text18, MainStyles.textGreen]}>Title</Text>
                <Text allowFontScaling={false} style={[ModalStyles.Text10, MainStyles.textGrayLight]}>Sub title</Text>
                <View style={[MainStyles.textBD, { marginVertical: 20 }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Fontisto name='map-marker-alt' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                        {/* <View style={{ flexDirection: "column" }}> */}
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGray]}>259 หมู่ 4 บ้านขัวแคร่ ถนนไฮเวย์เชียงใหม่-ลำปาง ตำบลศรีบัวบาน อำเภอเมือง จังหวัดลำพูน
                            <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textGreenBd]}> &emsp; ดูแผนที่
                            </Text>
                        </Text>

                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome5 name='phone-alt' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>087-3043220 , 089-6351607</Text>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row" }}>
                        <Fontisto name='email' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>sale@lamphunthaisilk.com</Text>
                    </View>
                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome5 name='globe-asia' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>http://www.lamphunthaisilk.com</Text>
                    </View>

                </View>
                <View style={ModalStyles.content2Button}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOneYellow}
                        onPress={() => this.onNextToCart()}
                    >
                        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                            <FontAwesome5 name='stamp' size={20} color="#fff" style={{ marginHorizontal: 15 }} />
                            <Text allowFontScaling={false} style={ModalStyles.btnOneText}>จองเข้าร่วมกิจกรรม</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOneBlue}
                        onPress={() => this.onNextToProductAgain()}
                    >
                        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                            <FontAwesome5 name='comment-dots' size={20} color="#fff" style={{ marginHorizontal: 15 }} />
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

            cards: [
                {
                    id: 1,
                    title: "ได้รับรางวัลอะไรบ้าง ?",
                    sub_title: "ปี 2560 พระเจ้าหลานเธอ พระองค์เจ้าสิริภาจุฑาภรณ์ พระราชทานพระราชวโรกาสให้ พนักงานร้านลำพูนไทยซิลค์ และ เหล่าช่างทอผ้าไหมลำพูน เฝ้าทูลละอองธุลีพระบาทเป็นการส่วนพระองค์ ณ ที่ประทับกองบิน 41 จ. เชียงใหม่ ถวายรายงานเกี่ยวกับการทอผ้าไหมยกดอกลำพูน เหล่าข้าพระพุทธเจ้า สำนึกในพระมหากรุณาธิคุณ",
                },
                {
                    id: 2,
                    title: "ราคาอยู่ที่ผืนละเท่าไหร่ ?",
                    sub_title: "xxxxxxxxxxxxxx",
                },
                {
                    id: 3,
                    title: "ใช้เวลาท่องเที่ยวได้นานแค่ไหน ?",
                    sub_title: "aaaaaaaaaaaa",
                },
                {
                    id: 4,
                    title: "สามารถลองทอผ้าไหมได้หรอไหม ?",
                    sub_title: "bbbbbbbbbbb",
                },
                {
                    id: 5,
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

        const { col, cards, isAlert } = this.state;


        const getFavProduct = [
            { id: 1, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 2, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 3, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 4 },
            { id: 4, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
            { id: 5, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 3 },
            { id: 6, img_src: require('../../../assets/placeholder.jpg'), name: 'Text Mock', rating: 5 },
        ]

        const getBannerFlashSale = [
            { id: 1, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title', province: 'province' },
            { id: 2, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title', province: 'province' },
            { id: 3, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title', province: 'province' },
            { id: 4, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title', province: 'province' },
            { id: 5, img_src: require('../../../assets/placeholder.jpg'), title: 'Title', subTitle: 'Sub Title', province: 'province' },
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
                            <FontAwesome5 name='shopping-cart' size={15} style={[MainStyles.textGrayLight, { marginRight: 5, alignSelf: 'flex-end' }]} />

                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (

            <SafeAreaView style={[MainStyles.contentBG]}>
                {isAlert}
                <View style={[MainStyles.contentBG, MainStyles.mx15]}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* Content */}
                        <View style={{ flex: 1, marginTop: 25 }}>

                            <View style={{ flexDirection: "column", flex: 1, marginTop: 15 }}>
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
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: '100%',
                                                        height: 250,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide1}>
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: '100%',
                                                        height: 250,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.slide1}>
                                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '100%' }}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={require('../../../assets/placeholder.jpg')}
                                                    style={{
                                                        width: '100%',
                                                        height: 250,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </Swiper>
                                    <FontAwesome5 name='long-arrow-alt-left' size={26} color="#fff" style={{ position: 'absolute', left: 10, top: 10, paddingHorizontal: 7 }} onPress={() => this.onBack()} />
                                    <MaterialIcons name='favorite-border' size={26} color="#fff" style={{ position: 'absolute', right: 10, top: 10, paddingHorizontal: 7 }} />
                                    <Icon name='like2' size={26} color="#fff" style={{ position: 'absolute', right: 50, top: 10, paddingHorizontal: 7 }} />
                                    <FontAwesome5 name='share-alt' size={22} color="#fff" style={{ position: 'absolute', right: 90, top: 12, paddingHorizontal: 7 }} />
                                </View>
                                <View style={{ marginVertical: 10, flex: 0.45 }}>
                                    <View style={styles.slide1}>
                                        <View style={{ flexDirection: 'row', alignContent: 'center', width: '100%' }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: '30%',
                                                    height: 80,
                                                    marginHorizontal: 5
                                                }}
                                            />
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: '30%',
                                                    height: 80,
                                                    marginHorizontal: 5
                                                }}
                                            />
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/placeholder.jpg')}
                                                style={{
                                                    width: '30%',
                                                    height: 80,
                                                    marginHorizontal: 5
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnProductDetailGreenRadius, { paddingVertical: 10 }]}
                                    >
                                        <Fontisto name='clock' size={18} color="#fff" style={{ paddingHorizontal: 6, alignSelf: 'center' }} />
                                        <Text allowFontScaling={false} style={MainStyles.btnProductDetailYellowText}>เปิดทำการ</Text>

                                    </TouchableOpacity>

                                    <View style={{ flex: 1, alignContent: 'flex-end' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textBlue, MainStyles.Text14, MainStyles.textAlignRight, { marginTop: 6 }]}>(25 รีวิว)
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                imageSize={16}
                                                style={{ paddingHorizontal: 10, alignSelf: 'center' }}
                                            />
                                        </Text>
                                    </View>
                                </View>

                                <View style={[MainStyles.textBD, { marginVertical: 20 }]}>
                                    <View style={{ flex: 1 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text22, MainStyles.textAlignCenter, MainStyles.textGrayBd]}>สวนครูองุ่น</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignCenter, MainStyles.textGrayLight]}>แขวงคลองตันเหนือ กรุงเทพมหานคร</Text>
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
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <Fontisto name='map-marker-alt' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>67/1 ถนน สุขุมวิท55 (ทองหล่อ3) เขตวัฒนา แขวงคลองตันเหนือ กรุงเทพมหานคร</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <FontAwesome5 name='phone-alt' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>081-1111111, 089-2222222</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <Fontisto name='email' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>sale@demo.com</Text>
                                    </View>
                                    <View style={MainStyles.BorderBottomGrayWhite}></View>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <FontAwesome5 name='globe-asia' size={22} style={{ paddingHorizontal: 20, alignSelf: 'center' }} />
                                        <Text allowFontScaling={false} style={[MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.textGreen]}>http://kruangoon.com/</Text>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 50 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textAlignLeft, MainStyles.textGreen]}>รายละเอียด</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textAlignLeft, MainStyles.textGrayLight]}>"สวนครูองุ่น-มูลนิธิกระจกเงา" ร่วมกับมูลนิธิไชยวนา เป็นโครงการสร้างพื้นที่แห่งการเรียนรู้ พื้นที่สีเขียวที่อุดมสมบูรณ์ สถานที่เสริมสร้างความสัมพันธ์ ฝึกทักษะ และพบปะผ่อนคลาย สำหรับเด็ก พ่อแม่ ครอบครัว จนกระทั่งบุคคลทั่วไป เพื่อให้สอดคล้องกับเจตนารมณ์ของครูองุ่น มาลิก ที่ระบุไว้ในพินัยกรรมของท่าน และสวนครูองุ่น-มูลนิธิกระจกเงาแห่งนี้ จะเป็นสื่อกลางของความสัมพันธ์ทั้งหมด โดยจะออกมาในรูปแบบของ พื้นที่สาธารณะสำหรับเด็ก ที่พักผ่อนหย่อนใจ ห้องสมุดมนุษย์ ร้านแบ่งปัน พื้นที่กิจกรรมสำหรับบุคคลทั่วไป หน่วยงานต่างๆ NGOs หรืออาจจะเรียกว่า เป็นลานปล่อยของก็ว่าได้ … อ่านต่อ</Text>
                                    </View>



                                </View>
                            </View>
                        </View>
                    </ScrollView>
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

