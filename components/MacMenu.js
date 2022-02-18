import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import ErpMenu from './ErpMenu';

const MacMenu = ({navigation}) => {
  let productData = ErpMenu();

  //Remaining Quantity for MacBook Air M1-----------//
  const filteredDataMacBookAirM1 = productData
    .filter(function (item) {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'MacBook Air M1'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for MacBook Pro-----------//
  const filteredDataMacbookPro = productData
    .filter(function (item) {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'Macbook Pro'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for MacBook Pro M1----------//
  const filteredDataIMacbookProM1 = productData
    .filter(function (item) {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'MacBook Pro M1'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for iMac-----------//
  const filteredDataImac = productData
    .filter(function (item) {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'iMac'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for Mac Mini-----------//
  const filteredDataMacMini = productData
    .filter(function (item) {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'Mac Mini M1'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  let totalAmount = sumProperty(productData, 'Remaining_Qty');

  let totalAmountFilteredDataMacBookAirM1 = sumProperty(
    filteredDataMacBookAirM1,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataMacBookPro = sumProperty(
    filteredDataMacbookPro,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataMacBookProM1 = sumProperty(
    filteredDataIMacbookProM1,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataImac = sumProperty(
    filteredDataImac,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataMacMini = sumProperty(
    filteredDataMacMini,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      title: 'MacBook Air M1',
      view: 'MacBookAirM1',
      image:
        'https://images.macrumors.com/t/rWl5IHswJZlYDz3b4aYIA4KL8jo=/800x0/smart/article-new/2013/09/macbook_air_trio_transparent.png?lossy',
      Quantity: `${totalAmountFilteredDataMacBookAirM1}`,
    },
    {
      id: 2,
      title: 'MacBook Pro',
      view: 'MacBookPro',
      image:
        'https://w7.pngwing.com/pngs/918/793/png-transparent-macbook-pro-13-inch-macbook-air-laptop-macbook-gadget-electronics-laptop.png',
      Quantity: `${totalAmountFilteredDataMacBookPro}`,
    },
    {
      id: 3,
      title: 'MacBook Pro M1',
      view: 'MacBookProM1',
      image: 'https://photos2.insidercdn.com/new-imacs-070807-1.png',
      Quantity: `${totalAmountFilteredDataMacBookProM1}`,
    },
    {
      id: 4,
      title: 'iMac ',
      view: 'Imac',
      image:
        'https://photos5.appleinsider.com/gallery/37019-69274-27-inch-iMac-xl.jpg',
      Quantity: `${totalAmountFilteredDataImac}`,
    },
    {
      id: 4,
      title: 'Mac Mini M1 ',
      view: 'MacMiniM1',
      image:
        'https://photos5.appleinsider.com/gallery/37019-69274-27-inch-iMac-xl.jpg',
      Quantity: `${totalAmountFilteredDataMacMini}`,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.view)}>
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View style={styles.cardHeader}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.quantity}>Quantity:{item.Quantity}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MacMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 220,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  quantity: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
    marginBottom: 20,
  },
});
