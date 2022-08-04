import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ModalContent: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 7,
    },

    ModalTitle: {
        fontSize: 20,
        color: '#33333',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    content2Button: {
        width: '85%',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 15
    },
    contentButton: {
        flexDirection: "row",
    },
    btnOne: {
        width: '100%',
        backgroundColor: '#448165',
        borderRadius: 40,
        padding: 7,
        marginTop: 10
    },
    btnOneText: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'Prompt-Bold',
        textAlign: 'center',
    },
    btnOneYellow: {
        width: '100%',
        backgroundColor: '#e9b266',
        borderRadius: 40,
        padding: 7,
        marginTop: 10
    },
});
