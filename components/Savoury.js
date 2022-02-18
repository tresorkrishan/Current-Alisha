import React, {useContext} from 'react';
import {StateContext} from '../../state_management/StateContext.js';
import './Drinks.css';
import image from '../../public/foods_public/savoury.jpg';

const Savoury = () => {
  const {value2} = useContext(StateContext);
  const [menuItems, setMenuItems] = value2;
  return (
    <div className="container">
      {Object.keys(menuItems).map((key, index) => {
        if (menuItems[key].Menu === 'SAVOURY') {
          return (
            <div key={index} className="items">
              <img className="drinkImage" src={image} />
              <p className="item">{menuItems[key].Item}</p>
              <p className="price">Price: {menuItems[key].Price}</p>
              <a className="addButton">Add</a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Savoury;
