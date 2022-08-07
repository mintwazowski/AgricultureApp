import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    content: {
        // borderBottomColor: 'rgba(204, 204, 204, 1)',
        // borderBottomWidth: 1,
    },
    contentToNavigat: {
        marginLeft: 15,
        marginRight: -5,
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
    },
    notify: {
        width: 20,
        alignSelf: 'center',
        marginRight: 10,
        position: 'absolute',
        backgroundColor: '#e9b266',
        textAlign: 'center',
        borderRadius: 9,
        fontSize: 12,
        fontWeight: 'bold',
        top: -5,
        left: 10
    },

    hamContent: {
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    hamContentLeft: {
        height: '100%',
        width: '30%',
        backgroundColor: '#000',
        opacity: 0.5
    },
    hamContentRight: {
        height: '100%',
        width: '70%',
        backgroundColor: 'white',
        alignSelf: 'flex-end',
    },
    hamClose: {
        alignItems: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        marginRight: 15
    },
    hamLogoContent: {
        alignItems: 'center',
    },
    hamLogo: {
        width: 150,
    },
    hamMenuContent: {
        flexDirection: 'column'
    },
    hamMenuContentListActive: {
        flexDirection: 'row',
        padding: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#e9b266',
    },
    hamMenuContentList: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    BorderBottomGrayWhite: {
        borderWidth: 0.5,
        borderColor: 'rgba(204, 204, 204, 1)',
    },
});