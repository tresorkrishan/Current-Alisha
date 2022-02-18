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
import ErpMenu from '../../../ErpMenu';

const Iphone13128 = ({navigation}) => {
  let productData = ErpMenu();

  //Remaining Quantity for IPHONE 13 128 GB-----------//
  const filteredDataIphone13128Midnight = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Midnight'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 13 128 GB Starlight-----------//
  const filteredDataIphone13128Starlight = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Starlight'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 13 128 GB Red-----------//
  const filteredDataIphone13128Red = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === '(PRODUCT)RED'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 13 128 GB Pink-----------//
  const filteredDataIphone13128Pink = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Pink'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 13 128 GB Blue-----------//
  const filteredDataIphone13128Blue = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Blue'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });
  //   console.log('filtered data Ipone13', filteredDataIphone13);
  //   console.log('filtered data is Ipone13Pro', filteredDataIphone13Pro);
  //   console.log('filtered data is Ipone13ProMax', filteredDataIphone13ProMax);
  //   console.log('filtered data is Ipone12', filteredDataIphone12);
  //   console.log('filtered data is Ipone12', filteredDataIphone12);
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

  let totalAmountfilteredDataIphone13128Midnight = sumProperty(
    filteredDataIphone13128Midnight,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13128Starlight = sumProperty(
    filteredDataIphone13128Starlight,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13128Red = sumProperty(
    filteredDataIphone13128Red,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13128Pink = sumProperty(
    filteredDataIphone13128Pink,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13128Blue = sumProperty(
    filteredDataIphone13128Blue,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      view: 'ProductListing',
      title: '128 GB Midnight',
      image:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
      Quantity: `${totalAmountfilteredDataIphone13128Midnight}`,
    },
    {
      id: 2,
      view: 'ProductListing',
      title: '128 GB Starlight',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataIphone13128Starlight}`,
    },
    {
      id: 3,
      view: 'ProductListing',
      title: '128 GB Red',
      image: 'https://images.financialexpress.com/2021/09/iphone-13-main.png',
      Quantity: `${totalAmountfilteredDataIphone13128Red}`,
    },
    {
      id: 4,
      view: 'ProductListing',
      title: '128 GB Pink',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataIphone13128Pink}`,
    },
    {
      id: 5,
      view: 'ProductListing',
      title: '128 GB Pink',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataIphone13128Blue}`,
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

export default Iphone13128;

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
