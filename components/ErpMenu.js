import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import API from './backend-request/api';
import axios from 'axios';

const ErpMenu = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log('heloo ferom erp');

  const fetchData = async () => {
    try {
      let invedata = await axios({
        method: 'get',
        url: `${API.BASE_URL}${API.INVENTORY}`,
      });
      console.log('data', invedata.data);
      console.log('hello from erp');
      setData(invedata.data);
      return data;
    } catch (error) {
      console.log('errr', error);
    }
  };
  return data;
};

export default ErpMenu;
