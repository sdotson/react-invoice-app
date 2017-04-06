import {
  ADD_INVOICE
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case ADD_INVOICE:
      console.log('current_invoice action.payload', action.payload);
      return { ...state, ...action.payload.data };
  }

  return state;
}
