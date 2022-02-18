import axios from 'axios';
import React, {useState, createContext, useEffect} from 'react';

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [showSlider, setShowSlider] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [showMainMenuWave, setShowMainMenuWave] = useState(true);
  const [type, setType] = useState('');

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.post('/getFoodItems').then((result) => {
      setMenuItems(result);
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        show_slider: [showSlider, setShowSlider],
        value2: [menuItems, setMenuItems],
        value3: [cart, setCart],
        value4: [totalBill, setTotalBill],
        main_menu_wave: [showMainMenuWave, setShowMainMenuWave],
        input_type: [type, setType],
        name_input: [name, setName],
        phoneNumber_input: [phoneNumber, setPhoneNumber],
        email_input: [email, setEmail],
        product_input: [product, setProduct],
      }}>
      {props.children}
    </StateContext.Provider>
  );
};
