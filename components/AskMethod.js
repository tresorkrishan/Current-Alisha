import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Tts from 'react-native-tts';
import Footer from './Footer';
import LinearGradient from 'react-native-linear-gradient';
import keyboard from '../public/keyboard.png';
import speaking from '../public/speaking.png';
import pickup from '../public/pickup.png';
import repair from '../public/repair.png';

const AskMethod = ({navigation}) => {
  // const [serviceType, setServiceType] = React.useState('');
  React.useEffect(() => {
    Tts.speak('How would you like to enter details?', {
      iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
      rate: 0.5,
    });
  }, []);

  // React.useEffect(() => {
  //     if (serviceType !== '') {
  //         Tts.speak('How would you like to enter details?', {
  //             iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
  //             rate: 0.5,
  //         });
  //     };
  // }, [serviceType]);

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      // position: 'absolute',
      padding: 24,
      backgroundColor: 'white',
      width: windowWidth,
      height: windowHeight,
    },
    menu_container: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 200,
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    button: {
      // marginHorizontal: 100,
      // marginBottom: 60,
      width: 300,
      height: 400,
      borderRadius: 40,
      // borderWidth: 4,
      // borderColor: "white",
      margin: 12,
      backgroundColor: '#ffd23d',
    },
    button2: {
      // marginHorizontal: 100,
      // marginBottom: 60,
      width: 300,
      height: 400,
      borderRadius: 40,
      // borderWidth: 4,
      // borderColor: "white",
      margin: 12,
      backgroundColor: '#62dce3',
    },
    myButton: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Noteworthy-Bold',
      marginBottom: 70,
      marginTop: 50,
      // textShadowColor: 'rgba(0, 0, 0, 0.75)',
      // textShadowOffset: { width: -1, height: 1 },
      // textShadowRadius: 2
    },
    ask_text: {
      color: '#20232a',
      marginBottom: 60,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Noteworthy-Bold',
    },
    ask_images: {
      width: 100,
      height: 100,
    },
    ask_images2: {
      width: 150,
      height: 150,
    },
    images_container: {
      display: 'flex',
      alignItems: 'center',
      margin: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2,
      elevation: 6,
    },
    coffee_button: {
      marginVertical: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
    },
  });

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {/* {serviceType === '' ?
                <View style={styles.menu_container} >
                    <Text style={styles.ask_text}>Select your service type</Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={() => setServiceType('Service')} >
                            <Text style={styles.myButton}>Service</Text>
                            <View style={styles.images_container}>
                                <Image style={styles.ask_images} source={repair} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => setServiceType('Service')} >
                            <Text style={styles.myButton}>Pickup</Text>
                            <View style={styles.images_container}>
                                <Image style={styles.ask_images} source={pickup} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                : */}
      <View style={styles.menu_container}>
        <Text style={styles.ask_text}>
          How would you like to enter details?
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Tts.stop();
              navigation.navigate('TokenGenerationVoice');
            }}>
            <Text style={styles.myButton}>Voice Input</Text>
            <View style={styles.images_container}>
              <Image style={styles.ask_images2} source={speaking} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              Tts.stop();
              navigation.navigate('TokenGenerationType');
            }}>
            <Text style={styles.myButton}>Manual Typing</Text>
            <View style={styles.images_container}>
              <Image style={styles.ask_images2} source={keyboard} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* } */}
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};
export default AskMethod;
