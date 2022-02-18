import API from '../backend-request/api';
export const GET_DATA = 'GET DATA';

const API_URL = `${API.BASE_URL}${API.INVENTORY}`;

export const getData = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_DATA,
          payload: json,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// import API from './backend-request/api';
// import axios from 'axios';

// const ErpMenu = () => {
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       let invedata = await axios({
//         method: 'get',
//         url: `${API.BASE_URL}${API.INVENTORY}`,
//       });
//       console.log('data', invedata.data.data.value);
//       setData(invedata.data.data.value);
//       return data;
//     } catch (error) {
//       console.log('errr', error);
//     }
//   };
//   // console.log('djfjfjfjfjfj', data);

//   return data;
// };

// export default ErpMenu;
