import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';

import Footer from './Footer';

const FoodsAndBeverages = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      // padding: 24,
      width: windowWidth,
      height: windowHeight,
    },
    menu_container: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 200,
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    button: {
      marginHorizontal: 150,
      marginBottom: 60,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      width: 300,
      height: 200,
      borderRadius: 6,
      borderWidth: 4,
      borderColor: 'white',
      margin: 12,
      padding: 10,
    },
    myButton: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 2,
    },
    ask_text: {
      color: '#20232a',
      marginBottom: 40,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    menu_images: {
      width: 90,
      height: 90,
      alignSelf: 'center',
      marginTop: 20,
    },
    foods_heading: {
      color: '#389cff',
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 2,
    },
    menu_images_container: {
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2,
      elevation: 6,
    },
  });

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View>
        <Text style={styles.foods_heading}>Foods and Beverages</Text>
        <View style={styles.menu_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('InventoryUserForm');
            }}>
            <LinearGradient
              colors={['#ade1de', '#b2bd0b']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.button}>
              <Text style={styles.myButton}>Drinks Menu</Text>
              <View style={styles.menu_images_container}>
                <Image
                  style={styles.menu_images}
                  source={require('../public/coffee.png')}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('InventoryUserForm');
            }}>
            <LinearGradient
              colors={['#ade1de', '#9b5ec1']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.button}>
              <Text style={styles.myButton}>Snacks</Text>
              <View style={styles.menu_images_container}>
                <Image
                  style={styles.menu_images}
                  source={require('../public/cookie.png')}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};
export default FoodsAndBeverages;
