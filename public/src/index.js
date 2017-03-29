import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import Async from './middlewares/async';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import InvoiceList from './components/invoice_list';
import CustomerList from './components/customer_list';
import ProductList from './components/product_list';
import AddInvoice from './components/add_invoice';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={InvoiceList}/>
        <Route path="invoices" component={InvoiceList}></Route>
        <Route path="customers" component={CustomerList}></Route>
        <Route path="products" component={ProductList}></Route>
        <Route path="add-invoice" component={AddInvoice}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
