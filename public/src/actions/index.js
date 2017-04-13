import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  FETCH_INVOICES,
  ADD_INVOICE,
  UPDATE_INVOICE,
  ADD_INVOICE_ITEM,
  FETCH_CUSTOMERS,
  SELECT_CUSTOMER,
  CREATE_CUSTOMER,
  SELECT_INVOICE_CUSTOMER,
  FETCH_PRODUCTS,
  SET_PRODUCT
} from './types';

const ROOT_URL = 'http://localhost:8000/api/';

export function fetchInvoices() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}invoices`
  });

  return {
    type: FETCH_INVOICES,
    payload: request
  };
}

export function addInvoice(customerID) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}invoices`,
    data: {
      customer_id: customerID
    }
  });

  browserHistory.push('/add-invoice/items');

  return {
    type: ADD_INVOICE,
    payload: request
  };
}

export function updateInvoice({ id, customer_id, discount, total }) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}invoices/${id}`,
    data: {
      id,
      customer_id,
      discount,
      total
    }
  });

  return {
    type: UPDATE_INVOICE,
    payload: request
  };
}

export function fetchCustomers() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}customers`
  });

  return {
    type: FETCH_CUSTOMERS,
    payload: request
  };
}

export function selectCustomer(id) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}customers/${id}`
  });

  browserHistory.push('/add-invoice/items');

  return {
    type: SELECT_CUSTOMER,
    payload: request
  };
}

export function createCustomer(data) {
  console.log('createCustomer', data);
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}customers`,
    data: data
  });

  browserHistory.push('/add-invoice/items');

  return {
    type: CREATE_CUSTOMER,
    payload: request
  };
}

export function fetchProducts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}products`
  });

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function setProduct(productID) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}products/${productID}`
  });

  return {
    type: SET_PRODUCT,
    payload: request
  };
}

export function addInvoiceItem(id, item, customer) {
  console.log('add invoice item form', item, customer);
  const request = axios.all([axios({
      method: 'post',
      url: `${ROOT_URL}invoices/${id}/items`,
      data: {
        invoice_id: id,
        product_id: item.product_id,
        quantity: item.quantity
      }
    }), axios({
      method: 'put',
      url: `${ROOT_URL}invoices/${id}`,
      data: {
        id: id,
        customer_id: customer.id,
        discount: customer.discount,
        total: customer.total
      }
    })
  ]);

  return {
    type: ADD_INVOICE_ITEM,
    payload: request
  };
}
