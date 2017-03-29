import {
  FETCH_INVOICES,
  ADD_INVOICE
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_INVOICES:
      return action.payload.data;
    case ADD_INVOICE:
      return [ ...state, action.payload.data ];
  }

  return state;
}
