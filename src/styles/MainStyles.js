import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    contentBG: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        margin: 15,
        flex: 1,
    },

    m5: { margin: 5 },
    m10: { margin: 10 },
    m15: { margin: 15 },
    m20: { margin: 20 },
    mt5: { marginTop: 5 },
    mt10: { marginTop: 10 },
    mt15: { marginTop: 15 },
    mt20: { marginTop: 20 },
    mt30: { marginTop: 30 },
    mt50: { marginTop: 50 },
    mb5: { marginBottom: 5 },
    mb10: { marginBottom: 10 },
    mb15: { marginBottom: 15 },
    mb20: { marginBottom: 20 },
    ml5: { marginLeft: 5 },
    ml10: { marginLeft: 10 },
    ml15: { marginLeft: 15 },
    ml20: { marginLeft: 20 },
    mr5: { marginRight: 5 },
    mr10: { marginRight: 10 },
    mr15: { marginRight: 15 },
    mr20: { marginRight: 20 },
    my5: { marginTop: 5, marginBottom: 5 },
    my10: { marginTop: 10, marginBottom: 10 },
    my15: { marginTop: 15, marginBottom: 15 },
    my20: { marginTop: 20, marginBottom: 20 },
    mx5: { marginLeft: 5, marginRight: 5 },
    mx10: { marginLeft: 10, marginRight: 10 },
    mx15: { marginLeft: 15, marginRight: 15 },
    mx20: { marginLeft: 20, marginRight: 20 },
    pt5: { paddingTop: 5 },
    pt10: { paddingTop: 10 },
    pt15: { paddingTop: 15 },
    pt20: { paddingTop: 20 },
    pb5: { paddingBottom: 5 },
    pb10: { paddingBottom: 10 },
    pb15: { paddingBottom: 15 },
    pb20: { paddingBottom: 20 },
    pl5: { paddingLeft: 5 },
    pl10: { paddingLeft: 10 },
    pl15: { paddingLeft: 15 },
    pl20: { paddingLeft: 20 },
    pr5: { paddingRight: 5 },
    pr10: { paddingRight: 10 },
    pr15: { paddingRight: 15 },
    pr20: { paddingRight: 20 },
    px5: { paddingLeft: 5, paddingRight: 5 },
    px10: { paddingLeft: 10, paddingRight: 10 },
    px15: { paddingLeft: 15, paddingRight: 15 },
    px20: { paddingLeft: 20, paddingRight: 20 },
    py5: { paddingTop: 5, paddingBottom: 5 },
    py10: { paddingTop: 10, paddingBottom: 10 },
    py15: { paddingTop: 15, paddingBottom: 15 },
    py20: { paddingTop: 20, paddingBottom: 20 },

    LineHeight14: { lineHeight: 14 },
    LineHeight16: { lineHeight: 16 },
    LineHeight18: { lineHeight: 18 },
    LineHeight20: { lineHeight: 20 },
    LineHeight22: { lineHeight: 22 },
    LineHeight24: { lineHeight: 24 },
    LineHeight26: { lineHeight: 26 },
    LineHeight28: { lineHeight: 28 },
    TextUnderLine: { textDecorationLine: 'underline' },

    Text6: { fontSize: 6 },
    Text8: { fontSize: 8 },
    Text10: { fontSize: 10 },
    Text11: { fontSize: 11 },
    Text12: { fontSize: 12 },
    Text14: { fontSize: 14 },
    Text16: { fontSize: 16 },
    Text18: { fontSize: 18 },
    Text19: { fontSize: 19 },
    Text20: { fontSize: 20 },
    Text22: { fontSize: 22 },
    Text24: { fontSize: 24 },
    Text26: { fontSize: 26 },
    Text28: { fontSize: 28 },

    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignLeft: {
        textAlign: 'left',
        flex: 1,
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textflexShrink: {
        flexShrink: 1,
    },
    textCenterContent: {
        alignSelf: 'center'
    },
    textEndContent: {
        alignSelf: 'flex-end'
    },


    textBD: {
        fontWeight: '600',
    },

    textBlue: {
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B'
    },
    textBlueBd: {
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular'
    },
    textGray: {
        fontFamily: 'Prompt-Regular',
        color: '#333333'
    },
    textGrayBd: {
        color: '#333333',
        fontFamily: 'Prompt-Regular',
        fontWeight: '600'
    },
    textGrayLight: {
        fontFamily: 'Prompt-Regular',
        color: '#838383'
    },
    textRed: {
        fontFamily: 'Prompt-Regular',
        color: '#D0021B'
    },
    textRedBd: {
        color: '#D0021B',
        fontFamily: 'Prompt-Regular',
        fontWeight: '600'
    },
    textPurple: {
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B'
    },
    textPurpleBd: {
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        fontWeight: '600'
    },
    textGreen: {
        fontFamily: 'Prompt-Regular',
        color: '#448165'
    },
    textGreenBd: {
        fontFamily: 'Prompt-Bold',
        color: '#448165',
        fontWeight: '600'
    },
    textYellow: {
        fontFamily: 'Prompt-Regular',
        color: '#ff9900'
    },
    textWhite: {
        fontFamily: 'Prompt-Regular',
        color: '#ffffff'
    },
    textWhiteBd: {
        fontFamily: 'Prompt-Bold',
        color: '#ffffff'
    },
    textOrange: {
        fontFamily: 'Prompt-Regular',
        color: '#ffac2a'
    },
    textOrangeBd: {
        fontFamily: 'Prompt-Bold',
        color: '#ffac2a'
    },
    textBlue: {
        fontFamily: 'Prompt-Regular',
        color: '#459FD2'
    },


    BorderBottomGrayWhite: {
        borderWidth: 0.5,
        borderColor: '#e4e4e4',
        marginTop: 15,
        marginBottom: 15,
    },
    BorderBottomGrayWhiteLight: {
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        marginTop: 10,
        marginBottom: 10,
    },
    BorderBottomGrayWhiteLightSmall: {
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        marginTop: 7,
        marginBottom: 7,
    },
    BorderBottomDash: {
        width: '100%',
        height: 1,
        marginTop: 10,
        marginBottom: 15,
    },

    Flex: {
        flex: 1,
    },
    FlexDirectionRow: {
        flexDirection: 'row'
    },


    btnBlueWhite: {
        width: '100%',
        backgroundColor: 'rgba(8, 71, 128, 1)',
        borderRadius: 40,
        paddingVertical: 9,
        paddingHorizontal: 40,
        alignSelf: 'center',
    },
    btnBlueWhiteText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnBlueWhiteTextDark: {
        fontSize: 12,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btnGreenWhite: {
        width: '100%',
        backgroundColor: '#448165',
        borderRadius: 40,
        paddingVertical: 9,
        paddingHorizontal: 40,
        alignSelf: 'center',
    },
    btnGreenWhiteText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btnGreenWhiteSmall: {
        backgroundColor: '#448165',
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    btnGreenWhiteSmallText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },


    btnLoadMore: {
        width: '40%',
        backgroundColor: '#448165',
        borderRadius: 10,
        padding: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    btnLoadMoreText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnCartRed: {
        width: '40%',
        backgroundColor: '#D0021B',
        borderRadius: 20,
        padding: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    btnCartGreen: {
        width: '40%',
        backgroundColor: '#448165',
        borderRadius: 20,
        padding: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    btnCartGreen2: {
        width: '100%',
        backgroundColor: '#448165',
        borderRadius: 20,
        padding: 5,
        marginTop: 15
    },
    btnCartGreen3: {
        width: '80%',
        backgroundColor: '#448165',
        borderRadius: 20,
        padding: 7,
        marginTop: 15
    },
    btnCartGreen4: {
        width: '55%',
        backgroundColor: '#448165',
        borderRadius: 20,
        padding: 7,
        marginTop: 15
    },
    btnCartYellow: {
        width: '40%',
        backgroundColor: '#e9b266',
        borderRadius: 20,
        padding: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    btnCartGray: {
        width: '40%',
        backgroundColor: 'rgba(153, 153, 153, 1)',
        borderRadius: 20,
        padding: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    btnTransfer: {
        width: '40%',
        backgroundColor: '#333',
        borderRadius: 5,
        padding: 7,
        alignSelf: 'center',
        marginHorizontal: 10
    },


    btnProductDetailGreen: {
        backgroundColor: '#448165',
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        height: '100%',
        marginRight: 0,
        marginLeft: 0
    },
    btnProductDetailGreenText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
        alignSelf: 'center'
    },
    btnProductDetailGreenRadius: {
        backgroundColor: '#448165',
        paddingHorizontal: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        height: '100%',
        borderRadius: 9
    },
    btnProductDetailGreenRadiusText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
        alignSelf: 'center'
    },
    btnProductDetailYellow: {
        backgroundColor: '#e9b266',
        // paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        height: '100%'
    },
    btnProductDetailYellowText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
        alignSelf: 'center'
    },

    btnGreenSmall: {
        backgroundColor: '#448165',
        paddingVertical: 15,
        alignSelf: 'center',
        width: '100%'
    },
    btnYellowSmall: {
        backgroundColor: '#e9b266',
        paddingVertical: 15,
        alignSelf: 'center',
        width: '100%'
    },
    btnGreenSmallBor: {
        backgroundColor: '#448165',
        paddingVertical: 15,
        alignSelf: 'center',
        width: '100%',
        borderRadius: 9
    },
    btnYellowSmallBor: {
        backgroundColor: '#e9b266',
        paddingVertical: 15,
        alignSelf: 'center',
        width: '100%',
        borderRadius: 9
    },
    btnSmall: {
        fontSize: 10,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnSmallBor: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },


    customBadgeYellow: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
    },
    customBadgeGreen: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#2eb16d",
        justifyContent: "center",
        alignSelf: "center",
    },
    customBadgeAlert: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "#cc3300",
        position: 'absolute',
        right: 0,
        top: -5,
        zIndex: 999
    },


    CheckBox: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#a7a7a7',
    },
    CheckBoxActive: {
        height: 20,
        width: 20,
    },
    CheckBoxText: {
        fontSize: 20,
        fontFamily: 'Prompt-Regular',
        color: '#333333'
    },
    CheckBoxTextBlueLine: {
        fontSize: 20,
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B',
        textDecorationLine: 'underline',
        marginLeft: 5
    },
    
    Hot : {
        position : 'absolute' , right:13, top: 8 , fontWeight: 'bold' , color:'#000'
    }
});

