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

const WatchMenu = () => {
  let productData = ErpMenu();

  // -----------WatchS7Cell----------//
  const filteredDataWatchS7Cell = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A44' && item.Category_4 == 'S7 GPS+CELL'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // -----------WatchS7----------//
  const filteredDataWatchS7 = productData
    .filter((item) => {
      return item.Item_Category_Code === 'A44' && item.Category_4 == 'S7 GPS';
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // -----------WatchSEGPS----------------//

  const filteredDataWatchSEGPS = productData
    .filter((item) => {
      return item.Item_Category_Code === 'A44' && item.Category_4 == 'SEGPS';
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // ----------------WatchSegCell----------//
  const filteredDataWatchSegCell = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A44' && item.Category_4 == 'SEGPS + Cell'
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

  let totalAmountFilteredDataWatchS7Cell = sumProperty(
    filteredDataWatchS7Cell,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataWatchS7 = sumProperty(
    filteredDataWatchS7,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataWatchSEGPS = sumProperty(
    filteredDataWatchSEGPS,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataWatchSegCell = sumProperty(
    filteredDataWatchSegCell,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      title: 'S7 GPS+CELL',
      image:
        'https://static.toiimg.com/thumb/msid-86211048,imgsize-497322,width-400,resizemode-4/86211048.jpg',
      Quantity: `${totalAmountFilteredDataWatchS7Cell}`,
    },
    {
      id: 1,
      title: 'S7 GPS',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-og-202109?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1631154984000',
      Quantity: `${totalAmountFilteredDataWatchS7}`,
    },
    {
      id: 2,
      title: 'SEGPS',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-s3-og-202003?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1585763293055',
      Quantity: `${totalAmountFilteredDataWatchSEGPS}`,
    },
    {
      id: 3,
      title: 'SEGPS + Cell',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-s3-og-202003?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1585763293055',
      Quantity: `${totalAmountFilteredDataWatchSegCell}`,
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
              onPress={() => {
                this.clickEventListener(item.view);
              }}>
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

export default WatchMenu;

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
