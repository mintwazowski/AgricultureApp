import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    content: {
        borderBottomColor: 'rgba(204, 204, 204, 1)',
        borderBottomWidth: 1,
    },
    contentToNavigat: {
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 150,
        height: 150
    },
    hamMenu: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginRight: 10
    },
    icon2: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginRight: 15
    },
    icon3: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    }
});