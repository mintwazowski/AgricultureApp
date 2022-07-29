import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    contentInputForm: {
        marginBottom: 10,
    },
    inputForm: {
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 14,
        color: '#333333',
        borderWidth: 1,
        borderColor: 'rgba(83, 127, 100, 1)',
    },
    inputFormTextLight: {
        fontSize: 14,
        color: 'rgba(83, 127, 100, 1)',
        fontFamily: 'Prompt-Regular',
        marginBottom: 3,
    },

    inputFormRaio: {
        flexDirection: 'row',
    },
    inputFormRaioSquare: {
        height: 15,
        width: 15,
        backgroundColor: '#fff',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        marginRight: 10,
    },
    inputFormRaioSquareActive: {
        height: 15,
        width: 15,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: 'rgba(83, 127, 100, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    inputFormRaioSquareText: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        color: 'rgba(83, 127, 100, 1)',
        textAlign: 'center'
    },
});


