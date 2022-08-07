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

export default class SourceOfProduct extends Component {

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
                            <View style={{ flexDirection: 'row', width: '100%' , marginTop:15 }}>
                                <View style={{ width: '50%' ,paddingHorizontal:2 }}>
                                    <RNPickerSelect
                                        useNativeAndroidPickerStyle={false}
                                        style={selectForm}
                                        placeholder={{ label: 'ค้นหาตามภูมิภาค' }}
                                        onValueChange={(value, key) => this.onChangeType(value)}
                                        items={type}
                                        Icon={() => {
                                            return <Icon
                                                name="angle-down"
                                                type="font-awesome"
                                                size={18}
                                                underlayColor="transparent"
                                                iconStyle={styles.editIcon}
                                            />
                                        }}
                                    />
                                </View>
                                <View style={{ width: '50%' ,paddingHorizontal:2}}>
                                    <RNPickerSelect
                                        useNativeAndroidPickerStyle={false}
                                        style={selectForm}
                                        placeholder={{ label: 'ค้นหาตามจังหวัด' }}
                                        onValueChange={(value, key) => this.onChangeType(value)}
                                        items={province}
                                        Icon={() => {
                                            return <Icon
                                                name="angle-down"
                                                type="font-awesome"
                                                underlayColor="transparent"
                                                size={18}
                                                iconStyle={styles.editIcon}
                                            />
                                        }}  
                                    />
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
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.textAlignCenter, MainStyles.textCenterContent]}>แนะนำสถานที่ท่องเที่ยวรอบๆตัวคุณ</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignContent: 'flex-end',
                                        marginLeft:10
                                    }}
                                >
                                    <RNPickerSelect
                                        useNativeAndroidPickerStyle={false}
                                        style={selectForm}
                                        placeholder={{ label: 'ค้นหาตามระยะทาง' }}
                                        onValueChange={(value, key) => this.onChangeType(value)}
                                        items={province}
                                        Icon={() => {
                                            return <Icon
                                                name="angle-down"
                                                type="font-awesome"
                                                underlayColor="transparent"
                                                size={18}
                                                iconStyle={styles.editIcon}
                                            />
                                        }}  
                                    />
                                </View>
                                   
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <View style={{ width: '35%' }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/image/1.png')}
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                                <View style={{ width: '65%', paddingLeft: 15 }}>
                                    <View style={[MainStyles.mt15 , MainStyles.mb10 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textBD]}>ลำพูนผ้าไหมไทย</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-end' , alignItems:'center' , paddingLeft:15}] } >
                                            <Icon name='heart-o' size={15} color="#000" style={{ marginEnd:6 }}/>
                                        </View>
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10]}>
                                        ทางกลุ่มลำพูนผ้าไหมไทย ได้เริ่มรวมกลุ่มกันเริ่มทอผ้าไหม
                                        ยกดอกเมื่อต้นปี พ.ศ.2535 ทางเราที่มีช่างทอที่ชำนาญและ
                                        มีประสบการณ์ในการทอผ้าไหมซึ่งทุกผืนที่ถูกผลิตขึ้น
                                    </Text>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>ลำพูน</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-start' , alignItems:'center' , paddingLeft:15}] } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
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
                                    <View style={[MainStyles.mt15 , MainStyles.mb10 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text18, MainStyles.textBD]}>เก็บสตรอเบอร์รี่ที่ลำพูน</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-end' , alignItems:'center' , paddingLeft:15}] } >
                                            <Icon name='heart-o' size={15} color="#000" style={{ marginEnd:6 }}/>
                                        </View>
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGrayLight, MainStyles.Text10]}>ถือได้ว่าเป็นไร่สตรอว์เบอร์รีไร่แรก ๆ ของที่นี่เปิดไร่ทำการท่องเที่ยวเชิงเกษตร เป็นไร่สตรอว์เบอร์รีที่โอบล้อมไปด้วยขุนเขาอันอุดมสมบูรณ์และเงียบสงบ
                                    </Text>
                                    <View style={[MainStyles.mt15 ,{ flexDirection: "row" }]}>
                                        <View style={ {flexDirection: "row"}}>
                                            <Icon name='map-marker'size={15} color="#448165" style={{ paddingHorizontal:8 }} />
                                            <Text style={[MainStyles.textGreen, MainStyles.Text14]}>ลำพูน</Text>
                                        </View>
                                        
                                        <View style={[MainStyles.textAlignRight , {flex: 1 , flexDirection: "row" , justifyContent:'flex-start' , alignItems:'center' , paddingLeft:15}] } >
                                            <Icon name='star' size={15} color="#e9b266" style={{ marginEnd:6 }}/>
                                            <Text allowFontScaling={false} style={[MainStyles.textAlignRight]} >5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginVertical: 5, alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'column', alignContent: 'center', width: '50%' }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={{
                                            width: '70%',
                                            backgroundColor: '#2eb16d',
                                            borderRadius: 9,
                                            paddingVertical: 6,
                                            alignSelf: 'center',
                                        }}
                                    >
                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>โหลดเพิ่มเติม</Text>
                                    </TouchableOpacity>
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
    placeholder:{
        color:"#000"
    },
    iconContainer: {
        top: 12,
        right: 15,
    },
});
