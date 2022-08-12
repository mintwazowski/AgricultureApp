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
    Modal
} from 'react-native';

import NavigatorStyles from '../styles/NavigatorStyles';
import MainStyles from '../styles/MainStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default class TopTabNavigator extends Component {

    state = {
        showMenu: false
    }

    onNextToCart = () => {
        this.props.navigation.navigate('OrderList')
    }
    onNextToChat() {
        this.props.navigation.navigate('ChatList')
    }
    onShowMenuBur() {
        this.setState({
            showMenu: true
        })
    }
    onCloseMenuBur() {
        this.setState({
            showMenu: false
        })
    }

    onGoToMenu(type) {
        this.setState({ showMenu: false })
        if (type === "Home") {
            this.props.navigation.navigate('Home')
        } else if (type === "TouristAttraction") {
            this.props.navigation.navigate('TouristAttraction')
        } else if (type === "Product") {
            this.props.navigation.navigate('Product')
        } else if (type === "SourceOfProduct") {
            this.props.navigation.navigate('SourceOfProduct')
        } else if (type === "DashboardSeller") {
            this.props.navigation.navigate('DashboardSeller')
        } else if (type === "Market") {
            this.props.navigation.navigate('Market')
        } else if (type === "SourceOfProductMain") {
            this.props.navigation.navigate('SourceOfProductMain')
        } else if (type === "Franchise") {
            this.props.navigation.navigate('Franchise')
        } else if (type === "History") {
            this.props.navigation.navigate('History')
        }
    }

    render() {
        const { showMenu } = this.state
        return (
            <View style={[NavigatorStyles.content]}>
                <View style={[NavigatorStyles.contentToNavigat]}>
                    <Image
                        resizeMode={'contain'}
                        style={[NavigatorStyles.logo]}
                        source={require('../../assets/logo.jpeg')}
                    />
                    <View style={[NavigatorStyles.hamMenu]}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={NavigatorStyles.icon2}
                            onPress={() => this.onNextToCart()}
                        >
                            <Icon name='shopping-cart' size={20} color="#448165" />
                            <Text style={[NavigatorStyles.notify]}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={NavigatorStyles.icon2}
                            onPress={() => this.onNextToChat()}
                        >
                            <Icon name='comment-alt' size={20} color="#448165" />
                            <Text style={[NavigatorStyles.notify]}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={NavigatorStyles.icon2}
                            onPress={() => this.onShowMenuBur()}
                        >
                            <Icon name='bars' size={20} color="#448165" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    visible={showMenu}
                    animationType="fade"
                    transparent={true}
                >
                    <View style={[NavigatorStyles.hamContent]} >
                        <TouchableOpacity
                            style={[NavigatorStyles.hamContentLeft]}
                            onPress={() => this.onCloseMenuBur()}
                        >
                        </TouchableOpacity>
                        <View style={[NavigatorStyles.hamContentRight]} >
                            <TouchableOpacity
                                activeOpacity={1}
                                style={NavigatorStyles.hamClose}
                                onPress={() => this.onCloseMenuBur()}
                            >
                                <AntDesign name='closecircle' size={25} color="#448165" />
                            </TouchableOpacity>
                            <View style={[NavigatorStyles.hamLogoContent]} >
                                <Image
                                    resizeMode={'contain'}
                                    style={[NavigatorStyles.hamLogo]}
                                    source={require('../../assets/logo.jpeg')}
                                />
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={[NavigatorStyles.hamMenuContent]} >
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentListActive}
                                        onPress={() => this.onGoToMenu('Home')}
                                    >
                                        <Icon name='home' size={25} color="#fff" />
                                        <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>หน้าหลัก</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('TouristAttraction')}
                                    >
                                        <MaterialIcons name='park' size={25} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>แหล่งท่องเที่ยว</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('Product')}
                                    >
                                        <MaterialIcons name='shopping-cart' size={25} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>สินค้าเกษตร</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('Market')}
                                    >
                                        <Entypo name='shop' size={25} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>ตลาดต้องชม ตลาดชุมชน</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('SourceOfProductMain')}
                                    >
                                        <FontAwesome5 name='mountain' size={20} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>แหล่งผลิตสินค้าเกษตร</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('Franchise')}
                                    >
                                        <FontAwesome5 name='building' size={23} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>ผู้ประกอบการ Franchise</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('Home')}
                                    >
                                        <FontAwesome5 name='calendar' size={23} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>กิจกรรมงานขายสินค้าเกษตร</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('Home')}
                                    >
                                        <MaterialIcons name='location-pin' size={28} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>เส้นทางท่องเที่ยว</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('DashboardSeller')}
                                    >
                                        <FontAwesome5 name='phone-alt' size={20} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>ติดต่อเรา</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={NavigatorStyles.hamMenuContentList}
                                        onPress={() => this.onGoToMenu('History')}
                                    >
                                        <FontAwesome5 name='history' size={20} color="#448165" />
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>ประวัติการเข้าชม</Text>
                                    </TouchableOpacity>
                                    <View style={[NavigatorStyles.BorderBottomGrayWhite]} />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
