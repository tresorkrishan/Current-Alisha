import React from 'react';
// import { WebView } from 'react-native-webview';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer.js';

const UserManual = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      height: windowHeight,
    },
    footer_container: {
      width: windowWidth,
      height: 80,
    },
    heading: {
      color: '#389cff',
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Manual</Text>
      <LinearGradient
        colors={['#ffffff', '#dfe9f3']}
        style={styles.footer_container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Footer navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

export default UserManual;
