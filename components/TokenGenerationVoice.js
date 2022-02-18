// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/

// import React in our code
import React, {useState, useEffect, useContext, useRef} from 'react';

// import all the components we are going to use
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  BackHandler,
} from 'react-native';
import axios from 'axios';
// import Voice
import Voice from '@react-native-community/voice';
//import Speech
import Tts from 'react-native-tts';
import {StateContext} from './StateContext.js';
import Modal from 'react-native-modal';
import styles from './tokenStyle';
// import { set } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer.js';

const TokenGeneration = ({navigation}) => {
  const {
    email_input,
    name_input,
    phoneNumber_input,
    product_input,
  } = useContext(StateContext);
  const [name, setName] = name_input;
  const [phoneNumber, setPhoneNumber] = phoneNumber_input;
  const [email, setEmail] = email_input;
  const [product, setProduct] = product_input;
  const [productType, setProductType] = useState();
  const [showToken, setShowToken] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [cc, setCC] = useState();

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  useEffect(() => {
    showComponent('number');
  }, []);

  const getProductType = async (productInput) => {
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

  const toggleModal = (e) => {
    console.log('here in modal');
    setShowToken(false);
    e === 'yes'
      ? navigation.navigate('DrinksMenu')
      : navigation.navigate('MainMenu');
  };

  useEffect(() => {
    if (product !== 'undefined' && product !== '') {
      confirmDetails();
    }
  }, [product]);

  const processNumber = (e) => {
    setPhoneNumber(e);
    showComponent('name');
  };

  const processName = (e) => {
    setName(e);
    showComponent('email');
  };

  const processEmail = (e) => {
    setEmail(e);
    showComponent('product');
  };

  const processProduct = (productName, productType) => {
    setProduct(productName);
    setProductType(productType);
  };

  const showComponent = (type) => {
    switch (type) {
      case 'number':
        setCC(
          <NumberInput processNumber={processNumber} navigation={navigation} />,
        );
        break;
      case 'name':
        setCC(<NameInput processName={processName} />);
        break;
      case 'email':
        setCC(<EmailInput processEmail={processEmail} />);
        break;
      case 'product':
        setCC(<ProductInput processProduct={processProduct} />);
        break;

      default:
        break;
    }
  };

  const confirmDetails = async () => {
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
      const createToken = async (data) => {
        try {
          let response = await axios.post(
            'http://61.246.39.136:9000/createToken',
            data,
          );
          setModalContent(
            <Text style={styles.modalContent}>{response.data.message}</Text>,
          );
          setShowToken(true);
          return response.data;
        } catch (error) {
          setModalContent(
            <Text style={styles.modalContent}>
              Sorry there was some network error
            </Text>,
          );
          setShowToken(true);
        }
      };

      getProductType(product).then((result) => {
        console.log(result);
        let data = {
          number: phoneNumber,
          name: name,
          email: email,
          productType: 'Phone',
          item: product,
          location: 'CP Service Center',
          olduser: false,
        };
        createToken(data);
      });
    }
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <View>{cc}</View>
        <View>
          <Modal isVisible={showToken}>
            <View style={styles.token_modal2}>
              <View>{modalContent}</View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => toggleModal('yes')}>
                  <Text style={styles.myButton2}>Yes Coffee! ☕️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => toggleModal('no')}>
                  <Text style={styles.myButton2}>No Coffee! ☹️</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};

export default TokenGeneration;

const NumberInput = (props) => {
  const [showListeningIcon, setShowListeningIcon] = useState(false);
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [showCheck, setShowCheck] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showToken, setShowToken] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      Voice.destroy().then(Voice.removeAllListeners),
    );
    return () => backHandler.remove();
  }, []);

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
      return response.data[0];
    }
  };

  const greetings = (text, time, t) => {
    return new Promise((resolve, reject) => {
      // setShowVideo(true);
      // setAmplitude(2);
      setShowVoice(true);
      Tts.speak(text, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  useEffect((event) => {
    greetings('Please say your phone number?', 2, 'number').then((result) => {
      setShowVoice(false);
      // setShowVideo(false);
      // setAmplitude(0);
      setShowListeningIcon(true);
      startRecognizing('number');
    });

    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechEnd = onSpeechEndHandler;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognizing = async (e) => {
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
      setShowCheck(true);
      setShowManualInput(false);
      greetings('Did i get your number right?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
      });
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const onSpeechResults = (event) => {
    let e = String(event.value).replace(/\-/g, '');
    setPhoneNumberInput(e);
  };

  async function validateNumber(number, type) {
    let IndNum = /^[0]?[789]\d{9}$/;
    if (IndNum.test(number)) {
      return {message: 'valid'};
    } else {
      return {message: 'invalid'};
    }
  }

  const showManualLayout = () => {
    setShowManualInput(true);
    setShowCheck(false);
  };

  const toggleModal = (e) => {
    console.log('heree');
    setShowToken(false);
    e === 'yes'
      ? props.navigation.navigate('DrinksMenu')
      : props.navigation.navigate('MainMenu');
  };

  const confirmInput = (e) => {
    setShowCheck(false);
    if (e === 'yes') {
      validateNumber(phoneNumberInput).then((result) => {
        if (result.message === 'valid') {
          getUserInfo(phoneNumberInput).then((result) => {
            if (result === 'Not Found') {
              props.processNumber(phoneNumberInput);
            } else {
              setModalContent(
                <Text style={styles.modalContent}>
                  Your already have a token {result.Token} {'\n'} Would like to
                  have some coffee?{' '}
                </Text>,
              );
              setShowToken(true);
            }
          });
        } else {
          greetings('Please say your valid phone number?', 2, 'number').then(
            (result) => {
              // setShowVideo(false);
              // setAmplitude(0);
              setShowListeningIcon(true);
              startRecognizing();
            },
          );
        }
      });
    } else {
      setPhoneNumberInput('');
      greetings('Please say your phone number?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
        setShowListeningIcon(true);
        startRecognizing('number');
      });
    }
  };

  return (
    <View style={styles.container_mini}>
      <Modal isVisible={showToken}>
        <View style={styles.token_modal2}>
          <View>{modalContent}</View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => toggleModal('yes')}>
              <Text style={styles.myButton2}>Yes Coffee! ☕️</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => toggleModal('no')}>
              <Text style={styles.myButton2}>No Coffee! ☹️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showVoice && !showCheck && !showManualInput ? (
        <Text style={styles.input_heading}>Please say your Phone Number</Text>
      ) : null}
      {showListeningIcon && (
        <View style={styles.showListeningIcon_container}>
          <Image
            style={styles.listening_animation_mini}
            source={require('../public/mic.gif')}
          />
          <Text style={styles.listening_text_mini}>Listening...</Text>
        </View>
      )}
      {showManualInput && (
        <View style={styles.inputContainer_voice2}>
          <Text style={styles.input_label}>Enter Phone Number</Text>
          <View style={styles.inputContainer_voice}>
            <TextInput
              style={styles.inputs_voice}
              placeholder="Phone Number"
              // secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(number) => setPhoneNumberInput(number)}
            />
            <Button onPress={stopRecognizing} title="Submit" color="#389cff" />
          </View>
        </View>
      )}
      {!showManualInput && (
        <Text style={styles.voice_text}>{phoneNumberInput}</Text>
      )}
      {showCheck && (
        <View style={styles.token_modal_mini_container}>
          <View style={styles.token_modal_mini}>
            {/* <View style={styles.token_labels} >
                            <Text style={styles.token_labels_text}>Did I get your number right?</Text>
                        </View> */}
            <View style={styles.coffee_buttons}>
              <TouchableOpacity
                style={styles.coffee_button}
                onPress={() => confirmInput('yes')}>
                <Text style={styles.coffee_button_text}>
                  Yes 👍 {'\n'}My number is correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.coffee_button3}
                onPress={() => confirmInput('no')}>
                <Text style={styles.coffee_button_text}>
                  No 👎 {'\n'}I want to speak again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 100}}>
            <TouchableOpacity
              style={styles.type_button}
              onPress={showManualLayout}>
              <Text style={styles.type_text}>
                Want to type instead? 👉 Tap here 👈
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const NameInput = (props) => {
  const [showListeningIcon, setShowListeningIcon] = useState(false);
  const [nameInput, setNameInput] = useState();
  const [showCheck, setShowCheck] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

  const greetings = (text, time, t) => {
    return new Promise((resolve, reject) => {
      // setShowVideo(true);
      // setAmplitude(2);
      setShowVoice(true);
      Tts.speak(text, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  useEffect(() => {
    greetings('Please say your name?', 2, 'number').then((result) => {
      // setShowVideo(false);
      // setAmplitude(0);
      setShowVoice(false);
      setShowListeningIcon(true);
      startRecognizing('number');
    });

    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechEnd = onSpeechEndHandler;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

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
      setShowCheck(true);
      setShowManualInput(false);
      greetings('Did i get your name right?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
      });
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const onSpeechResults = (event) => {
    // console.log(event)
    setNameInput(event.value[0]);
  };

  const showManualLayout = () => {
    setShowManualInput(true);
    setShowCheck(false);
  };

  const confirmInput = (e) => {
    setShowCheck(false);
    if (e === 'yes') {
      console.log(nameInput, 'nameinputt');
      props.processName(nameInput);
    } else {
      setNameInput('');
      greetings('Please say your name?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
        setShowListeningIcon(true);
        startRecognizing('number');
      });
    }
  };

  return (
    <View style={styles.container_mini}>
      {showVoice && !showCheck && !showManualInput ? (
        <Text style={styles.input_heading}>Please say your Name</Text>
      ) : null}
      {showListeningIcon && (
        <View style={styles.showListeningIcon_container}>
          <Image
            style={styles.listening_animation_mini}
            source={require('../public/mic.gif')}
          />
          <Text style={styles.listening_text_mini}>Listening...</Text>
        </View>
      )}
      {showManualInput && (
        <View style={styles.inputContainer_voice2}>
          <Text style={styles.input_label}>Enter Name</Text>
          <View style={styles.inputContainer_voice}>
            <TextInput
              style={styles.inputs_voice}
              placeholder="Phone Number"
              // secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(number) => setNameInput(number)}>
              {/* <Text>{name}</Text> */}
            </TextInput>
            <Button onPress={stopRecognizing} title="Submit" color="#389cff" />
          </View>
        </View>
      )}
      {!showManualInput && <Text style={styles.voice_text}>{nameInput}</Text>}
      {showCheck && (
        <View style={styles.token_modal_mini_container}>
          <View style={styles.token_modal_mini}>
            <View style={styles.coffee_buttons}>
              <TouchableOpacity
                style={styles.coffee_button}
                onPress={() => confirmInput('yes')}>
                <Text style={styles.coffee_button_text}>
                  Yes 👍 {'\n'}My name is correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.coffee_button3}
                onPress={() => confirmInput('no')}>
                <Text style={styles.coffee_button_text}>
                  No 👎 {'\n'}I want to speak again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={styles.type_button}
              onPress={showManualLayout}>
              <Text style={styles.type_text}>
                Want to type instead? Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const EmailInput = (props) => {
  const [showListeningIcon, setShowListeningIcon] = useState(false);
  const [emailInput, setEmailInput] = useState();
  const [showCheck, setShowCheck] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

  const greetings = (text, time, t) => {
    return new Promise((resolve, reject) => {
      // setShowVideo(true);
      // setAmplitude(2);
      setShowVoice(true);
      Tts.speak(text, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  useEffect((event) => {
    greetings('Please say your email?', 2, 'number').then((result) => {
      // setShowVideo(false);
      // setAmplitude(0);
      setShowVoice(false);
      setShowListeningIcon(true);
      startRecognizing('number');
    });

    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechEnd = onSpeechEndHandler;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

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
      setShowCheck(true);
      setShowManualInput(false);
      greetings('Did i get your email right?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
      });
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const onSpeechResults = (event) => {
    setEmailInput(event.value[0]);
  };

  const showManualLayout = () => {
    setShowManualInput(true);
    setShowCheck(false);
  };

  async function validateEmail(e, type) {
    try {
      let response = await axios.post(
        'http://61.246.39.136:5000/email?email=' + e,
      );
      // console.log(response.data.email)
      return response.data.email;
    } catch (error) {
      console.log(error);
    }
  }

  const confirmInput = (e) => {
    setShowCheck(false);
    if (e === 'yes') {
      validateEmail(emailInput).then((result) => {
        if (result === 'Not valid') {
          greetings('Please say your valid email address?', 2.5, 'email').then(
            (result) => {
              // setShowVideo(false);
              // setAmplitude(0);
              setShowListeningIcon(true);
              startRecognizing();
            },
          );
        } else {
          props.processEmail(emailInput);
        }
      });
    } else {
      setEmailInput('');
      greetings('Please say your email?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
        setShowListeningIcon(true);
        startRecognizing('number');
      });
    }
  };

  return (
    <View style={styles.container_mini}>
      {showVoice && !showCheck && !showManualInput ? (
        <Text style={styles.input_heading}>Please say your Email</Text>
      ) : null}

      {showListeningIcon && (
        <View style={styles.showListeningIcon_container}>
          <Image
            style={styles.listening_animation_mini}
            source={require('../public/mic.gif')}
          />
          <Text style={styles.listening_text_mini}>Listening...</Text>
        </View>
      )}
      {showManualInput && (
        <View style={styles.inputContainer_voice2}>
          <Text style={styles.input_label}>Enter Email</Text>
          <View style={styles.inputContainer_voice}>
            <TextInput
              style={styles.inputs_voice}
              placeholder="Phone Number"
              // secureTextEntry={true}
              // underlineColorAndroid='transparent'
              onChangeText={(e) => setEmailInput(e)}>
              {/* <Text>{name}</Text> */}
            </TextInput>
            <Button onPress={stopRecognizing} title="Submit" color="#389cff" />
          </View>
        </View>
      )}
      {!showManualInput && <Text style={styles.voice_text}>{emailInput}</Text>}
      {showCheck && (
        <View style={styles.token_modal_mini_container}>
          <View style={styles.token_modal_mini}>
            <View style={styles.coffee_buttons}>
              <TouchableOpacity
                style={styles.coffee_button}
                onPress={() => confirmInput('yes')}>
                <Text style={styles.coffee_button_text}>
                  Yes 👍 {'\n'}My email is correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.coffee_button3}
                onPress={() => confirmInput('no')}>
                <Text style={styles.coffee_button_text}>
                  No 👎 {'\n'}I want to speak again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={styles.type_button}
              onPress={showManualLayout}>
              <Text style={styles.type_text}>
                Want to type instead? Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const ProductInput = (props) => {
  const [showListeningIcon, setShowListeningIcon] = useState(false);
  const [productInput, setProductInput] = useState();
  const [showCheck, setShowCheck] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

  const greetings = (text, time, t) => {
    return new Promise((resolve, reject) => {
      // setShowVideo(true);
      // setAmplitude(2);
      setShowVoice(true);
      Tts.speak(text, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  useEffect((event) => {
    greetings(
      'Which product would you like to service today',
      4,
      'number',
    ).then((result) => {
      // setShowVideo(false);
      // setAmplitude(0);
      setShowVoice(false);
      setShowListeningIcon(true);
      startRecognizing('number');
    });

    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechEnd = onSpeechEndHandler;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

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
      setShowCheck(true);
      setShowManualInput(false);
      greetings('Did i get your product right?', 2, 'number').then((result) => {
        // setShowVideo(false);
        // setAmplitude(0);
      });
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const onSpeechResults = (event) => {
    setProductInput(event.value[0]);
  };

  const showManualLayout = () => {
    setShowManualInput(true);
    setShowCheck(false);
  };

  const getProduct = async (productInput) => {
    try {
      let response = await axios.post(
        'http://61.246.39.136:5000/product_name?product_name=' + productInput,
      );
      if (typeof response.data !== 'undefined') {
        return response.data.product;
      } else {
        return 'Phone';
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmInput = (e) => {
    setShowCheck(false);
    if (e === 'yes') {
      getProduct(productInput).then((result) => {
        props.processProduct(productInput, result);
      });
    } else {
      setProductInput('');
      greetings('Please say your product name again?', 3, 'number').then(
        (result) => {
          // setShowVideo(false);
          // setAmplitude(0);
          setShowListeningIcon(true);
          startRecognizing('number');
        },
      );
    }
  };

  return (
    <View style={styles.container_mini}>
      {showVoice && !showCheck && !showManualInput ? (
        <Text style={styles.input_heading}>
          Which product would you like to service today?
        </Text>
      ) : null}
      {showListeningIcon && (
        <View style={styles.showListeningIcon_container}>
          <Image
            style={styles.listening_animation_mini}
            source={require('../public/mic.gif')}
          />
          <Text style={styles.listening_text_mini}>Listening...</Text>
        </View>
      )}
      {showManualInput && (
        <View style={styles.inputContainer_voice2}>
          <Text style={styles.input_label}>Enter Product</Text>
          <View style={styles.inputContainer_voice}>
            <TextInput
              style={styles.inputs_voice}
              placeholder="Product"
              underlineColorAndroid="transparent"
              onChangeText={(e) => setProductInput(e)}>
              {/* <Text>{name}</Text> */}
            </TextInput>
            <Button onPress={stopRecognizing} title="Submit" color="#389cff" />
          </View>
        </View>
      )}
      {!showManualInput && (
        <Text style={styles.voice_text}>{productInput}</Text>
      )}
      {showCheck && (
        <View style={styles.token_modal_mini_container}>
          <View style={styles.token_modal_mini}>
            <View style={styles.coffee_buttons}>
              <TouchableOpacity
                style={styles.coffee_button}
                onPress={() => confirmInput('yes')}>
                <Text style={styles.coffee_button_text}>
                  Yes 👍 {'\n'}My product is correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.coffee_button3}
                onPress={() => confirmInput('no')}>
                <Text style={styles.coffee_button_text}>
                  No 👎 {'\n'}I want to speak again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={styles.type_button}
              onPress={showManualLayout}>
              <Text style={styles.type_text}>
                Want to type instead? Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
