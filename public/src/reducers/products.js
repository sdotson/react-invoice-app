import {
  FETCH_PRODUCTS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
  }

  return state;
}
