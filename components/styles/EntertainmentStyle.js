import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "white",
        width: windowWidth,
        height: windowHeight,
    },
    ente_heading: {
        color: '#389cff',
        fontSize: 36,
        height: 80,
        fontWeight: 'bold',
        fontFamily: 'Noteworthy-Bold',
        textAlign: 'center',
        marginTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2
    },
    entertainment_menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 150,
        marginHorizontal: 80
    },
    entertainment_horo_menu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    myButton2: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Noteworthy-Bold',
    },
    modal_entertainment: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: windowWidth - 100,
        height: 780,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        // top: windowHeight / 4,
        left: windowWidth / 80,
    },

    jokes_container: {
        position: 'relative',
        top: 70,
        height: 500,
        display: 'flex',
        alignItems: 'center',
    },
    modal_loading: {
        fontSize: 44,
        fontFamily: 'Noteworthy-Bold',
    },
    myVideo2: {
        width: 80,
        position: 'absolute',
        top: 0,
    },
    close_modal_container: {
        width: 100,
        height: 100,
        position: 'absolute',
        // marginLeft:300
        // right: -480,
    },
    close_modal: {
        width: 60,
        height: 60,
        right: -340,
        position: 'absolute',
    },
    linear_button_ente: {
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: 300,
        height: 200,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "white",
        margin: 12,
        padding: 10,
    },
    linear_button_ente2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: 200,
        height: 150,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "white",
        margin: 12,
    },
    ente_images_container: {
        display: 'flex',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2,
        elevation: 6,
    },
    menu_images_ente: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        marginTop: 20,
    },
    menu_images_ente2: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        marginTop: 20,
    },
    ente_menu_text: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Noteworthy-Bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2
    },
    ente_menu_text_2: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: 'Noteworthy-Bold',
    },
    try_again_text: {
        fontSize: 50,
        fontFamily: 'Noteworthy-Bold',
        marginTop:100,
    },
    joke_text: {
        fontSize: 50,
        fontFamily: 'Noteworthy-Bold',
    },
    linear_button_jokes: {
        borderRadius: 6
    },
    next_button: {
        marginTop: 20,
        fontSize: 30,
        fontFamily: 'Noteworthy-Bold',
        bottom: -20,
        borderRadius: 15,
        width: 220,
        height: 70,
        // alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: "#00b5ec",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    next_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'Noteworthy-Bold',
        textAlign: 'center',
    },
    news_container: {
        width: windowWidth - 200,
        textAlign: 'left',
        display: 'flex',
        marginTop: 50
    },
    news_text_y: {
        fontSize: 30,
        fontFamily: 'Noteworthy-Bold',
    },
    news_text_x: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Noteworthy-Bold',
        color: '#389cff'
    },
    horo_items: {
        display: 'flex',
        fontSize: 24,
        fontFamily: 'Noteworthy-Bold',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    horo_items_container: {
        display: 'flex',
        marginTop: 100
    },
    horo_container: {
        width: 65,
        textAlign: 'left',
        display: 'flex',
        marginTop: 31,
        fontSize: 21,
        fontFamily: 'Noteworthy-Bold',
    },
    modal_bg: {
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
    },
    horoscope_menu: {
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
    },
    horo_heading: {
        color: '#389cff',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Noteworthy-Bold',
    },

    horo_content: {
        fontSize: 24,
        fontFamily: 'Noteworthy-Bold',
    },

    horo_dates: {
        fontSize: 18,
        fontFamily: 'Noteworthy-Bold',
    },
    myButton3: {
        borderRadius: 15,
        height: 200,
    },
    myButton4: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: 200,
        fontSize: 24,


        display: 'flex',
        // alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Noteworthy-Bold',
        textAlign: 'center',
        margin: 12,
    },

    facts_image: {
        width: 350,
        height: 350,
    },
    facts_content: {
        fontSize: 24,
        fontFamily: 'Noteworthy-Bold',
    },
    facts_items: {
        display: 'flex',
        fontSize: 24,
        fontFamily: 'Noteworthy-Bold',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    facts_heading: {
        color: '#389cff',
        fontSize: 24,
        fontFamily: 'Noteworthy-Bold',
        fontWeight: 'bold'
    },
    facts_items_container: {
        display: 'flex',
        marginTop: 30
    },
    button1: {
        borderRadius: 30,
        height: 330, width: 310,
        position: 'relative',
        top: 10,
        left: -35,
        marginHorizontal: 30,
        // padding: 10,
        backgroundColor: '#fa824b'
    },
    button2: {
        borderRadius: 30,
        position: 'absolute',
        right: -35,
        marginHorizontal: 30,
        top: 10,
        height: 200, width: 310,
        // padding: 10,
        backgroundColor: '#8d96f9'
    },
    button3: {
        borderRadius: 30,
        position: 'absolute',
        top: 350,
        left: -35,
        margin: 30,
        height: 200, width: 310,
        // padding: 10,
        backgroundColor: '#358aa9'
    },
    button4: {
        borderRadius: 30,
        height: 330, width: 310,
        position: 'absolute',
        top: 220,
        right: -35,
        margin: 30,
        padding: 10,
        backgroundColor: '#ffb3e6'
    },
    container2: {
        overflow: 'hidden',
        width: 300, height: 330,
        borderRadius: 30
    },
    container3: {
        overflow: 'hidden',
        width: 310, height: 200,
        borderRadius: 30
    },
    container4: {
        overflow: 'hidden',
        width: 300, height: 320,
        borderRadius: 30
    },
    container5: {
        overflow: 'hidden',
        width: 310, height: 200,
        borderRadius: 30
    },
    myButton: {
        color: "white",
        textAlign: "left",
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Noteworthy-Bold',
    },
    myButton2: {
        position: 'absolute',
        color: "white",
        textAlign: "left",
        top: 110,
        left: 10,
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Noteworthy-Bold',
    },
    menu_images_container1: {
        position: 'relative',
        top: 120,
        left: -30,
        overflow: 'hidden',
        alignItems: 'center',
        width: 200, height: 200,
        backgroundColor: '#fbd284',
        borderRadius: 100,

    },
    menu_images_container2: {
        position: 'relative',
        top: 40,
        right: -180,
        // overflow: 'hidden',
        alignItems: 'center',
        width: 150, height: 150,
        backgroundColor: '#f9e986',
        borderRadius: 100
    },
    menu_images_container3: {
        position: 'relative',
        top: 30,
        right: -180,
        // overflow: 'hidden',
        alignItems: 'center',
        width: 150, height: 150,
        backgroundColor: '#8797f1',
        borderRadius: 100
    },
    menu_images_container4: {
        position: 'relative',
        top: 110,
        right: -130,
        // overflow: 'hidden',
        alignItems: 'center',
        width: 200, height: 200,
        backgroundColor: '#fffdd9',
        borderRadius: 100
    },
    ask_images1: {
        width: 100,
        height: 100,
        marginTop: 45,
    },
    ask_images2: {
        width: 70,
        height: 70,
        marginTop: 30,
    },
    ask_images3: {
        width: 80,
        height: 80,
        marginTop: 25,
    },
    ask_images4: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
    menu_container: {
        marginTop: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: 650,
        height: 850,
    },
    news_block: {
        borderColor: 'grey',
        borderRadius: 20,
        marginBottom: 30,
        padding: 20,
        borderWidth: 1,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    loading_image: {
        width: 300, height: 400,
        marginTop: 150
    },
});