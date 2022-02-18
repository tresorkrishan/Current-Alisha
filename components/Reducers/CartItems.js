import {GET_DATA} from '../Actions/actions';

const initialState = {
  data: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {...state, data: action.payload};
  }
}

// const cartItems = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       return state.filter((cartItem) => cartItem.id !== action.payload.id);
//   }

//   return state;
// };

// export default cartItems;

export default dataReducer;
