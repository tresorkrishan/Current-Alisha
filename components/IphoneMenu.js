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

const IphoneMenu = ({navigation}) => {
  let productData = ErpMenu();

  // console.log('Iphone  Data', productData);

  //Remaining Quantity for IPHONE 13-----------//
  const filteredDataIphone13 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 13'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 13 Pro-----------//
  const filteredDataIphone13Pro = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 13 Pro'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 13 Pro Max-----------//
  const filteredDataIphone13ProMax = productData
    .filter((item) => {
      return (
        item.Category_4 == 'iPhone 13 Pro max' &&
        item.Item_Category_Code == 'A15'
      );
    })
    .map(function ({Category_5, Remaining_Qty, Location_Code, Category_6}) {
      return {Category_5, Remaining_Qty, Location_Code, Category_6};
    });

  //Remaining Quantity for IPHONE 12-----------//
  const filteredDataIphone12 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 12'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 12 Pro Max-----------//
  const filteredDataIphone12ProMax = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' &&
        item.Category_4 == 'iPhone 12 pro max'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 11-----------//
  const filteredDataIphone11 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 11'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 13 Mini-----------//
  const filteredDataIphone13Mini = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 13 Mini'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  //Remaining Quantity for IPHONE 12 Pro-----------//
  const filteredDataIphone12Pro = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A15' && item.Category_4 == 'iPhone 12 Pro'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  console.log('filtered data Ipone13', filteredDataIphone13);
  console.log('filtered data is Ipone13Pro', filteredDataIphone13Pro);
  console.log('filtered data is Ipone13ProMax', filteredDataIphone13ProMax);
  console.log('filtered data is Ipone12', filteredDataIphone12);
  console.log('filtered data is Ipone11', filteredDataIphone11);
  console.log('filtered data is Ipone13 Mini', filteredDataIphone13Mini);
  // console.log('filtered data is Watches', filteredDataWatches);

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  let totalAmount = sumProperty(productData, 'Remaining_Qty');

  let totalAmountFilteredDataIphone13 = sumProperty(
    filteredDataIphone13,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIphone13Pro = sumProperty(
    filteredDataIphone13Pro,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone13ProMax = sumProperty(
    filteredDataIphone13ProMax,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone12 = sumProperty(
    filteredDataIphone12,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone11 = sumProperty(
    filteredDataIphone11,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone13Mini = sumProperty(
    filteredDataIphone13Mini,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone12ProMax = sumProperty(
    filteredDataIphone12ProMax,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIphone12Pro = sumProperty(
    filteredDataIphone12Pro,
    'Remaining_Qty',
  );

  console.log(
    'reducedata as Filtered totalAmountFilteredDataIphone13',
    totalAmountFilteredDataIphone13,
  );

  console.log(
    'reducedata as Filtered totalAmountFilteredDataIphone13Pro',
    totalAmountFilteredDataIphone13Pro,
  );

  console.log(
    'reducedata as Filtered totalAmountFilteredDataIphone13ProMax',
    totalAmountFilteredDataIphone13ProMax,
  );

  let data = [
    {
      id: 1,
      view: 'Iphone13Pro',
      title: 'Iphone 13 Pro',
      image:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
      Quantity: `${totalAmountFilteredDataIphone13Pro}`,
    },
    {
      id: 2,
      view: 'Iphone13ProMax',
      title: 'Iphone 13 Pro Max',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountFilteredDataIphone13ProMax}`,
    },
    {
      id: 3,
      view: 'Iphone13',
      title: 'Iphone 13',
      image: 'https://images.financialexpress.com/2021/09/iphone-13-main.png',
      Quantity: `${totalAmountFilteredDataIphone13}`,
    },
    {
      id: 4,
      view: 'Iphone13Mini',
      title: 'Iphone 13 Mini',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountFilteredDataIphone13Mini}`,
    },
    {
      id: 5,
      view: 'Iphone12',
      title: 'Iphone 12',
      image:
        'https://static.wikia.nocookie.net/ipod/images/a/ae/IPhone_12_colors.png/revision/latest?cb=20201014130133',
      Quantity: `${totalAmountFilteredDataIphone12}`,
    },
    {
      id: 6,
      view: 'Iphone12ProMax',
      title: 'Iphone 12 Pro Max',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountFilteredDataIphone12ProMax}`,
    },
    {
      id: 7,
      view: 'Iphone12Pro',
      title: 'Iphone 12 Pro',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountFilteredDataIphone12Pro}`,
    },
    {
      id: 8,
      view: 'Iphone11',
      title: 'Iphone 11',
      image: 'https://www.pngarts.com/files/8/Apple-iPhone-11-PNG-Picture.png',
      Quantity: `${totalAmountFilteredDataIphone11}`,
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
                  <Text style={styles.quantity}>
                    Quantity Av.. {item.Quantity}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default IphoneMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
