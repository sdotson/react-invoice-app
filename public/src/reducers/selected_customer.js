import {
  SELECT_CUSTOMER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SELECT_CUSTOMER:
      return { ...state, ...action.payload.data };
  }

  return state;
}
