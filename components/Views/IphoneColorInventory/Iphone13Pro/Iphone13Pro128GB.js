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

const Iphone13Pro128GB = ({navigation}) => {
  let productData = ErpMenu();

  //Remaining Quantity for IPHONE 12 128GB GB-----------//
  const filteredDataIphone13Pro128GBWhite = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13 Pro' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'White'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 128 GB "Sierra Blue"-----------//
  const filteredDataIphone13Pro128GBSierraBlue = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13 Pro' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Sierra Blue'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 128 GB Gold-----------//
  const filteredDataIphone13Pro128GBGold = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13 Pro' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Gold'
      );
    })
    .map(function ({Remaining_Qty, Location_Code}) {
      return {Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 128 GB Purple-----------//
  const filteredDataIphone13Pro128GBGraphite = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 13 Pro' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB' &&
        item.Category_6 === 'Graphite'
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

  let totalAmountfilteredDataIphone13Pro128White = sumProperty(
    filteredDataIphone13Pro128GBWhite,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13Pro128GBSierraBlue = sumProperty(
    filteredDataIphone13Pro128GBSierraBlue,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13Pro128Gold = sumProperty(
    filteredDataIphone13Pro128GBGold,
    'Remaining_Qty',
  );
  let totalAmountfilteredDataIphone13Pro128Graphite = sumProperty(
    filteredDataIphone13Pro128GBGraphite,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      view: 'ProductListing',
      title: '128 GB White',
      image:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
      Quantity: `${totalAmountfilteredDataIphone13Pro128White}`,
    },
    {
      id: 2,
      view: 'ProductListing',
      title: '128 GB Sierra Blue',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataIphone13Pro128GBSierraBlue}`,
    },
    {
      id: 3,
      view: 'ProductListing',
      title: '128 GB Gold',
      image: 'https://images.financialexpress.com/2021/09/iphone-13-main.png',
      Quantity: `${totalAmountfilteredDataIphone13Pro128Gold}`,
    },
    {
      id: 4,
      view: 'ProductListing',
      title: '128 GB Graphite',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountfilteredDataIphone13Pro128Graphite}`,
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

export default Iphone13Pro128GB;

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
