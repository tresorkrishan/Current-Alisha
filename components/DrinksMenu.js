import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {StateContext} from './StateContext.js';
// import './Drinks.css';
import MenuLayout from './MenuLayout.js';
import Footer from './Footer.js';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/DrinksMenuStyle';
import {ScrollView} from 'react-native-gesture-handler';

const DrinksMenu = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const {value2} = useContext(StateContext);
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
  let data = Object.keys(value2).map((key, index) => {
    if (value2[key].Menu === 'COFFEE') {
      return (
        <ScrollView>
          <View style={styles.items_container} key={index}>
            <MenuLayout
              type="drinks"
              item={value2[key].Item}
              price={value2[key].Price}
              index={index}
              identifier={value2[key].Menu}
            />
          </View>
        </ScrollView>
      );
    }
  });

  Object.keys(data).forEach((key) => {
    if (data[key] != undefined) {
      data2.push(data[key]);
    }
  });

  return (
    <React.Fragment>
      <ScrollView>
        <Text style={styles.coffee_heading}>Coffee..?</Text>
        <LinearGradient
          colors={['#ff9d00', '#844900']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <ScrollView horizontal={true}>
            <View style={styles.drinks_container}>
              {data2.map((element, index) => {
                return (
                  <View style={styles.drinks} key={index}>
                    {element}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </LinearGradient>

        <Text style={styles.suggest_heading}>Have a snack</Text>
        <LinearGradient
          colors={['#ffd200', '#f7971e']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <ScrollView horizontal={true}>
            <Suggestions />
          </ScrollView>
        </LinearGradient>
      </ScrollView>
      <LinearGradient
        colors={['#ffffff', '#dfe9f3']}
        style={styles.footer_container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Footer navigation={navigation} />
      </LinearGradient>
    </React.Fragment>
  );
};

const Suggestions = () => {
  const {value2} = useContext(StateContext);
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
  let data = Object.keys(value2).map((key, index) => {
    if (
      value2[key].Menu === 'CROISSANTS' ||
      value2[key].Menu === 'SAVOURY' ||
      value2[key].Menu === 'COOKIES'
    ) {
      return (
        <View style={styles.items_container} key={index}>
          <MenuLayout
            type="suggestions"
            item={value2[key].Item}
            price={value2[key].Price}
            index={index}
            identifier={value2[key].Menu}
          />
        </View>
      );
    }
  });

  Object.keys(data).forEach((key, i) => {
    if (data[key] != undefined) {
      data2.push(data[key]);
    }
  });

  return (
    <View style={styles.suggestions_container}>
      {data2.map((element, index) => (
        <View style={styles.suggestions} key={index}>
          {element}
        </View>
      ))}
    </View>
  );
};

export default DrinksMenu;
