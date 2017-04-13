import {
  ADD_INVOICE,
  ADD_INVOICE_ITEM,
  UPDATE_INVOICE
} from '../actions/types';

export default function(state = { total: 0, discount: 0 }, action) {
  switch(action.type) {
    case ADD_INVOICE:
      return { ...state, ...action.payload.data };
    case UPDATE_INVOICE:
      return { ...state, ...action.payload.data };
    case ADD_INVOICE_ITEM:
      console.log('currentINvoice reducer', action);
      return { ...state, total: action.payload[1].data.total }
  }

  return state;
}
