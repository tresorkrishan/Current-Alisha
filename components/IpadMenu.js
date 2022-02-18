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

const IpadMenu = ({navigation}) => {
  let productData = ErpMenu();

  // ------------IPADMini-----------//
  const filteredDataIadMini = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A20' && item.Category_4 == 'iPad Mini'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // ------------iPad 10.2-----------//
  const filteredDataIpad10 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A20' && item.Category_4 == 'iPad 10.2'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // ------------iPad 12.9-----------//
  const filteredDataIpad12 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A20' && item.Category_4 == 'iPad 12.9'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // ------------iPad 11.0-----------//
  const filteredDataIpad11 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A20' && item.Category_4 == 'iPad 11.0'
      );
    })
    .map(function ({Category_5, Remaining_Qty}) {
      return {Category_5, Remaining_Qty};
    });

  // ------------iPad 10.9-----------//
  const filteredDataIpad109 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === 'A20' && item.Category_4 == 'iPad 10.9'
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

  let totalAmountFilteredDataMacMini = sumProperty(
    filteredDataIadMini,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIpad10 = sumProperty(
    filteredDataIpad10,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIpad12 = sumProperty(
    filteredDataIpad12,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIpad11 = sumProperty(
    filteredDataIpad11,
    'Remaining_Qty',
  );

  let totalAmountFilteredDataIpad109 = sumProperty(
    filteredDataIpad109,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      title: 'iPad Mini',
      view: 'IpadMini',
      image:
        'https://www.pngitem.com/pimgs/m/479-4795187_ipad-pro-12-9-silver-hd-png-download.png',
      Quantity: `${totalAmountFilteredDataMacMini}`,
    },
    {
      id: 2,
      title: 'iPad 10.2',
      view: 'Ipad102',
      image:
        'https://www.aptronixindia.com/media/catalog/product/1/1/11-inch128gbipadprowi-fi-spacegrey.png',
      Quantity: `${totalAmountFilteredDataIpad10}`,
    },
    {
      id: 3,
      title: 'iPad 12.9',
      view: 'Ipad12',
      image: 'https://freebiescloud.com/wp-content/uploads/2020/10/5-21.png',
      Quantity: `${totalAmountFilteredDataIpad12}`,
    },
    {
      id: 4,
      title: 'iPad 11.0',
      view: 'Ipad11',
      image:
        'https://www.aptronixindia.com/media/catalog/product/i/p/ipad-2021-hero-space-wifi-select_2.png',
      Quantity: `${totalAmountFilteredDataIpad11}`,
    },

    {
      id: 5,
      title: 'iPad 10.9',
      view: 'Ipad109',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1629840706000',
      Quantity: `${totalAmountFilteredDataIpad109}`,
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

export default IpadMenu;

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
