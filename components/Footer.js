import React, {useContext, useState} from 'react';
// import home from '../public/home.png';
// import back from '../public/back.png';
// import StateContext from './StateContext.js';
// import cartImage from '../public/supermarket.png';
import {
  Button,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Tts from 'react-native-tts';

const Footer = (props) => {
  // React.useLayoutEffect(() => {
  //     navigation.setOptions({headerShown: false});
  //   }, [navigation]);

  // const { value3 } = useContext(StateContext);
  // const [cart, setCart] = value3;
  const styles = StyleSheet.create({
    container: {
      width: windowWidth - 15,
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'transparent',
      flex: 1,
      flexDirection: 'row',
      zIndex: 10,
      // paddingTop: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header_icons: {
      width: 20,
      height: 20,
      padding: 30,
    },
    header_icons_container: {
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2,
      elevation: 6,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header_icons_container}
        onPress={() => {
          Tts.stop();
          props.navigation.goBack();
        }}>
        <Image
          style={styles.header_icons}
          source={require('../public/back.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.header_icons_container}
        onPress={() => {
          Tts.stop();
          props.navigation.navigate('MainMenu');
        }}>
        <Image
          style={styles.header_icons}
          source={require('../public/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.header_icons_container}
        onPress={() => {
          Tts.stop();
          props.navigation.navigate('Cart');
        }}>
        <Image
          style={styles.header_icons}
          source={require('../public/supermarket.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
