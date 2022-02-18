// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/

// import React in our code
import React, {useState, useEffect, useContext, useRef} from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
// import Voice
import Voice from '@react-native-community/voice';
//import Speech
import Tts from 'react-native-tts';
import {StateContext} from './StateContext.js';
import Modal from 'react-native-modal';
import styles from './tokenStyle';
import Footer from './Footer.js';
import LinearGradient from 'react-native-linear-gradient';

const TokenGeneration = ({navigation}) => {
  const {input_type} = useContext(StateContext);
  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [product, setProduct] = useState();

  const [showVideo, setShowVideo] = useState(false);
  const [showListening, setShowListening] = useState(false);
  const [amplitude, setAmplitude] = useState(0);
  const [showToken, setShowToken] = useState(false);
  // const [token, setToken] = useState();
  const [showListeningIcon, setShowListeningIcon] = useState(false);

  const [oldUser, setOldUser] = useState(false);

  const [voiceDone, setVoiceDone] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [inputType, setType] = input_type;
  const [showErrorModal, setShowErrorModal] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechEnd = onSpeechEndHandler;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const greetings = (text, time, t) => {
    return new Promise((resolve, reject) => {
      setShowVideo(true);
      setAmplitude(2);
      Tts.speak(text);
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  const getUserInfo = async (number) => {
    let data = {
      phoneNumber: number,
    };
    let response = await axios.post(
      'http://61.246.39.136:9000/getUserInfo',
      data,
    );
    if (response.data === 'Not Found') {
      return response.data;
    } else {
      return response;
    }
  };

  const processNumber = (e) => {
    console.log(e);
    setType('');
    validateNumber(e).then((result) => {
      if (result.message === 'valid') {
        getUserInfo(e).then((result) => {
          if (result === 'Not Found') {
            setPhoneNumber(e);
          } else {
            setOldUser(true);
            setName(result.data[0].Name);
            setEmail(result.data[0].Email);
            setVoiceDone(true);
          }
        });
      } else {
        greetings('Please try again?', 2, 'number').then((result) => {
          setShowVideo(false);
          setAmplitude(0);
          // setShowListening(true);
          // setShowListeningIcon(true);
          // startRecognizing();
        });
      }
    });
  };

  const extractName = async (name, type) => {
    if (type === 'voice') {
      let response = await axios.post('/extractName', {name: name});
      return response.data;
    } else {
      return;
    }
  };

  const processName = (e) => {
    extractName(e, voice).then((result) => {
      console.log(result);
    });
  };

  const processEmail = (e) => {};

  const processProduct = (e) => {};

  function onSpeechResults(event) {
    console.log(event.value, 'hereeee');
    console.log(inputType, '6666666');
    switch (inputType) {
      case 'number':
        let e = String(event.value).replace(/\-/g, '');
        console.log(e, 'eeee');
        if (e.length === 10) {
          try {
            Voice.destroy();
          } catch (error) {
            //eslint-disable-next-line
            console.error(error);
          }
          // processNumber(e)
        }
        break;
      case 'name':
        setName(event.value);

        break;
      case 'email':
        processEmail(event.value);

        break;
      case 'product':
        processProduct(event.value);

        break;
      default:
        break;
    }
  }

  const startRecognizing = async (e) => {
    setShowListeningIcon(true);
    //Starts listening for speech for a specific locale
    try {
      setTimeout(() => {
        stopRecognizing();
      }, 6000);
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      setShowListeningIcon(false);
      setShowListening(false);
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const recordInput = (e) => {
    setType(e);
    switch (e) {
      case 'number':
        greetings('Please say your phone number?', 2, 'number').then(
          (result) => {
            setShowVideo(false);
            setAmplitude(0);
            setShowListening(true);
            setShowListeningIcon(true);
            startRecognizing('number');
          },
        );
        break;
      case 'name':
        greetings('Please say your name?', 3, 'name').then((result) => {
          setShowVideo(false);
          setAmplitude(0);
          setShowListening(true);
          setShowListeningIcon(true);
          startRecognizing('name');
        });
        break;
      case 'email':
        greetings('Please say your email?', 3, 'email').then((result) => {
          setShowVideo(false);
          setAmplitude(0);
          setShowListening(true);
          setShowListeningIcon(true);
          startRecognizing('email');
        });
        break;
      case 'product':
        greetings(
          'Which product would you like to service today?',
          5,
          'product',
        ).then((result) => {
          setShowVideo(false);
          setAmplitude(0);
          setShowListening(true);
          setShowListeningIcon(true);
          startRecognizing('product');
        });
        break;
      default:
        break;
    }
  };

  const getProduct = async (productInput) => {
    try {
      let response = await axios.post(
        'http://61.246.39.136:5000/product_name?',
        {product_name: productInput},
      );
      return response.data.product;
    } catch (error) {
      console.log(error);
    }
  };

  const createToken = async (data) => {
    let response = await axios.post(
      'http://61.246.39.136:9000/createToken',
      data,
    );
    return response.data;
    // setModalText(response.data.message);
  };

  async function validateNumber(number, type) {
    // if (type === 'manual' || type === 'voice') {
    let IndNum = /^[0]?[789]\d{9}$/;
    if (IndNum.test(number)) {
      return {message: 'valid'};
    } else {
      return {message: 'invalid'};
    }
  }

  const confirmDetails = () => {
    if (
      typeof phoneNumber !== 'undefined' &&
      phoneNumber !== '' &&
      typeof name !== 'undefined' &&
      name !== '' &&
      typeof email !== 'undefined' &&
      email !== '' &&
      typeof product !== 'undefined' &&
      product !== ''
    ) {
      let ptype = '';
      // if (typeof productType === 'undefined' || productType === '') {
      //     getProduct(product).then(result => {
      //         // setCheckProduct(false);
      //         ptype = result;
      //         setProductType(result);
      //     });
      // };
      // getUserInfo(phoneNumber).then(result => {
      //     if (result === 'Not Found') {
      //         oldUser = false
      //     }
      //     else{

      //     }
      // })
      validateNumber(phoneNumber).then((result) => {
        if (result.message === 'valid') {
          let data = {
            number: phoneNumber,
            name: name,
            email: email,
            productType: 'Laptop',
            item: 'Macbook 13',
            location: 'CP Service Center',
            olduser: false,
          };
          createToken(data).then((result) => {
            setModalContent(
              <Text style={styles.modalContent}>{result.message}</Text>,
            );
            setShowToken(true);
          });
        } else {
          setModalContent(
            <Text style={styles.modalContent}>
              Please give valid phone number
            </Text>,
          );
          setShowErrorModal(true);
        }
      });
    } else {
      setModalContent(
        <Text style={styles.modalContent}>Please give valid details</Text>,
      );
      setShowErrorModal(true);
    }
  };
  const toggleModal = () => {
    setPhoneNumber('');
    setName('');
    setEmail('');
    setProduct('');
    numberRef.current.clear();
    nameRef.current.clear();
    emailRef.current.clear();
    productRef.current.clear();
    setShowToken(false);
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        {showListening ? (
          <View style={styles.listening_bg}>
            {showListeningIcon && (
              <React.Fragment>
                <Image
                  style={styles.listening_animation}
                  source={require('../public/mic.gif')}
                />
                <Text style={styles.listening_text}>Listening...</Text>
              </React.Fragment>
            )}
          </View>
        ) : null}
        <View style={styles.manual_container}>
          <View>
            <Text style={styles.input_label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                ref={numberRef}
                placeholder="Phone Number"
                underlineColorAndroid="transparent"
                // value={phoneNumber}
                onChangeText={(number) => setPhoneNumber(number)}>
                {/* <Text>{phoneNumber}</Text> */}
              </TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.input_label}>Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                ref={numberRef}
                placeholder="Name"
                underlineColorAndroid="transparent"
                // value={phoneNumber}
                onChangeText={(name) => setName(name)}>
                {/* <Text>{phoneNumber}</Text> */}
              </TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.input_label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                ref={emailRef}
                keyboardType="email-address"
                placeholder="Email"
                underlineColorAndroid="transparent"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.input_label}>Product</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                ref={productRef}
                placeholder="Product"
                // secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(product) => setProduct(product)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={confirmDetails}>
            <Text style={styles.loginText}>Confirm</Text>
          </TouchableOpacity>
          <View>
            <Modal isVisible={showToken}>
              <View style={styles.token_modal2}>
                <View>{modalContent}</View>
                <View style={styles.coffee_buttons}>
                  <TouchableOpacity
                    style={styles.coffee_button}
                    onPress={toggleModal}>
                    <Text style={styles.coffee_button_text}>
                      {'Yes Coffee :)'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.coffee_button}
                    onPress={toggleModal}>
                    <Text style={styles.coffee_button_text}>
                      {'No Coffee :('}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal isVisible={showErrorModal}>
              <View style={styles.token_modal2}>
                <View>{modalContent}</View>
                <View style={styles.coffee_buttons}>
                  <TouchableOpacity
                    style={styles.ok_button_modal}
                    onPress={() => setShowErrorModal(false)}>
                    <Text style={styles.coffee_button_text}>OK 👍</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};

export default TokenGeneration;
