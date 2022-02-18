import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import ErpMenu from './ErpMenu';
// import ErpMenu2 from './ErpMenu2';

const ProductMenu = ({navigation}) => {
  let productData = ErpMenu();
  console.log('mydata is', productData);

  //Remaining Quantity for IPHONE-----------//
  let Iphone = productData
    .filter((item) => item.Item_Category_Code === 'A15')
    .map(function ({Category_3, Category_4, Remaining_Qty}) {
      return {Category_3, Category_4, Remaining_Qty};
    });

  //---------Remaining Quantity for Mac-----------//
  const filteredDataMac = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A12' ||
        item.Item_Category_Code === 'A13' ||
        item.Item_Category_Code === 'A14' ||
        item.Item_Category_Code === 'A17' ||
        item.Item_Category_Code === 'A21' ||
        item.Item_Category_Code === 'A42'
      );
    })
    .map(function ({Category_3, Category_4, Remaining_Qty}) {
      return {Category_3, Category_4, Remaining_Qty};
    });

  //Remaining Quantity for IPAD-----------//
  const filteredDataIPad = productData
    .filter((item) => {
      return item.Item_Category_Code === 'A20';
    })
    .map(function ({Category_3, Category_4, Remaining_Qty}) {
      return {Category_3, Category_4, Remaining_Qty};
    });

  //Remaining Quantity for Watches-----------//
  const filteredDataWatches = productData
    .filter((item) => {
      return item.Item_Category_Code === 'A44';
    })
    .map(function ({Category_3, Category_4, Remaining_Qty}) {
      return {Category_3, Category_4, Remaining_Qty};
    });

  // console.log('filtered data Ipone', filteredDataIphone);
  // console.log('filtered data is Mac', filteredDataMac);
  // console.log('filtered data is IPAD', filteredDataIPad);
  // console.log('filtered data is Watches', filteredDataWatches);
  // const reduceData = productData.reduce((a, v) => (a = a + v.Remaining_Qty), 0);

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  // let totalAmount = sumProperty(filterDataIphone, 'Remaining_Qty');

  let totalAmountFilteredDataIphone = sumProperty(Iphone, 'Remaining_Qty');
  let totalAmountFilteredDataMac = sumProperty(
    filteredDataMac,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIpad = sumProperty(
    filteredDataIPad,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataWatches = sumProperty(
    filteredDataWatches,
    'Remaining_Qty',
  );

  // console.log('reducedata is', totalAmount);
  // console.log(
  //   'reducedata as Filtered filteredDataIphone',
  //   totalAmountFilteredDataIphone,
  // );
  // console.log(
  //   'reducedata as Filtered totalAmountFilteredDataMac',
  //   totalAmountFilteredDataMac,
  // );
  // console.log(
  //   'reducedata as Filtered totalAmountFilteredDataIpad',
  //   totalAmountFilteredDataIpad,
  // );
  // console.log(
  //   'reducedata as Filtered totalAmountFilteredDataWatches',
  //   totalAmountFilteredDataWatches,
  // );

  let data = [
    {
      id: 1,
      title: 'iPhone',
      view: 'IphoneMenu',
      image: 'https://www.pngarts.com/files/8/Apple-iPhone-11-PNG-Picture.png',
      Quantity: `${totalAmountFilteredDataIphone}`,
    },
    {
      id: 2,
      title: 'Mac',
      view: 'MacMenu',
      image:
        'https://images.idgesg.net/images/article/2020/11/m1-macbook-air-macbook-pro-mac-mini-100866068-large.jpg?auto=webp&quality=85,70',
      Quantity: `${totalAmountFilteredDataMac}`,
    },
    {
      id: 3,
      title: 'Ipad',
      view: 'IpadMenu',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUlj6iscAAzijYV026QYD1TIe9zYiNlOpRQ&usqp=CAU',
      Quantity: `${totalAmountFilteredDataIpad}`,
    },
    {
      id: 4,
      title: 'Watches',
      view: 'WatchMenu',
      image:
        'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png',
      Quantity: `${totalAmountFilteredDataWatches}`,
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

export default ProductMenu;

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
