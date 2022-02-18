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

// --------------Iphone Categories Routes------------------------//
import Iphone13ProMax from './components/Views/IphoneSizeInventory/Iphone13ProMax';
import Iphone12ProMax from './components/Views/IphoneSizeInventory/Iphone12ProMax';
import Iphone13Pro from './components/Views/IphoneSizeInventory/Iphone13Pro';
import Iphone12 from './components/Views/IphoneSizeInventory/Iphone12';
import Iphone13 from './components/Views/IphoneSizeInventory/Iphone13';
import Iphone11 from './components/Views/IphoneSizeInventory/Iphone11';
import Iphone12Pro from './components/Views/IphoneSizeInventory/Iphone12Pro';
import Iphone13Mini from './components/Views/IphoneSizeInventory/Iphone13Mini';

// --------------Ipad Categories Routes----------------------//
import MacBookAirM1 from './components/Views/MacSizeInventory/MacAirM1';
import MacBookPro from './components/Views/MacSizeInventory/MacBookPro';
import MacBookProM1 from './components/Views/MacSizeInventory/MacBookProM1';
import Imac from './components/Views/MacSizeInventory/Imac';
import MacMiniM1 from './components/Views/MacSizeInventory/MacMiniM1';

// --------------Ipad Categories Routes-----------------//
import IpadMini from './components/Views/IpadSizeInventory/IpadMini';
import Ipad11 from './components/Views/IpadSizeInventory/Ipad11';
import Ipad102 from './components/Views/IpadSizeInventory/Ipad102';
import Ipad109 from './components/Views/IpadSizeInventory/Ipad109';
import Ipad12 from './components/Views/IpadSizeInventory/Ipad12';

// -------------------Iphone 11 Routes  ----------------//
import Iphone11128GB from './components/Views/IphoneColorInventory/Iphone11/Iphone11128GB';
import Iphone1164GB from './components/Views/IphoneColorInventory/Iphone11/Iphone1164GB';
import Iphone11256GB from './components/Views/IphoneColorInventory/Iphone11/Iphone11256GB';
import Iphone11512GB from './components/Views/IphoneColorInventory/Iphone12/Iphone12512GB';

// --------------Iphone 12 Color Routes-------------------////

import Iphone12128GB from './components/Views/IphoneColorInventory/Iphone12/Iphone12128GB';
import Iphone1264GB from './components/Views/IphoneColorInventory/Iphone12/Iphone1264GB';
import Iphone12256GB from './components/Views/IphoneColorInventory/Iphone12/Iphone12256GB';
import Iphone12512GB from './components/Views/IphoneColorInventory/Iphone12/Iphone12512GB';

//---------------Iphone 12 Pro Color  Routes-------------------------//
import Iphone12Pro128GB from './components/Views/IphoneColorInventory/Iphone12Pro/Iphone12Pro128GB';
import Iphone12Pro64GB from './components/Views/IphoneColorInventory/Iphone12Pro/Iphone12Pro64GB';
import Iphone12Pro256GB from './components/Views/IphoneColorInventory/Iphone12Pro/Iphone12Pro256GB';
import Iphone12Pro512GB from './components/Views/IphoneColorInventory/Iphone12Pro/Iphone12Pro512GB';

//---------------Iphone 12 Pro Max Color  Routes-------------------------//
import Iphone12ProMax128GB from './components/Views/IphoneColorInventory/Iphone12ProMax/Iphone12ProMax128GB';
import Iphone12ProMax64GB from './components/Views/IphoneColorInventory/Iphone12ProMax/Iphone12ProMax64GB';
import Iphone12ProMax256GB from './components/Views/IphoneColorInventory/Iphone12ProMax/Iphone12ProMax256GB';
import Iphone12ProMax512GB from './components/Views/IphoneColorInventory/Iphone12ProMax/Iphone12ProMax512GB';

//---------------Iphone 13 Color  Routes-------------------------//
import Iphone13128 from './components/Views/IphoneColorInventory/Iphone13/Iphone13128GB';
import Iphone1364GB from './components/Views/IphoneColorInventory/Iphone13/Iphone1364GB';
import Iphone13256GB from './components/Views/IphoneColorInventory/Iphone13/Iphone13256GB';
import Iphone13512GB from './components/Views/IphoneColorInventory/Iphone13/Iphone13512GB';

//---------------Iphone 13 Mini Color  Routes-------------------------//
import Iphone13Mini128GB from './components/Views/IphoneColorInventory/Iphone13Mini/Iphone13Mini128GB';
import Iphone13Mini64GB from './components/Views/IphoneColorInventory/Iphone13Mini/Iphone13Mini64GB';
import Iphone13Mini256GB from './components/Views/IphoneColorInventory/Iphone13Mini/Iphone13Mini256GB';
import Iphone13Mini512GB from './components/Views/IphoneColorInventory/Iphone13Mini/Iphone13Mini512GB';

//-------------------Iphone 13 Pro Color  Routes-------------------------//
import Iphone13Pro128GB from './components/Views/IphoneColorInventory/Iphone13Pro/Iphone13Pro128GB';
import Iphone13Pro64GB from './components/Views/IphoneColorInventory/Iphone13Pro/Iphone13Pro64GB';
import Iphone13Pro256GB from './components/Views/IphoneColorInventory/Iphone13Pro/Iphone13Pro256GB';
import Iphone13Pro512GB from './components/Views/IphoneColorInventory/Iphone13Pro/Iphone13Pro512GB';

//-------------------Iphone 13 Pro Max Color  Routes-------------------------//

import Iphone13ProMax128GB from './components/Views/IphoneColorInventory/Iphone13ProMax/Iphone13ProMax128GB';
import Iphone13ProMax64GB from './components/Views/IphoneColorInventory/Iphone13ProMax/Iphone13ProMax64GB';
import Iphone13ProMax512GB from './components/Views/IphoneColorInventory/Iphone13ProMax/Iphone13ProMax512GB';
import Iphone13ProMax256GB from './components/Views/IphoneColorInventory/Iphone13ProMax/Iphone13ProMax256GB';
import InventoryUserForm from './components/InventoryUserForm';
// import AllData from './components/AllData';

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
          <Stack.Screen name="ProductMenu" component={ProductMenu} />

          {/* -----------------Product Menu Routes------- */}

          <Stack.Screen name="IpadMenu" component={IpadMenu} />
          <Stack.Screen name="IphoneMenu" component={IphoneMenu} />
          <Stack.Screen name="MacMenu" component={MacMenu} />
          <Stack.Screen name="WatchMenu" component={WatchMenu} />

          <Stack.Screen name="ERPmenu" component={ERPmenu} />
          <Stack.Screen name="ProductListing" component={ProductListing} />

          {/* -----------IPhone Categories Routes -------------- */}
          <Stack.Screen name="Iphone13ProMax" component={Iphone13ProMax} />
          <Stack.Screen name="Iphone12ProMax" component={Iphone12ProMax} />
          <Stack.Screen name="Iphone13Pro" component={Iphone13Pro} />
          <Stack.Screen name="Iphone12Pro" component={Iphone12Pro} />
          <Stack.Screen name="Iphone11" component={Iphone11} />
          <Stack.Screen name="Iphone13" component={Iphone13} />
          <Stack.Screen name="Iphone12" component={Iphone12} />
          <Stack.Screen name="Iphone13Mini" component={Iphone13Mini} />
          {/* -----------------Mac Categories Routes--------- */}

          <Stack.Screen name="MacBookAirM1" component={MacBookAirM1} />
          <Stack.Screen name="MacBookPro" component={MacBookPro} />
          <Stack.Screen name="MacBookProM1" component={MacBookProM1} />
          <Stack.Screen name="Imac" component={Imac} />
          <Stack.Screen name="MacMiniM1" component={MacMiniM1} />

          {/* --------------Ipad Categories Routes--------- */}

          <Stack.Screen name="IpadMini" component={IpadMini} />
          <Stack.Screen name="Ipad11" component={Ipad11} />
          <Stack.Screen name="Ipad102" component={Ipad102} />
          <Stack.Screen name="Ipad12" component={Ipad12} />
          <Stack.Screen name="Ipad109" component={Ipad109} />

          {/* ---------PRODUCT FILTERED BASED ON COLOR ----------- */}

          {/* -------------Iphoone 11 Color Routes--------- */}

          <Stack.Screen name="Iphone11128GB" component={Iphone11128GB} />
          <Stack.Screen name="Iphone1164GB" component={Iphone1164GB} />
          <Stack.Screen name="Iphone11256GB" component={Iphone11256GB} />
          <Stack.Screen name="Iphone11512GB" component={Iphone11512GB} />

          {/* ---------------Iphone 12 Color Routes-------------- */}
          <Stack.Screen name="Iphone12128GB" component={Iphone12128GB} />
          <Stack.Screen name="Iphone1264GB" component={Iphone1264GB} />
          <Stack.Screen name="Iphone12256GB" component={Iphone12256GB} />
          <Stack.Screen name="Iphone12512GB" component={Iphone12512GB} />

          {/*----------------- Iphone 12 Pro  Color Routes ------------ */}
          <Stack.Screen name="Iphone12Pro128GB" component={Iphone12Pro128GB} />
          <Stack.Screen name="Iphone12Pro64GB" component={Iphone12Pro64GB} />
          <Stack.Screen name="Iphone12Pro256GB" component={Iphone12Pro256GB} />
          <Stack.Screen name="Iphone12Pro512GB" component={Iphone12Pro512GB} />

          {/*--------------------Iphone 12 Pro Max Color Routes ------------------ */}
          <Stack.Screen
            name="Iphone12ProMax128GB"
            component={Iphone12ProMax128GB}
          />
          <Stack.Screen
            name="Iphone12ProMax64GB"
            component={Iphone12ProMax64GB}
          />
          <Stack.Screen
            name="Iphone12ProMax256GB"
            component={Iphone12ProMax256GB}
          />
          <Stack.Screen
            name="Iphone12ProMax512GB"
            component={Iphone12ProMax512GB}
          />

          {/*--------------------Iphone 13 Color Routes------------------ */}
          <Stack.Screen name="Iphone13128" component={Iphone13128} />
          <Stack.Screen name="Iphone1364GB" component={Iphone1364GB} />
          <Stack.Screen name="Iphone13256GB" component={Iphone13256GB} />
          <Stack.Screen name="Iphone13512GB" component={Iphone13512GB} />

          {/*--------------------Iphone 13 Mini  Color Routes------------------ */}
          <Stack.Screen
            name="Iphone13Mini128GB"
            component={Iphone13Mini128GB}
          />
          <Stack.Screen name="Iphone13Mini64GB" component={Iphone13Mini64GB} />
          <Stack.Screen
            name="Iphone13Mini256GB"
            component={Iphone13Mini256GB}
          />
          <Stack.Screen
            name="Iphone13Mini512GB"
            component={Iphone13Mini512GB}
          />

          {/*--------------------Iphone 13 Pro Color Routes------------------ */}
          <Stack.Screen name="Iphone13Pro128GB" component={Iphone13Pro128GB} />
          <Stack.Screen name="Iphone13Pro64GB" component={Iphone13Pro64GB} />
          <Stack.Screen name="Iphone13Pro256GB" component={Iphone13Pro256GB} />
          <Stack.Screen name="Iphone13Pro512GB" component={Iphone13Pro512GB} />

          {/*--------------------Iphone 13 Pro Color Routes------------------ */}
          <Stack.Screen
            name="Iphone13ProMax128GB"
            component={Iphone13ProMax128GB}
          />
          <Stack.Screen
            name="Iphone13ProMax64GB"
            component={Iphone13ProMax64GB}
          />
          <Stack.Screen
            name="Iphone13ProMax512GB"
            component={Iphone13ProMax512GB}
          />
          <Stack.Screen
            name="Iphone13ProMax256GB"
            component={Iphone13ProMax256GB}
          />

          <Stack.Screen
            name="InventoryUserForm"
            component={InventoryUserForm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

export default App;
