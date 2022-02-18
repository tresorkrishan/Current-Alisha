import React from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer.js';

const SoftServices = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      // position: 'absolute',
      // display: 'flex',
      // alignItems: 'center',
      // padding: 24,
      width: windowWidth,
      height: windowHeight,
    },
    footer_container: {
      width: windowWidth,
      height: 80,
    },
    heading: {
      color: '#389cff',
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 2,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Online Store</Text>
      <WebView
        source={{
          uri: 'https://www.myimaginestore.com/',
        }}
        style={{marginTop: 20}}
      />
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

export default SoftServices;
