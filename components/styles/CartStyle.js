import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        // padding: 24,
        width: windowWidth,
        height: windowHeight,

    },
    foods_heading: {
        color: '#389cff',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        textAlign: 'center',
        marginTop: 30
    },
    cart: {
        fontSize: 80,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
    },
    plus_minus_buttons_cart: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cart_items: {
        marginBottom: 15,
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'black',
        width: 650,
        height: 200,
        borderRadius: 20,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 55,
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cart_c1: {
        display: 'flex',
        width: 380,
        // height: 100,
    },
    cart_c2: {
        display: 'flex',
        flexDirection: 'row',
        margin: -30,
        // width:30,
        alignItems: 'center',
    },
    cart_container: {
        width: windowWidth,
        marginTop: 50,
        alignItems: 'center',
    },
    container2: {
        marginTop: 50
    },
    item_name: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        color: '#389cff',
    },
    item_price: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        color: '#389cff',
    },
    cart_total: {
        fontSize: 40,
        textAlign: 'right',
        padding: 30,
        color: '#389cff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
    },
    /*  cross_cart :{
      font-family: sans-serif,
      font-size: 30 ,
      font-weight:  'bold',
      color: #f10000,
     }, */
    remove_button: {
        backgroundColor: '#e0e0e0',
        borderRadius: 100,
        width: 60,
        height: 60,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        color: '#f10000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    cross: {
        color: 'red',
        fontSize: 24,
        fontFamily:'Noteworthy-Bold',

    },

    plusminus_buttons_cart: {
        margin: 'auto',
    },

    total: {
    },

    emptyCartContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    cart_text: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
    },
    // emptyCartContainer img: {
    //     width: 50,
    // },
    placeOrder_text: {
        borderRadius: 15,
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        textAlign: 'center',
        // margin: 22

    },
    continueShopping: {
        borderRadius: 6,
        // display: 'inline block',
        color: 'black',
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        padding: 34,
        // margin: 'auto',
    },
    cart_c3: {
        display: 'flex',
        width: 100,
    },
    placeOrder_button: {
        shadowColor: "#000",
        // alignItems:'center',
        // justifyContent:'center',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    button: {
        // alignItems:'center',
        marginBottom: 60,
        width: 300,
        height: 100,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "white",
    },
    button2: {
        // alignItems:'center',
        marginBottom: 60,
        width: 390,
        height: 100,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "white",
    },
    plus_minus_buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // top: 150,
        right: 10,
        position: 'relative',

    },

    plus_minus_minus: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        backgroundColor: '#e0e0e0',
        color: '#399bff',
        position: 'relative',
        alignItems: 'center',
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    plus_minus_add: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Noteworthy-Bold',
        backgroundColor: '#e0e0e0',
        color: '#399bff',
        position: 'relative',
        alignItems: 'center',
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});