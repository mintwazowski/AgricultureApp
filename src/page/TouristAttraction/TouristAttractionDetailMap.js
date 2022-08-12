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
    KeyboardAvoidingView,
} from 'react-native';

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

import RNPickerSelect from 'react-native-picker-select';
import MapView from 'react-native-maps';
import TopTabNavigator from '../../routes/TopTabNavigator';

export default class TouristAttractionDetailMap extends Component {

    onChangeType(e, data) {

    }


    onBack() {
        this.props.navigation.navigate('Home')
    }

    render() {
        const type = [
            { label: "เหนือ", value: "เหนือ" },
            { label: "ใต้", value: "ใต้" },
        ]

        const province = [
            { label: "กรุงเทพฯ", value: "กรุงเทพฯ" },
            { label: "เชียงใหม่", value: "เชียงใหม่" },
        ]
        const distance = [
            { label: "100 กม.", value: "100 กม." },
            { label: "200 กม.", value: "200 กม." },
            { label: "300 กม.", value: "300 กม." },
            { label: "400 กม.", value: "400 กม." },
        ]

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                    scrollEventThrottle={600}
                >
                    <View style={{ flex: 0.4 }}>
                        <View style={[MainStyles.contentBG]}>
                            <View style={[MainStyles.m15]}>
                                {/* Search Content */}
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <View style={{ justifyContent: 'center', width: '10%' }}>
                                        <TouchableOpacity
                                            onPress={() => this.onBack()}
                                        >
                                            <Image
                                                resizeMode={'cover'}
                                                source={require('../../../assets/icon/back.png')}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '75%' }}>
                                        <Search />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignContent: 'center', width: '15%', marginLeft: 5 }}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/icon/pin.png')}
                                            style={{
                                                width: 22,
                                                height: 22,
                                                alignSelf: 'center'
                                            }}
                                        />
                                        <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text10]}>ค้นหารอบตัว</Text>
                                    </View>
                                </View>
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.Text22, MainStyles.textAlignCenter, MainStyles.textGrayLight]}>ผ้าย้อมครามบ้านโนนเรือ</Text>
                            <Text allowFontScaling={false} style={[MainStyles.Text22, MainStyles.textAlignCenter, MainStyles.textGrayLight]}>จังหวัดสกลนคร</Text>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[MainStyles.btnYellowSmall120, { flexDirection: 'row', alignSelf: 'center' }]}
                            >
                                <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text16, MainStyles.ml15, MainStyles.textCenterContent]}>นำทาง</Text>
                                <Icon name='long-arrow-right' size={18} color="#fff" style={{ paddingHorizontal: 6, alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginHorizontal: 15 }}>
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            style={[styles.map]}
                        />
                    </View>
                </ScrollView>
            </View >
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
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',

    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});


const selectKM = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#2eb16d",
        borderWidth: 1,
        borderRadius: 7,
        paddingVertical: 0,
        paddingHorizontal: 15,
        backgroundColor: '#2eb16d',
        width: '100%',
    },
    inputAndroid: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#2eb16d",
        borderWidth: 1,
        borderRadius: 7,
        paddingVertical: 0,
        paddingHorizontal: 15,
        backgroundColor: '#2eb16d',
        width: '100%',
        // textAlign:'center',
    },
    placeholder: {
        color: "#fff"
    },
    iconContainer: {
        top: Platform.OS === "ios" ? 0 : 6,
        right: Platform.OS === "ios" ? 10 : 10,
    },
});

const selectForm = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#d7d7d7",
        borderWidth: 1,
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#d7d7d7',
        width: '100%',
    },
    inputAndroid: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#d7d7d7",
        borderWidth: 1,
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#d7d7d7',
        width: '100%',
        // textAlign:'center',
    },
    placeholder: {
        color: "#000"
    },
    iconContainer: {
        top: Platform.OS === "ios" ? 5 : 12,
        right: Platform.OS === "ios" ? 10 : 15,
    },
});
