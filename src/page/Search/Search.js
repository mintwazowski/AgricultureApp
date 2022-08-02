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
import MainStyles from '../../styles/MainStyles';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Search extends Component {

    state = {
        search: "",
    };

    handleChange(e) {
        var value = e.nativeEvent.text;
        this.setState({
            search: value
        })
    }

    render() {
        const { search } = this.state
        return (
            <View style={[styles.content]}>
                <View style={styles.inputFormContent}>
                    <TextInput
                        clearButtonMode="always"
                        allowFontScaling={false}
                        style={[styles.inputForm]}
                        placeholder="ค้นหาข้อมูลที่ต้องการ"
                        placeholderTextColor={"#838383"}
                        onChange={e => this.handleChange(e)}
                        value={search}
                    />
                </View>
                <View style={styles.iconInputFormContent}>
                    <Icon name='search1' style={{ marginTop: 6 }} size={30} color="#448165" />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(83, 127, 100, 1)',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },
    inputFormContent: {
        width: '90%',
    },
    inputForm: {
        height: 45,
        fontSize: 14,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    iconInputFormContent: {
        width: '10%',
    },
    iconInputFormSearch: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        flex: 1
    }
});
