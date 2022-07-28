import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    contentHome: {
        marginTop: 170,
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
    },
    content: {
        margin: 15,
        flex: 1,
    },
    contentNoFlexM: {
        margin: 15,
    },
    contentNoFlex: {
        marginLeft: 15,
        marginRight: 15,
        width: '60%'
    },
    contentNoFlexCenter: {
        marginLeft: 15,
        marginRight: 15,
        width: '60%',
        alignSelf: 'center'
    },
    contentNoFlex100: {
        marginLeft: 15,
        marginRight: 15,
        width: '100%'
    },
    contentCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contentSmall: {
        marginLeft: 10,
        marginRight: 10
    },
    contentFlex: {
        marginLeft: 15,
        marginRight: 15
    },
    titleMain: {
        fontSize: 22,
        color: '#ffffff',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginBottom: 10,
    },
    titleDetail: {
        fontSize: 24,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginTop: 15,
        marginBottom: 10,
    },
    titleCenter: {
        fontSize: 24,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    titlesmCenter: {
        fontSize: 20,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    titleLH30: {
        fontSize: 33,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginBottom: 10,
        lineHeight: 30
    },
    titleLH40: {
        fontSize: 33,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        marginBottom: 10,
        lineHeight: 40
    },
    titleCardBlue: {
        borderColor: '#9D0B0B',
        borderWidth: 1,
        backgroundColor: '#9D0B0B',
        borderRadius: 5,
        padding: Platform.isPad ? 15 : 10,
        width: '100%',
        marginBottom: 15,
    },
    titleCardBlueText: {
        paddingLeft: 5,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Prompt-Regular',
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
        flex: 1,
        textAlign: 'left'
    },
    textAlignRight: {
        flex: 1,
        textAlign: 'right'
    },
    textflexShrink: {
        flexShrink: 1,
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
        color: '#37c825'
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
    rightText: {
        textAlign: 'right'
    },


    btnContent: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
    },
    btnContentHaft: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        width: '60%',
        alignSelf: 'center',
    },
    btnOrange: {
        width: '100%',
        backgroundColor: '#ffac2a',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnOrangeText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnBlue: {
        width: '100%',
        backgroundColor: '#4267B2',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnBlueWhite: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#4267B2',
        borderWidth: 1
    },
    btnBlueWhiteText: {
        fontSize: 14,
        color: '#4267B2',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnBlueText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnRedWhite: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#DD4A48',
        borderWidth: 1,
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnRedWhiteText: {
        fontSize: 14,
        color: '#DD4A48',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btnGrayWhite: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnGrayWhiteText: {
        fontSize: 14,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btnRed: {
        width: '100%',
        backgroundColor: '#DD4A48',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnRedText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnPurple: {
        width: '100%',
        backgroundColor: '#9D0B0B',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnPurpleText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },


    btnPurpleWhite: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#9D0B0B',
        borderWidth: 1,
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnPurpleWhiteText: {
        fontSize: 14,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnPurpleWhitemini: {
        width: '50%',
        backgroundColor: '#9D0B0B',
        borderColor: '#9D0B0B',
        borderWidth: 1,
        borderRadius: 40,
        padding: 5,
    },
    btnPurpleWhiteTextmini: {
        fontSize: 12,
        color: '#ffffff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btnGreen: {
        width: '100%',
        backgroundColor: '#0F9D58',
        borderRadius: 40,
        padding: 9,
        width: '100%',
        alignSelf: 'center'
    },
    btnGreenText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnGray: {
        width: '100%',
        backgroundColor: '#333333',
        borderRadius: 40,
        padding: 9,
        opacity: 0.7
    },
    btnDisabled: {
        width: '100%',
        backgroundColor: '#8e8e8e',
        borderRadius: 40,
        padding: 9,
        opacity: 0.4
    },
    btnOrangeSm: {
        backgroundColor: '#ffac2a',
        borderRadius: 40,
        padding: 3,
        width: '30%',
        alignSelf: 'flex-end'
    },
    btnOrangeSmText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },

    btn2Content: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn2ContentSm: {
        alignSelf: 'center',
        width: '50%',
        marginTop: 10,
        flexDirection: 'row',
    },
    btn2White: {
        borderColor: '#9D0B0B',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        padding: Platform.isPad ? 10 : 7,
        width: Platform.isPad ? '35%' : '49%',
        marginRight: '1%',
    },
    btn2WhiteText: {
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B',
        fontSize: Platform.isPad ? 28 : 22,
        textAlign: 'center',
    },
    btn2Blue: {
        borderColor: '#9D0B0B',
        borderWidth: 1,
        backgroundColor: '#9D0B0B',
        borderRadius: 50,
        padding: Platform.isPad ? 10 : 7,
        width: Platform.isPad ? '35%' : '49%',
        marginLeft: '1%',
    },
    btn2BlueText: {
        fontFamily: 'Prompt-Regular',
        color: '#ffffff',
        fontSize: Platform.isPad ? 28 : 22,
        textAlign: 'center',
    },
    btn2Disable: {
        borderColor: '#bfbfbf',
        borderWidth: 1,
        borderRadius: 50,
        padding: Platform.isPad ? 10 : 7,
        width: Platform.isPad ? '35%' : '48%',
        marginRight: '4%',
        backgroundColor: '#bfbfbf',
    },
    btn2DisableText: {
        fontFamily: 'Prompt-Regular',
        color: '#ffffff',
        fontSize: Platform.isPad ? 28 : 22,
        textAlign: 'center',
    },
    btnBlueSmall: {
        alignSelf: 'flex-end',
        width: Platform.isPad ? 160 : 110,
        backgroundColor: '#9D0B0B',
        borderRadius: 40,
        padding: Platform.isPad ? 10 : 5,
    },
    btnBlueSmallText: {
        fontSize: Platform.isPad ? 26 : 18,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnBlueStatus: {
        alignSelf: 'flex-end',
        backgroundColor: '#9D0B0B',
        borderRadius: 5,
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
    btnBlueStatusText: {
        fontSize: Platform.isPad ? 18 : 15,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnBlueStatusRadius10: {
        alignSelf: 'flex-end',
        backgroundColor: '#9D0B0B',
        borderRadius: 20,
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
    btnGrayStatus: {
        alignSelf: 'flex-end',
        backgroundColor: '#bfbfbf',
        borderRadius: 5,
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
    btnGrayStatusText: {
        fontSize: Platform.isPad ? 18 : 15,
        color: '#fff',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnWhiteBorderBlueSmall: {
        backgroundColor: '#ffffff',
        color: '#9D0B0B',
        borderColor: '#9D0B0B',
        borderWidth: 1,
        borderRadius: 10,
        paddingRight: 12,
        paddingLeft: 12,
        paddingTop: 2
    },
    btnWhiteBorderBlueSmallText: {
        fontSize: 14,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
    },
    btnWhiteBlue: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 40,
        borderColor: '#9D0B0B',
        padding: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnWhiteBlueText: {
        fontSize: 18,
        color: '#9D0B0B',
        fontFamily: 'Prompt-Regular',
        // textAlign: 'center',
        // flex: 1,
        // fontWeight: '500',
    },

    Flex: {
        flex: 1,
    },
    FlexDirectionRow: {
        flexDirection: 'row',
    },
    FlexDirectionColumn: {
        flexDirection: 'column'
    },
    AlignItemsFlexEnd: {
        alignItems: 'flex-end'
    },


    ContentCard: {
        marginBottom: 10,
    },
    Card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        padding: 15,
        marginBottom: 15
    },
    Card2Col: {
        flexDirection: 'row',
        marginTop: 5
    },
    Card2Col2: {
        flexDirection: 'row',
    },
    Card2ColLeft: {
        flex: 1
    },
    Card2ColRight: {
        textAlign: 'right',
        flex: 1,
    },
    CardActive: {
        backgroundColor: '#9D0B0B',
        borderRadius: 10,
        shadowColor: "#9D0B0B",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#9D0B0B',
        padding: 15,
        marginBottom: 10,
    },
    contentCardText: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    contentCardTextLeft: {
        width: '45%',
        fontSize: 20,
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B'
    },
    contentCardTextRight: {
        width: '55%',
        textAlign: 'right',
        fontSize: 20,
        fontFamily: 'Prompt-Regular',
        color: '#333333'
    },
    CardDash: {
        width: '100%',
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1.5,
        borderColor: '#e4e4e4',
        padding: 20,
        marginBottom: 15,
        marginTop: 15,
    },
    ContentCard2ColMb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    ContentCard2Col: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ContentCard2ColLeft: {
        width: '40%',
        fontSize: Platform.isPad ? 24 : 19,
        fontFamily: 'Prompt-Regular',
        color: '#9D0B0B'
    },
    ContentCard2ColRight: {
        width: '60%',
        textAlign: 'right',
        fontSize: Platform.isPad ? 24 : 19,
        fontFamily: 'Prompt-Regular',
        color: '#333333'
    },

    ContentCardBorder2ColLeft: {
        borderColor: '#e2e2e2',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: '49%',
        marginRight: '2%'
    },
    ContentCardBorder2ColRight: {
        borderColor: '#e2e2e2',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: '49%',
    },


    CardBorderRadionTop: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        padding: 15,
        flex: 1
    },


    tabBarMenu: {
        flexDirection: 'row',
        width: '100%',
    },
    tabBarLeft: {
        backgroundColor: '#fff',
        width: '49%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: '2%',
    },
    tabBarLeftAcitve: {
        backgroundColor: '#D0021B',
        width: '49%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: '2%',
    },
    tabBarRight: {
        backgroundColor: '#ffffff',
        width: '50%',
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tabBarRightActive: {
        backgroundColor: '#D0021B',
        width: '50%',
        borderTopLeftRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tabBarRight2: {
        backgroundColor: '#ffffff',
        width: '50%',
        borderTopLeftRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tabBarRightActive2: {
        backgroundColor: '#D0021B',
        width: '50%',
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tabBarText: {
        color: '#333333',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
    },
    tabBarTextActive: {
        color: '#ffff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
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


    opaTabStep: {
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    opaTabStepIcon: {
        height: 35,
        width: '10%'
    },
    opaTabStepBorder: {
        width: '5%',
        height: 1,
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


    cardContentHome: {
        flexDirection: 'row'
    },
    cardHome: {
        width: '48%',
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: '2%',
        marginBottom: '2%',
    },
    cardFull: {
        width: '98%',
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: '2%',
        marginBottom: '2%',
    },
    cardHomeContent: {
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 10,
        backgroundColor: '#ffffff'
    },
    cardHomeContentAndriod: {
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 0.5,
        borderColor: "#e0e0e0",
        borderRadius: 10,
    },
    cardHomeImg: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardHomeImgBade: {
        alignSelf: 'flex-end',
        backgroundColor: 'red',
        width: 40,
        padding: 3,
        borderRadius: 5,
        marginTop: -27,
        right: 5,
    },
    cardHomeImgBadeText: {
        fontSize: 10,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Prompt-Regular',
    },
    newsCardTitleContent: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    newsCardTitleimage: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 10
    },
    newsCardTitletextLeft: {
        fontSize: 12,
        color: '#ffac2a',
        fontFamily: 'Prompt-Regular',
    },
    newsCardTitletextRight: {
        fontSize: 12,
        color: '#ffac2a',
        flex: 1,
        textAlign: 'right',
        fontFamily: 'Prompt-Regular',
    },

    notFoundContent: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    notFoundText: {
        fontSize: 16,
        fontFamily: 'Prompt-Regular',
        textAlign: 'center',
        color: '#333333',
    },

});

