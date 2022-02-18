import React, {useContext, useState, useEffect} from 'react';
import imageCookie from '../public/foods_public/cookies.png';
import imageCroissant from '../public/foods_public/croissant.png';
import imageSavoury from '../public/foods_public/croisstata.png';
import {StateContext} from './StateContext.js';

// import './Drinks.css';

const Suggest = (props) => {
  const {value3} = useContext(StateContext);
  const [cart, setCart] = value3;
  const [showAdd, setShowAdd] = useState(true);
  const [count, setCount] = useState(0);
  let itemList = {};
  useEffect(() => {
    if (cart.length) {
      let items = [...cart];
      items.every((element, index) => {
        if (element.item == props.item && element.incart == true) {
          setShowAdd(false);
          setCount(element.count);
          return false;
        }
        return true;
      });
    } else {
      setShowAdd(true);
    }
  });
  const increase = () => {
    let items = [...cart];
    items.every((element, index) => {
      if (element.item == props.item) {
        items[index].count += 1;
        items[index].newcost = items[index].newcost + items[index].price;
        setCart(items);
        setCount(count + 1);
        return false;
      }
      return true;
    });
  };

  const decrease = () => {
    let items = [...cart];
    items.every((element, index) => {
      if (element.item == props.item) {
        if (element.count == 1) {
          items.splice(index, 1);
          setCart(items);
          setShowAdd(true);
          return false;
        } else {
          items[index].count = items[index].count - 1;
          items[index].newcost = items[index].newcost - items[index].price;
          setCount(count - 1);
          setCart(items);
          return false;
        }
      }
      return true;
    });
  };
  const addToCart = () => {
    setCount(count + 1);
    setShowAdd(false);
    itemList = {
      item: props.item,
      price: props.price,
      count: 1,
      newcost: props.price,
      incart: true,
    };
    setCart((curr) => [...curr, itemList]);
  };

  const itemStyle = {
    top: props.identifier === 'SAVOURY' ? '-3em' : '-1em',
  };

  const imgStyle = {
    top: props.identifier === 'SAVOURY' ? '-2em' : '-1em',
  };

  return (
    <React.Fragment>
      <img
        style={imgStyle}
        className="suggestImage"
        src={
          props.identifier === 'COOKIES'
            ? imageCookie
            : props.identifier === 'SAVOURY'
            ? imageSavoury
            : imageCroissant
        }
      />
      <div style={itemStyle} className="item_details_sg">
        <p className="item">{props.item}</p>
        <p className="price">Price: {props.price}</p>
        {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing ade dolor sit consectetur </p> */}
        {showAdd ? (
          <a className="addButton" onClick={addToCart}>
            Add
          </a>
        ) : (
          <div className="plus_minus_buttons">
            <button className="plus_minus_minus" onClick={decrease}>
              -
            </button>
            <div className="drinks_count">{count}</div>
            <button className="plus_minus_add" onClick={increase}>
              +
            </button>{' '}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default Suggest;
