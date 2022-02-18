import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Tts from 'react-native-tts';
import axios from 'axios';
import {StateContext} from './StateContext.js';
import token from '../public/call-center.png';
import manual from '../public/information2.png';
import food from '../public/fork.png';
import fun from '../public/console.png';
import url from '../public/link.png';
import online from '../public/online-shop.png';
import styles from './styles/MainMenuStyle.js';
import logo from '../public/logo.png';

// import RNSiriWaveView from 'react-native-siri-wave-view';

const MainMenu = ({navigation}) => {
  const {value2} = React.useContext(StateContext);
  const [menuItems, setMenuItems] = value2;

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  React.useEffect(() => {
    // setStartWave(true);
    Tts.speak('Welcome to Tech Cafe, I am Alisha! Please select an Option', {
      iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
      rate: 0.5,
    });
    getList();
  }, []);

  const getList = async () => {
    const response = await axios.post('http://61.246.39.136:9000/getList');
    setMenuItems(response.data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.footer}></View>
      {/* <RNSiriWaveView type={0} width={400} height={200} startAnimation={startWave} stopAnimation={!startWave} /> */}
      <View style={styles.menu_container}>
        <View style={styles.button_set_1}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              Tts.stop();
              navigation.navigate('AskMethod');
            }}>
            <View style={styles.container2}>
              <Text style={styles.myButton}>Token {'\n'}Generation</Text>
              <View style={styles.menu_images_container1}>
                <Image style={styles.ask_images1} source={token} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              Tts.stop();
              navigation.navigate('AllData');
            }}>
            <View style={styles.container3}>
              <Text style={styles.myButton}>Foods and Beverages</Text>
              <View style={styles.menu_images_container2}>
                <Image style={styles.ask_images2} source={food} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => {
              Tts.stop();
              navigation.navigate('SoftServices');
            }}>
            <View style={styles.container3}>
              <Text style={styles.myButton}>Soft {'\n'}Services</Text>
              <View style={styles.menu_images_container3}>
                <Image style={styles.ask_images3} source={url} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => {
              Tts.stop();
              navigation.navigate('ProductMenu');
            }}>
            <View style={styles.container4}>
              <Text style={styles.myButton}>Entertainment</Text>
              <View style={styles.menu_images_container4}>
                <Image style={styles.ask_images4} source={fun} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button5}
            onPress={() => {
              Tts.stop();
              navigation.navigate('ERPmenu');
            }}>
            <View style={styles.container5}>
              <Text style={styles.myButton2}>User {'\n'}Manual</Text>
              <View style={styles.menu_images_container5}>
                <Image style={styles.ask_images5} source={manual} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button6}
            onPress={() => {
              Tts.stop();
              navigation.navigate('InventoryUserForm');
            }}>
            <View style={styles.container5}>
              <Text style={styles.myButton2}>Online {'\n'}Store</Text>
              <View style={styles.menu_images_container6}>
                <Image style={styles.ask_images5} source={online} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default MainMenu;
