import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import API from './backend-request/api';

const Inventory = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API.BASE_URL}${API.INVENTORY}`)
      .then((res) => res.json())
      .then(
        (data) => {
          // setIsLoaded(true);
          console.log(data);
          setUsers(data);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Inventory;
