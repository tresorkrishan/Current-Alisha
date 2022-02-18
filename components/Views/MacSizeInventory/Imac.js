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
import ErpMenu from '../../ErpMenu';

const Imac = ({navigation}) => {
  let productData = ErpMenu();

  //Remaining Quantity for Imac  128 GB-----------//
  const filteredDataImac128 = productData
    .filter((item) => {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'iMac' &&
        item.Category_5 === '128 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for Imac 256 GB-----------//
  const filteredDataImac256 = productData
    .filter((item) => {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'iMac' &&
        item.Category_5 === '256 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for Imac 512 GB-----------//
  const filteredDataImac512 = productData
    .filter((item) => {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'iMac' &&
        item.Category_5 == '512 GB '
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for Imac 1TB GB-----------//
  const filteredDataImac1TB = productData
    .filter((item) => {
      return (
        (item.Item_Category_Code === 'A12' ||
          item.Item_Category_Code === 'A13' ||
          item.Item_Category_Code === 'A14' ||
          item.Item_Category_Code === 'A17' ||
          item.Item_Category_Code === 'A21' ||
          item.Item_Category_Code === 'A42') &&
        item.Category_4 == 'iMac' &&
        item.Category_5 === '1TB GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //   console.log('filtered data Ipone13', filteredDataIphone13);
  //   console.log('filtered data is Ipone13Pro', filteredDataIphone13Pro);
  //   console.log('filtered data is Ipone13ProMax', filteredDataIphone13ProMax);
  //   console.log('filtered data is Ipone12', filteredDataIphone12);
  //   console.log('filtered data is Ipone11', filteredDataIphone11);
  //   console.log('filtered data is Ipone13 Mini', filteredDataIphone13Mini);
  // console.log('filtered data is Watches', filteredDataWatches);

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  //   let totalAmount = sumProperty(productData, 'Remaining_Qty');

  let totalAmountfilteredDataImac128 = sumProperty(
    filteredDataImac128,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataImac256 = sumProperty(
    filteredDataImac256,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataImac512 = sumProperty(
    filteredDataImac512,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataImac1TB = sumProperty(
    filteredDataImac1TB,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      view: 'ProductListing',
      title: '128 GB',
      image:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
      Quantity: `${totalAmountfilteredDataImac128}`,
    },
    {
      id: 2,
      view: 'ProductListing',
      title: '64 GB',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataImac256}`,
    },
    {
      id: 3,
      view: 'ProductListing',
      title: '256 GB',
      image: 'https://images.financialexpress.com/2021/09/iphone-13-main.png',
      Quantity: `${totalAmountfilteredDataImac512}`,
    },
    {
      id: 4,
      view: 'ProductListing',
      title: '1TB GB',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataImac1TB}`,
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

export default Imac;

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
