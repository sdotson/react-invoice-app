import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import invoicesReducer from './invoices';
import invoiceItemsReducer from './invoice_items';
import customersReducer from './customers';
import productsReducer from './products';
import product from './product';
import selectedCustomerReducer from './selected_customer';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  customers: customersReducer,
  products: productsReducer,
  selectedCustomer: selectedCustomerReducer,
  product: product,
  invoiceItems: invoiceItemsReducer,
  form
});

export default rootReducer;
