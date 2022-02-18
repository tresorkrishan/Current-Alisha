import React, {useContext, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StateContext} from './StateContext.js';
import Footer from './Footer.js';
import emptyCart from '../public/shopping-cart.png';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles/CartStyle.js';
import LinearGradient from 'react-native-linear-gradient';

const Cart = ({navigation}) => {
  const {value3, value4} = useContext(StateContext);
  const [cart, setCart] = value3;
  const [totalBill, setTotalBill] = value4;

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  useEffect(() => {
    makeTotal();
  });

  const makeTotal = () => {
    let arr = [];
    let items = [...cart];
    if (items.length) {
      items.map((element, index) => {
        arr.push(element.newcost);
      });
      let total = arr.reduce((acc, curr) => {
        return acc + curr;
      });
      setTotalBill(total);
    } else {
      setTotalBill(0);
    }
  };

  const increase = (name) => {
    let items = [...cart];
    items.every((element, index) => {
      if (element.item === name) {
        items[index].count += 1;
        items[index].newcost = items[index].newcost + items[index].price;
        setCart(items);
        return false;
      }
      return true;
    });
    makeTotal();
  };

  const decrease = (name) => {
    let items = [...cart];
    items.every((element, index) => {
      if (element.item === name) {
        if (element.count == 1) {
          items.splice(index, 1);
          setCart(items);
          return false;
        } else {
          items[index].count = items[index].count - 1;
          items[index].newcost = items[index].newcost - items[index].price;
          setCart(items);
          return false;
        }
      }
      return true;
    });
    makeTotal();
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Text style={styles.foods_heading}>Cart</Text>
      <ScrollView>
        <View style={styles.cart_container}>
          {cart.map((element, index) => (
            <View style={styles.cart_items} key={index}>
              <View style={styles.cart_c1}>
                <Text style={styles.item_name}>{element.item}</Text>
                <Text style={styles.item_price}>₹{element.newcost}</Text>
              </View>
              <View style={styles.cart_c2}>
                <View style={styles.plus_minus_buttons}>
                  <TouchableOpacity
                    style={{borderRadius: 6}}
                    onPress={() => decrease(element.item)}>
                    <Text style={styles.plus_minus_minus}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.drinks_count}>{element.count}</Text>
                  <TouchableOpacity
                    style={{borderRadius: 6}}
                    onPress={() => increase(element.item)}>
                    <Text style={styles.plus_minus_add}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.remove_button}
                  onPress={() =>
                    setCart((items) =>
                      items.filter((x) => x.item !== element.item),
                    )
                  }>
                  <Text style={styles.cross}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {cart.length ? (
            <View style={styles.container2}>
              <View style={styles.total}>
                <Text style={styles.cart_total}>Total: ₹{totalBill}</Text>
              </View>
              <TouchableOpacity style={styles.placeOrder_button}>
                <LinearGradient
                  colors={['#ffd200', '#ff8e00']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.button}>
                  <Text style={styles.placeOrder_text}>Place Order</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.cart}>Your Cart is Empty!</Text>
              <Image
                style={styles.emptycart}
                source={emptyCart}
                alt="Empty Cart"
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.placeOrder_button}
            onPress={() => navigation.navigate('ProductMenu')}>
            <LinearGradient
              colors={['#ffd200', '#ff8e00']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.button2}>
              <Text style={styles.placeOrder_text}>Continue Shopping</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </LinearGradient>
  );
};

export default Cart;
