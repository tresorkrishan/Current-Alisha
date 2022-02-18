import React, {useContext, useState, useEffect} from 'react';
import imageCroissant from '../public/foods_public/croissant.png';
import imageCookie from '../public/foods_public/cookies.png';
import imageSavoury from '../public/foods_public/croisstata.png';
import imageCoffee from '../public/foods_public/coffee.png';
import iphone from '../public/iphone.jpeg';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {StateContext} from './StateContext.js';
import styles from './styles/DrinksMenuStyle';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import './Drinks.css';

const MenuLayout = (props) => {
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

  // const itemStyle = {
  //     top: props.identifier === 'SAVOURY' ? '-3em' : props.identifier === 'COFFEE' ? '-5em' : '-1em'
  // };

  // const imgStyle = {
  //     top: props.identifier === 'SAVOURY' ? '-2em' : props.identifier === 'COFFEE' ? '-3em' : '-1em'
  // };

  return (
    <React.Fragment>
      <View style={styles.image_shadow}>
        <Image
          style={
            props.type === 'suggestions'
              ? styles.suggestImage
              : props.type === 'snacks'
              ? styles.snacksImage
              : styles.drinkImage
          }
          source={
            props.identifier === 'Iphone13'
              ? require('../public/iphone.png')
              : props.identifier === 'SAVOURY'
              ? require('../public/foods_public/croisstata.png')
              : props.identifier === 'CROISSANTS'
              ? require('../public/foods_public/croissant.png')
              : require('../public/foods_public/coffee.png')
          }
        />
      </View>
      <View
        style={
          props.type === 'suggestions'
            ? styles.item_details_sg
            : styles.item_details
        }>
        <Text
          style={props.type === 'snacks' ? styles.item_snacks : styles.item}>
          {props.item}
        </Text>
        <Text
          style={props.type === 'snacks' ? styles.price_snacks : styles.price}>
          Price: ₹{props.price}
        </Text>
        {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing ade dolor sit consectetur </p> */}
        {showAdd ? (
          <TouchableOpacity onPress={() => addToCart()}>
            <Text
              style={
                props.type === 'snacks'
                  ? styles.addButton_snacks
                  : styles.addButton
              }>
              Add
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={
              props.type === 'snacks'
                ? styles.plus_minus_buttons_snacks
                : styles.plus_minus_buttons
            }>
            <TouchableOpacity
              style={{borderRadius: 6}}
              onPress={() => decrease()}>
              <Text style={styles.plus_minus_minus}>-</Text>
            </TouchableOpacity>
            <Text style={styles.drinks_count}>{count}</Text>
            <TouchableOpacity
              style={{borderRadius: 6}}
              onPress={() => increase()}>
              <Text style={styles.plus_minus_add}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </React.Fragment>
  );
};

export default MenuLayout;
