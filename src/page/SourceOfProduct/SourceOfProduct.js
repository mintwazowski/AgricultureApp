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

export default class SourceOfProduct extends Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} >

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

                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView >
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

    }
});