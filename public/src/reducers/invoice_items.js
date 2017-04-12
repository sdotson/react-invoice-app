import {
  ADD_INVOICE_ITEM
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_INVOICE_ITEM:
      console.log('add_invoice_item', action);
      return [...state, action.payload[0].data];
  }

  return state;
}
