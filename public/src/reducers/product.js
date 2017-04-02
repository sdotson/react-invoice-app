import {
  SET_PRODUCT
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_PRODUCT:
      console.log('set_product', action);
      return {...state, ...action.payload.data};
  }

  return state;
}
