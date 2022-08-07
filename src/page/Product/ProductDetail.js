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
    Modal,
} from 'react-native';

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';

import Swiper from 'react-native-swiper'
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';

export default class ProductDetail extends Component {

    state = {
        isAlert: null,
        index: 0
    }

    onGetCart(type, info) {
        alert = (<ModalLib isVisible={true}>
            <View style={ModalStyles.ModalContent}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 15 }}>
                    <Image
                        resizeMode={'cover'}
                        source={require('../../../assets/icon/star.png')}
                        style={{
                            width: 35,
                            height: 35,
                            alignSelf: 'center',
                            marginRight: 10
                        }}
                    />
                    <Image
                        resizeMode={'cover'}
                        source={require('../../../assets/icon/star.png')}
                        style={{
                            width: 35,
                            height: 35,
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <Text allowFontScaling={false} style={ModalStyles.ModalTitle}>คุณได้เพิ่มสินค้าลงในตะกร้าเรียบร้อยแล้ว</Text>
                <View style={ModalStyles.content2Button}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOne}
                        onPress={() => this.onNextToProductAgain()}
                    >
                        <Text allowFontScaling={false} style={ModalStyles.btnOneText}>ซื้อสินค้าต่อ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOneYellow}
                        onPress={() => this.onNextToCart()}
                    >
                        <Text allowFontScaling={false} style={ModalStyles.btnOneText}>ไปยังหน้าตะกร้าสินค้า</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalLib>)
        this.setState({
            isAlert: alert,
        });
    }

    onNextToCart() {
        this.setState({
            isAlert: null,
        });
        this.props.navigation.navigate('OrderList')
    }

    onNextToProductAgain() {
        this.setState({
            isAlert: false,
        });
        this.props.navigation.navigate('Product')
    }

    onBack() {
        this.props.navigation.navigate('Home')
    }


    render() {
        const { isAlert, index } = this.state
        const images = [
            {
                url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            },
            {
                url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            }
        ]

        const getFavProduct = [
            { id: 1, img_src: require('../../../assets/image/28.png'), name: 'ชุดของขวัญ Premium fruit ผลไม้สด', price: '1,299', rating: 5 },
            { id: 2, img_src: require('../../../assets/image/30.png'), name: 'น้ำผึ้งดอกลำไย และ ชาเขียวมะลิ', price: '250', rating: 5 },
            { id: 3, img_src: require('../../../assets/image/29.png'), name: 'ข้าวหอมอินทรีย์ 5 สายพันธุ์ ออร์แกนิค', price: '1,299', rating: 4 },

        ]

        const getMayLike = [
            { id: 1, img_src: require('../../../assets/image/35.png'), name: 'กระเป๋าคราม', price: '1,500', rating: 5 },
            { id: 2, img_src: require('../../../assets/image/36.png'), name: 'หมวดไหมคราม', price: '500', rating: 5 },
            { id: 3, img_src: require('../../../assets/image/37.png'), name: 'เสื้อคราม', price: '1,000', rating: 4 },
        ]

        var getFavProductCard = []
        for (let i = 0; i < 3; i++) {
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

        var getMayLikeCard = []
        for (let i = 0; i < 3; i++) {
            getMayLikeCard.push(
                <View style={styles.slide1}>
                    {getMayLike.map((data, index) => {
                        return (
                            <View style={{ flexDirection: 'column', alignContent: 'center', width: '33%', paddingHorizontal: 3 }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={getMayLike[index].img_src}
                                    style={{
                                        width: '100%',
                                        height: 170,
                                        paddingBottom: 10,
                                        paddingTop: 5,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text allowFontScaling={false} numberOfLines={2} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textAlignLeft, MainStyles.mt10, MainStyles.mb5]}>{getMayLike[index].name}</Text>
                                <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text14, MainStyles.textAlignLeft]}>{getMayLike[index].price} บาท</Text>
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
            <View style={[MainStyles.contentBG]}>
                {isAlert}

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
                                        source={require('../../../assets/image/31.png')}
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
                                        source={require('../../../assets/image/31.png')}
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
                                        source={require('../../../assets/image/31.png')}
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
                            {/* <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#666666', paddingVertical: 3, paddingHorizontal: 15, borderRadius: 13 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text12]}>แจ้งแก้ไขข้อมูล</Text>
                                </View>
                            </View> */}
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 10, marginVertical: 10, width: '100%' }}>
                            <View style={{ width: '30.5%', marginLeft: '2%' }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/32.png')}
                                    style={{
                                        width: '100%',
                                        height: 80,
                                    }}
                                />
                            </View>
                            <View style={{ width: '30.5%', marginHorizontal: '2%' }}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/33.png')}
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
                                    source={require('../../../assets/image/81.png')}
                                    style={{
                                        width: '100%',
                                        height: 80,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[MainStyles.content]}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: "column" }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGreenBd, MainStyles.Text20]}>1,000 บาท</Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.LineHeight26, MainStyles.Text12, MainStyles.textEndContent, MainStyles.pl15]}>ราคาต่อชิ้น</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text22]}>ผ้าคราม สิงห์ล้านนา 'Singha Lanna'</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            การทอผ้าไหมยกดอกของชาวลำพูนมีจุดเริ่มต้นใน “คุ้มเจ้า” ซึ่งแต่เดิมแม้จะ
                                            เคยมีการทอผ้าฝ้ายยกดอกกันอยู่ก่อนแล้ว แต่ก็เป็นการทอยกดอกด้วยลวด ลายธรรมดาไม่วิจิตรเท่าใดนัก
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/image/u43.png')}
                                        style={{
                                            width: 35,
                                            height: 35,
                                            borderRadius: 50,
                                            alignSelf: 'center',
                                            marginRight: 10
                                        }}
                                    />
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14, MainStyles.textCenterContent]}>
                                        สินค้าจากชุมชน OTOP
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                                        <Rating
                                            type='star'
                                            ratingCount={5}
                                            imageSize={14}
                                            isDisabled={true}
                                        />
                                    </View>
                                </View>
                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                <View style={{ flexDirection: 'column', padding: 10 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text14]}>
                                        วันที่ขึ้นจดทะเบียนสิ่งบ่งชี้ทางภูมิศาสตร์ (ถ้ามี) :
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        • อยู่ระหว่างยื่นจด GI
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', backgroundColor: '#f1f1f1', padding: 10 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text14]}>
                                        เลขทะเบียน OTOP :
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        • 220100329
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', padding: 10 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text14]}>
                                        ชื่อกลุ่ม:
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        • ลำพูนผ้าไหมไทย
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', backgroundColor: '#f1f1f1', padding: 10 }}>
                                    <View style={[MainStyles.customBadgeYellow, { marginRight: 5 }]}>
                                        <FontAwesome5 name='map-marker-alt' size={20} color="#fff" style={{ alignSelf: 'center' }} />
                                    </View>
                                    <View style={{ flexDirection: 'column', backgroundColor: '#f1f1f1', padding: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            259 หมู่ 4 บ้านขัวแคร่ ถนนไฮเวย์เชียงใหม่-ลำปาง
                                        </Text>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ตำบลศรีบัวบาน อำเภอเมืองลำพูน จังหวัดลำพูน
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <View style={[MainStyles.customBadgeGreen, { marginRight: 5 }]}>
                                        <Fontisto name='email' size={20} color="#fff" style={{ alignSelf: 'center' }} />
                                    </View>
                                    <View style={{ flexDirection: 'column', padding: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            sale@lamphunthaisilk.com
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text22]}>กลุ่มผ้าคราม</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                            ทางกลุ่มลำพูนผ้าไหมไทย ได้เริ่มรวมกลุ่มกันเริ่มทอผ้าไหมยกดอกเมื่อต้นปี พ.ศ.2535 ทางเราที่มีช่างทอที่ชำนาญและมีประสบการณ์ในการทอผ้าไหมซึ่งทุกผืนที่ถูกผลิตขึ้น
                                            มาจากฝีมือคนทอนั้นได้ถูกรังสรรค์และใส่ใจโดยความปราณีตและใช้เวลาค่อนข้างมาก
                                            ในการผลิตเพื่อที่จะกลายเป็นงานศิลปะที่มีความวิจิตรการตาและคงคุณค่าโดยที่สุด
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginTop: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text22]}>คะแนนรีวิว</Text>
                                    </View>
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
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '30%' }}>
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
                                        <View style={{ width: '30%' }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                คุณภาพสินค้า
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
                                        <View style={{ width: '30%' }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                                การจัดส่ง
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

                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={[MainStyles.customBadgeGreen, { marginRight: 5 }]}>
                                                <FontAwesome5 name='shopping-bag' size={18} color="#fff" style={{ alignSelf: 'center' }} />
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textCenterContent]}>
                                                ผลิตภัณฑ์ที่คุณอาจจะชอบ
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>
                                                ดูสินค้าเพิ่มเติม {`>`}
                                            </Text>
                                        </View>
                                    </View>
                          
                                </View>

                                <View style={{ flex: 1, marginTop: 15 , flexDirection: 'row' }}>
                                    <Swiper
                                        height={'100%'}
                                        showsButtons={false}
                                        dot={<View style={{ width: 7, height: 7, backgroundColor: "#d7d7d7", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                        activeDot={<View style={{ width: 7, height: 7, backgroundColor: "#448165", borderRadius: 10, marginRight: 5, marginTop: 10, marginBottom: -70 }} />}
                                    >
                                        {getMayLikeCard}
                                    </Swiper>
                                </View>

                                <View style={{ flexDirection: 'column', marginTop: 30 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={[MainStyles.customBadgeYellow, { marginRight: 5 }]}>
                                                <Fontisto name='clock' size={18} color="#fff" style={{ alignSelf: 'center' }} />
                                            </View>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textCenterContent]}>
                                                สินค้าที่คุณดูล่าสุด
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, alignSelf: "flex-end" }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textAlignRight]}>
                                                ดูสินค้าเพิ่มเติม {`>`}
                                            </Text>
                                        </View>
                                    </View>
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
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                <View style={[styles.cardBottom]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', paddingHorizontal: 20, marginVertical: 5 }}>
                            <FontAwesome5 name='store-alt' size={20} color="#448165" />
                            <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text12, MainStyles.textCenterContent]}>
                                ร้านค้า
                            </Text>
                        </View>
                        <View style={{
                            borderLeftWidth: 1,
                            borderLeftColor: '#e4e4e4',
                        }} />
                        <View style={{ flexDirection: 'column', paddingHorizontal: 20, marginVertical: 5 }}>
                            <FontAwesome5 name='comment-dots' size={20} />
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textCenterContent]}>
                                แชท
                            </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnProductDetailGreen]}
                        >
                            <FontAwesome5 name='id-card-alt' size={20} color="#fff" style={{ paddingRight: 8, marginTop: 13 }} />
                            <Text allowFontScaling={false} style={MainStyles.btnProductDetailGreenText}>ติดต่อผู้ขาย</Text>
                            <Icon name='arrowright' size={15} style={{ paddingLeft: 8, marginTop: 16 }} color="#fff" />

                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={[MainStyles.btnProductDetailYellow]}
                            onPress={() => this.onGetCart()}
                        >
                            <FontAwesome5 name='shopping-cart' size={20} color="#fff" style={{ paddingRight: 8, marginTop: 13 }} />
                            <Text allowFontScaling={false} style={MainStyles.btnProductDetailGreenText}>นำลงตะกร้า</Text>
                            <Icon name='arrowright' size={15} style={{ paddingLeft: 8, marginTop: 16 }} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    cardBottom: {
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 0.5,
        borderColor: "#e0e0e0",
    },
    slide1: {
        flexDirection: 'row'
    },
});