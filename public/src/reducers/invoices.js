import {
  FETCH_INVOICES
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_INVOICES:
      return action.payload.data;
  }

  return state;
}
