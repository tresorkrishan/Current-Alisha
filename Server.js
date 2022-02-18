import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainMenu from './components/MainMenu';
import TokenGenerationVoice from './components/TokenGenerationVoice';
import FoodsAndBeverages from './components/FoodsAndBeverages';
import DrinksMenu from './components/DrinksMenu';
import Snacks from './components/Snacks.js';
import Entertainment from './components/Entertainment';
import Shoping from './components/Shoping';
import AskMethod from './components/AskMethod';
import TokenGenerationType from './components/TokenGenerationType';
import {StateProvider} from './components/StateContext.js';
import SoftServices from './components/SoftServices.js';
import OnlineStore from './components/OnlineStore.js';
import UserManual from './components/UserManual.js';
import Cart from './components/Cart.js';
import {LogBox} from 'react-native';
import IpadMenu from './components/IpadMenu';
import IphoneMenu from './components/IphoneMenu';
import MacMenu from './components/MacMenu';
import WatchMenu from './components/WatchMenu';
import ProductMenu from './components/ProductMenu';
import ERPmenu from './components/ErpMenu';
import ProductListing from './components/ProductListing';
import {Provider} from 'react-redux';
import store from './components/Store/Index';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Snacks">
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="AskMethod" component={AskMethod} />
          <Stack.Screen
            name="TokenGenerationVoice"
            component={TokenGenerationVoice}
          />
          <Stack.Screen
            name="TokenGenerationType"
            component={TokenGenerationType}
          />
          <Stack.Screen
            name="FoodsAndBeverages"
            component={FoodsAndBeverages}
          />
          <Stack.Screen name="SoftServices" component={SoftServices} />
          <Stack.Screen name="UserManual" component={UserManual} />
          <Stack.Screen name="OnlineStore" component={OnlineStore} />
          <Stack.Screen name="DrinksMenu" component={DrinksMenu} />
          <Stack.Screen name="Snacks" component={Snacks} />
          <Stack.Screen name="Entertainment" component={Shoping} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ERPmenu" component={ERPmenu} />
          <Stack.Screen name="IpadMenu" component={IpadMenu} />
          <Stack.Screen name="IphoneMenu" component={IphoneMenu} />
          <Stack.Screen name="MacMenu" component={MacMenu} />
          <Stack.Screen name="WatchMenu" component={WatchMenu} />
          <Stack.Screen name="ProductListing" component={ProductListing} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

export default App;
