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

import Icon from 'react-native-vector-icons/AntDesign';

const TransactionMenu = ({ isActive }) => {
    return (
        <View style={[styles.content]}>
            <View style={styles.contentMenu}>
                <View style={isActive === "chat" ? styles.customBadgeYellow : styles.customBadgeGray}>
                    <Icon name='search1' style={styles.customIcon} size={25} color="#fff" />
                </View>
                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แชท</Text>
                <View style={isActive === "chat" ? styles.textActive : styles.textUnactive}></View>
            </View>

            <View style={styles.contentMenu}>
                <View style={isActive === "order" ? styles.customBadgeYellow : styles.customBadgeGray}>
                    <Icon name='search1' style={styles.customIcon} size={25} color="#fff" />
                </View>
                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                <View style={isActive === "order" ? styles.textActive : styles.textUnactive}></View>
            </View>

            <View style={styles.contentMenu}>
                <View style={isActive === "noti" ? styles.customBadgeYellow : styles.customBadgeGray}>
                    <Icon name='search1' style={styles.customIcon} size={25} color="#fff" />
                </View>
                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แจ้งเตือน</Text>
                <View style={isActive === "noti" ? styles.textActive : styles.textUnactive}></View>
            </View>

            <View style={styles.contentMenu}>
                <View style={isActive === "fav" ? styles.customBadgeYellow : styles.customBadgeGray}>
                    <Icon name='search1' style={styles.customIcon} size={25} color="#fff" />
                </View>
                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>รายการโปรด</Text>
                <View style={isActive === "fav" ? styles.textActive : styles.textUnactive}></View>
            </View>

            <View style={styles.contentMenu}>
                <View style={isActive === "event" ? styles.customBadgeYellow : styles.customBadgeGray}>
                    <Icon name='search1' style={styles.customIcon} size={25} color="#fff" />
                </View>
                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>กิจกรรม</Text>
                <View style={isActive === "event" ? styles.textActive : styles.textUnactive}></View>
            </View>

        </View >
    );
}

export default TransactionMenu

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignSelf: "center",
    },
    contentMenu: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    textUnactive: {
        paddingTop: 5
    },
    textActive: {
        borderBottomColor: "#e9b266",
        borderBottomWidth: 1,
        width: 40,
        paddingTop: 5
    },
    customBadgeGray: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#999999",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    customBadgeYellow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    customIcon: {
        justifyContent: "center",
        alignSelf: "center",
    }
});