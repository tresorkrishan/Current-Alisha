// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Alert,
//   ScrollView,
//   FlatList,
//   Button,
//   Pressable,
// } from 'react-native';

// export default class ProductListing extends Component {
//   constructor(props, navigation) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           title: 'Iphone 13 pro',
//           view: 'ProductListing',
//           image:
//             'https://www.pngarts.com/files/8/Apple-iPhone-11-PNG-Picture.png',
//         },
//         {
//           id: 1,
//           title: 'Iphone 13',
//           view: 'MacMenu',
//           image:
//             'https://images.idgesg.net/images/article/2020/11/m1-macbook-air-macbook-pro-mac-mini-100866068-large.jpg?auto=webp&quality=85,70',
//         },
//         {
//           id: 2,
//           title: 'Ihone 13 Mini',
//           view: 'IpadMenu',
//           image:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUlj6iscAAzijYV026QYD1TIe9zYiNlOpRQ&usqp=CAU',
//         },
//         {
//           id: 3,
//           title: 'Iphone 13 Max',
//           view: 'WatchMenu',
//           image:
//             'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png',
//         },
//         {
//           id: 3,
//           title: 'Iphone 13',
//           view: 'WatchMenu',
//           image:
//             'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png',
//         },
//       ],
//     };
//   }
//   clickEventListener(item) {
//     Alert.Alert(item.view);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.list}
//           contentContainerStyle={styles.listContainer}
//           data={this.state.data}
//           horizontal={false}
//           numColumns={2}
//           keyExtractor={(item) => {
//             return item.id;
//           }}
//           renderItem={({item}) => {
//             return (
//               <TouchableOpacity
//                 style={styles.card}
//                 onPress={() => this.props.navigation.navigate(item.view)}>
//                 <View style={styles.cardFooter}></View>
//                 <Image style={styles.cardImage} source={{uri: item.image}} />
//                 <View style={styles.cardHeader}>
//                   <View
//                     style={{alignItems: 'center', justifyContent: 'center'}}>
//                     <Text style={styles.title}>{item.title}</Text>
//                   </View>
//                 </View>
//                 <View>
//                   <Pressable style={styles.button}>
//                     <Text style={styles.text}>Book Now</Text>
//                   </Pressable>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 220,
//   },
//   list: {
//     paddingHorizontal: 5,
//     backgroundColor: '#E6E6E6',
//   },
//   listContainer: {
//     alignItems: 'center',
//   },
//   /******** card **************/
//   card: {
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     borderRadius: 7,
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,

//     elevation: 12,
//     marginVertical: 10,
//     backgroundColor: 'white',
//     flexBasis: '42%',
//     marginHorizontal: 10,
//   },
//   cardHeader: {
//     paddingVertical: 17,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 1,
//     borderTopRightRadius: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardContent: {
//     paddingVertical: 12.5,
//     paddingHorizontal: 16,
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 12.5,
//     paddingBottom: 25,
//     paddingHorizontal: 16,
//     borderBottomLeftRadius: 1,
//     borderBottomRightRadius: 1,
//   },
//   cardImage: {
//     height: 100,
//     width: 100,
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 18,
//     flex: 1,
//     alignSelf: 'center',
//     color: '#696969',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//   },
//   text: {
//     fontSize: 16,
//     padding: 5,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'black',
//     backgroundColor: 'grey',
//   },
// });

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
      Menu: 'Iphone13',
      Item: 'Iphone 13 Pro ',
      Price: 100000,
      Details:
        'Our traditional butter croissant filled with almond frangipane and topped with toasted almonds',
    },
    {
      Menu: 'Iphone13',
      Item: 'Iphone 13 Pro ',
      Price: 100000,
      Details:
        'Our traditional butter croissant filled with almond frangipane and topped with toasted almonds',
    },
    {
      Menu: 'Iphone13',
      Item: 'Iphone 13 Pro ',
      Price: 100000,
      Details:
        'Our traditional butter croissant filled with almond frangipane and topped with toasted almonds',
    },
    {
      Menu: 'Iphone13',
      Item: 'Iphone 13 Pro ',
      Price: 100000,
      Details:
        'Our traditional butter croissant filled with almond frangipane and topped with toasted almonds',
    },
  ];
  let data2 = [];
  let data = Object.keys(menuItems).map((key, index) => {
    if (
      menuItems[key].Menu === 'Iphone13' ||
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
      <Text style={styles.snacks_heading}>Booking Time</Text>
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
