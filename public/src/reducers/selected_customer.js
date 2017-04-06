import {
  CREATE_CUSTOMER,
  SELECT_CUSTOMER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_CUSTOMER:
      console.log('action.payload createCustomer', action.payload.data);
      return { ...state, ...action.payload.data };
    case SELECT_CUSTOMER:
      console.log('action.payload selectCustomer', action.payload);
      return { ...state, ...action.payload.data };
  }

  return state;
}
