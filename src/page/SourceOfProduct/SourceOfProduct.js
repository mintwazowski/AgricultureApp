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

import Search from '../Search/Search'
import MainStyles from '../../styles/MainStyles';

import RNPickerSelect from 'react-native-picker-select';
import MapView from 'react-native-maps';
import TopTabNavigator from '../../routes/TopTabNavigator';

export default class SourceOfProduct extends Component {

    onChangeType(e, data) {

    }

    render() {
        const type = [
            { label: "เหนือ", value: "เหนือ" },
            { label: "ใต้", value: "ใต้" },
        ]

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0.15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>
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
                            {/* <View style={{ flexDirection: 'row', width: '100%' }}>
                                <RNPickerSelect
                                    useNativeAndroidPickerStyle={false}
                                    style={selectForm}
                                    placeholder={{ label: 'เลือกข้อมูลบัญชีธนาคาร' }}
                                    onValueChange={(value, key) => this.onChangeType(value)}
                                    items={type}
                                    placeholderTextColor={"#000"}
                                />
                                <RNPickerSelect
                                    useNativeAndroidPickerStyle={false}
                                    style={selectForm}
                                    placeholder={{ label: 'เลือกข้อมูลบัญชีธนาคาร' }}
                                    onValueChange={(value, key) => this.onChangeType(value)}
                                    items={type}
                                    placeholderTextColor={"#000"}
                                />
                            </View> */}
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <View
                                    style={{
                                        width: '50%',
                                        backgroundColor: 'rgba(215, 215, 215, 1)',
                                        borderRadius: 5,
                                        paddingVertical: 9,
                                        paddingHorizontal: 9,
                                        alignSelf: 'center',
                                        marginRight: 5
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnBlueWhiteTextDark}>ค้นหาตามภูมิภาค </Text>
                                </View>
                                <View
                                    style={{
                                        width: '50%',
                                        backgroundColor: 'rgba(215, 215, 215, 1)',
                                        borderRadius: 5,
                                        paddingVertical: 9,
                                        paddingHorizontal: 9,
                                        alignSelf: 'center',
                                    }}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnBlueWhiteTextDark}>ค้นหาตามจังหวัด </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
               
                <View style={{ flex: 1 }}>
                    <View style={[MainStyles.contentBG]}>
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            style={[styles.map]}
                        />
                        <View style={[MainStyles.m15]}>
                            <View style={[MainStyles.my15, { flexDirection: "row" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>แนะนำสถานที่ท่องเที่ยวรอบๆตัวคุณ</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignContent: 'flex-end',
                                    }}
                                >
                                    {/* <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignRight]}> </Text> */}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <View style={{ width: '35%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/36.png')}
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ width: '65%', paddingLeft: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textBD]}>ลำพูนผ้าไหมไทย</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        ทางกลุ่มลำพูนผ้าไหมไทย ได้เริ่มรวมกลุ่มกันเริ่มทอผ้าไหม
                                        ยกดอกเมื่อต้นปี พ.ศ.2535 ทางเราที่มีช่างทอที่ชำนาญและ
                                        มีประสบการณ์ในการทอผ้าไหมซึ่งทุกผืนที่ถูกผลิตขึ้น
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <View style={{ width: '35%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/37.png')}
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ width: '65%', paddingLeft: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textBD]}>เก็บสตรอเบอร์รี่ที่ลำพูน</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        ทางกลุ่มลำพูนผ้าไหมไทย ได้เริ่มรวมกลุ่มกันเริ่มทอผ้าไหม
                                        ยกดอกเมื่อต้นปี พ.ศ.2535 ทางเราที่มีช่างทอที่ชำนาญและ
                                        มีประสบการณ์ในการทอผ้าไหมซึ่งทุกผืนที่ถูกผลิตขึ้น
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <View style={{ width: '35%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/38.png')}
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ width: '65%', paddingLeft: 15 }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textBD]}>ลำพูนผ้าไหมไทย</Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text14]}>
                                        ทางกลุ่มลำพูนผ้าไหมไทย ได้เริ่มรวมกลุ่มกันเริ่มทอผ้าไหม
                                        ยกดอกเมื่อต้นปี พ.ศ.2535 ทางเราที่มีช่างทอที่ชำนาญและ
                                        มีประสบการณ์ในการทอผ้าไหมซึ่งทุกผืนที่ถูกผลิตขึ้น
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>
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


const selectForm = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#f1f1f1",
        borderWidth: 1.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#d7d7d7',
        color: "#fff",
        width: '100%'
    },
    inputAndroid: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        borderColor: "#f1f1f1",
        borderWidth: 1.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#d7d7d7',
        width: '100%'
    },
});