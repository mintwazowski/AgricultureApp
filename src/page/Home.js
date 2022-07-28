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
import MainStyles from '../styles/MainStyles';
import InputStyles from '../styles/InputStyles';
import ModalStyles from '../styles/ModalStyles';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';

import { tutorAction } from "../_actions";

import Spinner from 'react-native-loading-spinner-overlay';
import ModalLib from 'react-native-modal';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import moment from 'moment';
import 'moment/locale/th';

export const width1 = Dimensions.get('window').width - 80
const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends Component {

    state = {
        loading: true,
        isCheckAlert: null,
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,

        Main: [],
        MainBanner: [],
        MainCours: [],
    };

    async componentDidMount() {
        this.onGetMain()
    }

    onGetMain() {
        tutorAction.Main().then(e => {
            console.log("Main", e)
            if (e.isSuccess === true) {
                this.setState({
                    Main: e.data,
                    MainBanner: e.data.banners,
                    MainCours: e.data.cours,
                    loading: false,
                })
            } else {
                this.onOpenAlert("Err", "เกิดข้อผิดพลาด")
            }
        });
    }

    onOpenAlert(type, info) {
        alert = (<ModalLib isVisible={true}>
            <View style={ModalStyles.ModalContent}>
                <Text allowFontScaling={false} style={ModalStyles.ModalTitle}>แจ้งเตือน</Text>
                <Text allowFontScaling={false} style={ModalStyles.ModalSubTitle}>{info}</Text>
                <View style={ModalStyles.contentButton}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={ModalStyles.btnOne}
                        onPress={() => this.onCloseAlert()}
                    >
                        <Text allowFontScaling={false} style={ModalStyles.btnOneText}>ตกลง</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalLib>)
        this.setState({
            isCheckAlert: alert,
            loading: false,
        });
    }

    onCloseAlert() {
        this.setState({
            isCheckAlert: null,
            loading: false,
        });
    }

    _renderItem = ({ item, index }) => {
        return (
            <Image
                resizeMode={'cover'}
                // source={{ uri: item.img_src }}
                source={item.img_src}
                style={{
                    width: itemWidth,
                    height: 180,
                    borderRadius: 10,
                }}
            />
        );
    }

    onExampList(category_id, id) {
        this.props.navigation.navigate('ExampDetail', {
            dataInScreen: {
                "category_id": category_id,
                "video_id": id,
            }
        })
    }

    onUpgradePremium() {
        this.props.navigation.navigate('UpgradePremium')
    }

    render() {

        const { isCheckAlert, loading, slider1ActiveSlide, Main, MainCours, MainBanner } = this.state
        var getBannerCard = [
            { id: 1, img_src: require('../../assets/image/tutoring-gc357b775c_1920.jpeg') },
            { id: 2, img_src: require('../../assets/image/books-g929766027_1920.jpeg') },
            { id: 3, img_src: require('../../assets/image/child-gb25b5af9d_1920.jpeg') },
            { id: 4, img_src: require('../../assets/image/study-g59c78e2b2_1920.jpeg') },
        ]

        var MainBannerCard = []
        MainBanner.map((key, index) => {
            MainBannerCard.push(
                { id: MainBanner[index].id, img_src: MainBanner[index].image }
            );
        });

        var MainCoursCard = []
        MainCours.map((key, index) => {
            var createdDate = moment(MainCours[index].created_at, 'YYYY-MM-DD hh:mm:ss').add('y', +543).locale('th').format("ll")
            MainCoursCard.push(
                <TouchableOpacity
                    onPress={() => this.onExampList(MainCours[index].category_id, MainCours[index].id)}
                    activeOpacity={1}
                >
                    <View style={{
                        width: 250,
                        height: 150,
                        paddingRight: 15,
                        paddingBottom: 10,
                        paddingTop: 5,
                    }}>
                        <ImageBackground
                            // source={{ uri : MainCours[index].image }}
                            source={require('../../assets/image/tutoring-gc357b775c_1920.jpeg')}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 6 }}
                        >
                        </ImageBackground>
                    </View>
                    <Text allowFontScaling={false} style={[MainStyles.Text16, MainStyles.textGray]} numberOfLines={1} ellipsizeMode="tail">
                        {MainCours[index].name}
                    </Text>
                    <Text allowFontScaling={false} style={[MainStyles.Text12, MainStyles.textGray]}>
                        {createdDate}
                    </Text>
                </TouchableOpacity>
            );
        });

        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/image/bg1.jpg')}
            >
                {loading ? <Spinner visible={true} overlayColor={"rgba(0,0,0, 0.3)"} color={"#9D0B0B"} /> : null}
                {isCheckAlert}
                <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'always', top: 'never' }}>
                    <Text allowFontScaling={false} style={[MainStyles.title, MainStyles.textGrayBd, MainStyles.mx15, MainStyles.mt15]}>ติวเตอร์</Text>
                    <View style={[MainStyles.mx15, { zIndex: 999 }]}>
                        <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: { height: 2 },
                            shadowOpacity: 0.05,
                            shadowRadius: 2,
                            borderWidth: 1,
                            borderColor: '#f3f3f3',
                            paddingBottom: 15,
                            paddingLeft: 15,
                            paddingTop: 15,
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            <View style={{ width: '70%' }}>
                                <Text allowFontScaling={false} style={[MainStyles.Text20, MainStyles.textGray]}>อัพเกรดเป็น พรีเมียม</Text>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this.onUpgradePremium()}
                                    style={[MainStyles.btnPurpleWhitemini, { marginTop: 10 }]}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnPurpleWhiteTextmini}>ได้ที่นี้</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Image
                                    resizeMode={'contain'}
                                    style={{
                                        width: '100%',
                                        height: 70,
                                    }}
                                    source={require('../../assets/logoicon.png')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        marginTop: -50,
                        backgroundColor: '#fff',
                        // borderTopLeftRadius: 20,
                        // borderTopRightRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: { height: 2 },
                        shadowOpacity: 0.05,
                        shadowRadius: 2,
                        borderWidth: 1,
                        borderColor: '#f3f3f3',
                        paddingBottom: 15,
                        paddingTop: 35,
                        flex: 1
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <View style={[{ marginTop: 15 }]}>
                                <Carousel
                                    ref={c => this._slider1Ref = c}
                                    data={getBannerCard}
                                    renderItem={this._renderItem}
                                    sliderWidth={sliderWidth}
                                    itemWidth={itemWidth}
                                    hasParallaxImages={true}
                                    firstItem={SLIDER_1_FIRST_ITEM}
                                    inactiveSlideScale={0.94}
                                    inactiveSlideOpacity={0.7}
                                    // inactiveSlideShift={20}
                                    containerCustomStyle={styles.slider}
                                    contentContainerCustomStyle={styles.sliderContentContainer}
                                    loop={true}
                                    loopClonesPerSide={2}
                                    autoplay={true}
                                    autoplayDelay={500}
                                    autoplayInterval={3000}
                                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                                />
                                <Pagination
                                    dotsLength={getBannerCard.length}
                                    activeDotIndex={slider1ActiveSlide}
                                    containerStyle={styles.paginationContainer}
                                    dotColor={'rgba(157,11,11, 0.92)'}
                                    dotStyle={styles.paginationDot}
                                    inactiveDotColor={'#9D0B0B'}
                                    inactiveDotOpacity={0.4}
                                    inactiveDotScale={0.6}
                                    carouselRef={this._slider1Ref}
                                    tappableDots={!!this._slider1Ref}
                                />
                            </View>

                            <View style={[MainStyles.content]}>

                                <View style={[MainStyles.mb15]}>
                                    <Text allowFontScaling={false} style={[MainStyles.Text22, MainStyles.textPurple]}>คอร์สออนไลน์</Text>
                                    <ScrollView style={[{ flex: 1, marginTop: 10 }]} horizontal showsHorizontalScrollIndicator={false}>
                                        {MainCoursCard}
                                    </ScrollView>
                                </View>


                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView >
            </ImageBackground >
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
    }
});

