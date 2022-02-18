import {createStore, combineReducers} from 'redux';
// import cartItems from '../Reducers/CartItems';
import dataReducer from '../Reducers/CartItems';

export default store = createStore(dataReducer);
