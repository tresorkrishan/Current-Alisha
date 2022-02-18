import React, {useContext, useState, useEffect} from 'react';
import {StateContext} from './StateContext.js';
// import '../styles/Snacks.css';
import Footer from './Footer.js';
import MenuLayout from './MenuLayout.js';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles/DrinksMenuStyle';
import LinearGradient from 'react-native-linear-gradient';

const Snacks = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const menuItems = [
    {Menu: 'COFFEE', Item: 'Espresso', Price: 125, Details: ''},
    {Menu: 'COFFEE', Item: 'Doppio ', Price: 150, Details: ''},
    {Menu: 'COFFEE', Item: 'Americano ', Price: 150, Details: ''},
    {Menu: 'COFFEE', Item: 'Macchiato ', Price: 150, Details: ''},
    {Menu: 'COFFEE', Item: 'Cappuccino ', Price: 160, Details: ''},
    {Menu: 'COFFEE', Item: 'Cortado ', Price: 180, Details: ''},
    {Menu: 'COFFEE', Item: 'Flat White ', Price: 180, Details: ''},
    {Menu: 'COFFEE', Item: 'Mocha ', Price: 200, Details: ''},
    {
      Menu: 'CROISSANTS',
      Item: 'Almond ',
      Price: 200,
      Details:
        'Our traditional butter croissant filled with almond frangipane and topped with toasted almonds',
    },
    {
      Menu: 'CROISSANTS',
      Item: 'Chocolate and Salted Caramel ',
      Price: 200,
      Details:
        'Our traditional butter croissant filled with nutty chocolate frangipane and salted caramel',
    },
    {
      Menu: 'SAVOURY',
      Item: 'Zucchini Casserole Croisstata ',
      Price: 180,
      Details: 'Zucchini Noodles and thyme in creamy bechamel sauce',
    },
    {
      Menu: 'SAVOURY',
      Item: 'Aubergine and Tomato Salsa Croisstata ',
      Price: 180,
      Details:
        'roasted aubergine, rosemary, smoked peppers and tomato salsa with mozzarella cheese',
    },
    {
      Menu: 'SAVOURY',
      Item: 'Smoked Chicken Ham & Cheese',
      Price: 200,
      Details: 'smoked chicken ham slice and cheese rolled in a croissant',
    },
    {
      Menu: 'CROISSANTS',
      Item: 'Traditional Butter Croissant',
      Price: 140,
      Details: '',
    },
    {
      Menu: 'COOKIES',
      Item: 'Chocolate Chip Cookie eggless',
      Price: 40,
      Details: '',
    },
    {Menu: 'COOKIES', Item: 'Oats & Raisins ', Price: 40, Details: ''},
    {
      Menu: 'BUN',
      Item: 'BUN	Morning Bun',
      Price: 150,
      Details: 'fresh orange zest and cinnamon',
    },
  ];
  let data2 = [];
  let data = Object.keys(menuItems).map((key, index) => {
    if (
      menuItems[key].Menu === 'COOKIES' ||
      menuItems[key].Menu === 'CROISSANTS' ||
      menuItems[key].Menu === 'SAVOURY'
    ) {
      return (
        <View style={styles.items_container_snacks} key={index}>
          <MenuLayout
            type="snacks"
            item={menuItems[key].Item}
            price={menuItems[key].Price}
            index={index}
            identifier={menuItems[key].Menu}
          />
        </View>
      );
    } else {
    }
  });

  Object.keys(data).forEach((key, i) => {
    if (data[key] != undefined) {
      data2.push(data[key]);
    }
  });

  return (
    <LinearGradient
      colors={['#ffffff', '#dfe9f3']}
      style={styles.snacks_linear_container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Text style={styles.snacks_heading}>Snack time</Text>
      <LinearGradient
        colors={['#ff9d00', '#844900']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.linearGradient}>
        <ScrollView horizontal={true}>
          <View style={styles.snacks_container}>
            {data2.map((element, index) => {
              return (
                <View style={styles.snacks} key={index}>
                  {element}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};

export default Snacks;
