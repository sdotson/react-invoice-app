import {
  ADD_INVOICE,
  ADD_INVOICE_ITEM
} from '../actions/types';

export default function(state = { total: 0 }, action) {
  switch(action.type) {
    case ADD_INVOICE:
      return { ...state, ...action.payload.data };
    case ADD_INVOICE_ITEM:
      console.log('currentINvoice reducer', action.payload[1].data);
      return { ...state, total: action.payload[1].data.total }
  }

  return state;
}
