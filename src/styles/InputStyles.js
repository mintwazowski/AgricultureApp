import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    contentInputForm: {
        marginBottom: 10,
    },
    contentInputFormIsPad: {
        marginBottom: 10,
        width: Platform.isPad ? '49%' : '100%',
        paddingRight: '2%'
    },
    inputFormText: {
        fontSize: Platform.isPad ? 26 : 20,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
        marginBottom: Platform.isPad ? 5 : 3,
    },
    inputFormTextLight: {
        fontSize: 14,
        color: '#838383',
        fontFamily: 'Prompt-Regular',
        marginBottom: 3,
    },
    inputForm: {
        height: Platform.isPad ? 55 : 45,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 14,
        color: '#333333'
    },
    inputFormWhite: {
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 7,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        color: '#333333'
    },
    inputFormPassContent: {
        flexDirection: 'row',
        width: '100%',
    },
    inputFormPass: {
        width: '95%',
        height: Platform.isPad ? 55 : 45,
        backgroundColor: '#f1f1f1',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: Platform.isPad ? 26 : 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        color: '#333333',
    },
    inputFormPassIcon: {
        width: '5%',
        backgroundColor: '#f1f1f1',
        height: Platform.isPad ? 55 : 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    inputFormTextArea: {
        height: Platform.isPad ? 300 : 200,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: Platform.isPad ? 26 : 20,
        color: '#333333'
    },
    inputFormTextAreaSm: {
        height: 100,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        color: '#333333'
    },

    DarkSearch: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    DarkSearchHaveMLR6: {
        marginLeft: 6,
        marginRight: 6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    DarkSearchContentInput: {
        width: '85%',
    },
    DarkSearchInput: {
        height: 45,
        backgroundColor: '#f1f1f1',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    DarkSearchContentIcon: {
        width: '15%',
        backgroundColor: '#f1f1f1',
        height: 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    DarkSearchIcon: {
        height: 18,
    },


    WhiteSearch: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    WhiteSearchContentInput: {
        width: '85%',
    },
    WhiteSearchInput: {
        height: 45,
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        backgroundColor: '#ffff',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    WhiteSearchInputLeft: {
        height: 45,
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
        backgroundColor: '#ffff',
        paddingLeft: 0,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },
    WhiteSearchContentIcon: {
        width: '15%',
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
        backgroundColor: '#ffff',
        height: 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    WhiteSearchContentIconLeft: {
        width: '15%',
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        backgroundColor: '#ffff',
        height: 45,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
    },
    WhiteSearchIcon: {
        height: 18,
    },

    contentFormMt10: {
        marginTop: 10
    },
    contentFormMt20: {
        marginTop: 20
    },
    contentForm: {
        marginBottom: 20
    },



    inputFormError: {
        height: 45,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        color: '#333333',
        borderColor: "#D0021B",
        borderWidth: 1
    },
    inputFormHaveMB10: {
        height: 45,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        marginBottom: 10,
        color: '#333333',
    },
    inputFormTextRed: {
        color: '#D0021B',
    },
    inputFormArea: {
        height: 100,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Prompt-Regular',
        fontSize: 14,
    },
    inputFormAreaDark: {
        height: 150,
        backgroundColor: '#d8d8d8',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
    },

    inputFormRaioNoMb: {
        flexDirection: 'row',
        marginTop: 5,
    },
    inputFormRaioNoMbCol: {
        flexDirection: 'column',
        marginTop: 5,
    },
    inputFormRaio: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    inputFormRaio2Data: {
        flexDirection: 'row',
        width: '50%'
    },
    inputFormRaio2DataOther: {
        flexDirection: 'row',
        width: '25%',
    },
    inputFormRaio2DataOtherInput: {
        flexDirection: 'row',
        width: '75%'
    },
    inputFormRaio3DataOther: {
        flexDirection: 'row',
        width: '33.33%',
    },
    inputFormRaio2DataOtherInputText: {
        height: 45,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        marginBottom: 10,
        width: '100%'
    },
    inputFormRaio2DataCircle: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        marginRight: 15,
    },
    inputFormRaio2DataCircleActive: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#9D0B0B',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    inputFormRaio2DataCircleInsideActive: {
        height: 12,
        width: 12,
        borderRadius: 50,
        backgroundColor: '#9D0B0B'
    },
    inputFormRaio2DataText: {
        fontSize: 16,
        fontFamily: 'Prompt-Regular',
        color: '#333333',
        textAlign: 'center'
    },
    inputFormRaio2DataText20: {
        fontSize: 20,
        fontFamily: 'Prompt-Regular',
        color: '#333333',
        textAlign: 'center'
    },
    inputFormRaio2DataTextLight: {
        fontSize: 18,
        fontFamily: 'Prompt-Regular',
        color: '#838383',
        // textAlign: 'center'
    },
    inputFormRaioText: {
        fontSize: 18,
        fontFamily: 'Prompt-Regular',
        color: '#333333',
        lineHeight: 24,
        flexShrink: 1,
        width: '85%'
    },

    contentInputFormDate: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10
    },
    inputFormDateContent: {
        width: '85%',
    },
    inputFormDate: {
        height: 45,
        backgroundColor: '#f1f1f1',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        color: '#333333',
    },
    inputFormDateIcon: {
        width: '15%',
        backgroundColor: '#f1f1f1',
        height: 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    inputFormDateWhite: {
        height: 45,
        backgroundColor: '#ffff',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        color: '#333333',
    },
    inputFormDateIconWhite: {
        width: '15%',
        backgroundColor: '#ffff',
        height: 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        borderColor: "#f1f1f1",
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
    },
    inputFormDateIconimg: {
        height: 25,
    },
    inputFormUsernameIconimg: {
        height: 20,
    },


    contentInputOnlyLine: {
        marginBottom: 10,
        marginTop: 10,
    },
    inputOnlyLine: {
        height: 45,
        backgroundColor: '#ffff',
        borderRadius: 7,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: 'Prompt-Regular',
        fontSize: 24,
        color: '#00A4E4',
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4',
    },

    inputFormRaioColumn: {
        flexDirection: 'column',
        marginTop: 5,
    },
    inputFormRaio2Row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputFormRaio2DataOther: {
        flexDirection: 'row',
        width: '25%',
    },

    InputDatePicker: {
        fontSize: 20,
        color: '#838383',
        fontFamily: 'Prompt-Regular',
        marginTop: 10,
    },


    contentInputFormIdCard: {
        flexDirection: 'row',
        marginBottom: 10
    },
    InputFormIdCard: {
        width: '80%',
        height: 45,
        backgroundColor: '#f1f1f1',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 18,
    },
    inputFormiconIdCard: {
        marginLeft: 10,
        height: 45,
        width: '17%',
    },
    inputFormTextIdCard: {
        fontSize: 16,
        color: '#3aa4e6',
        fontFamily: 'Prompt-Regular',
    },



    inputFormError: {
        height: 45,
        backgroundColor: '#ffff',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#D0021B'
    },
    InputFormIdCardError: {
        width: '80%',
        height: 45,
        backgroundColor: '#ffff',
        borderRadius: 7,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#D0021B'
    },
    inputFormDateError: {
        height: 45,
        backgroundColor: '#ffff',
        paddingLeft: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        flex: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopColor: '#D0021B',
        borderBottomColor: '#D0021B',
        borderLeftColor: '#D0021B',
    },
    inputFormDateIconError: {
        width: '15%',
        backgroundColor: '#ffff',
        height: 45,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopColor: '#D0021B',
        borderBottomColor: '#D0021B',
        borderRightColor: '#D0021B',
    },
    InputDatePickerError: {
        fontSize: 20,
        color: '#D0021B',
        fontFamily: 'Prompt-Regular',
        marginTop: 10,
    },
    // selectArrow:{
    //     fontSize: 20, 
    //     color: '#6f6f6f',
    //     fontFamily: 'Prompt-Regular',
    //     borderColor:"#f1f1f1",
    //     borderWidth: 1.5,
    //     borderRadius: 7,
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     marginBottom: 10
    // },
    selectSetContentInput: {
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 7,
        paddingLeft: 20,
        // paddingRight: 20,
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        color: '#333333',
        borderColor: "#f1f1f1",
        borderWidth: 1.5,
        justifyContent: 'center'
    },
    selectSetText: {
        fontFamily: 'Prompt-Regular',
        fontSize: 20,
        color: '#6f6f6f',
    },
    selectFormArrow: {
        position: 'absolute',
        zIndex: 1,
        right: 5,
        top: 20,
    },
    selectFormArrowIcon: {
        height: 8,
    },



});


