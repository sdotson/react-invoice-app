import {
  ADD_INVOICE,
  ADD_INVOICE_ITEM
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case ADD_INVOICE:
      return { ...state, ...action.payload.data };
    case ADD_INVOICE_ITEM:
      // need
      console.log('currentINvoice reducer', action.payload.data);
      return { ...state, total: 0 }
  }

  return state;
}
