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

    inputFormArea: {
        height: 80,
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: "#bdbdbd",
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderColor: '#e6e6e6',
    },
    inputFormAreaGreen: {
        height: 80,
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Prompt-Regular',
        borderColor: 'rgba(83, 127, 100, 1)',
        borderWidth: 0.5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    inputFormText: {
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
        marginBottom: 3,
    },
});


