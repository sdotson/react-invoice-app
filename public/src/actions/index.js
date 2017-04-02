import axios from 'axios';

import {
  FETCH_INVOICES,
  ADD_INVOICE,
  FETCH_CUSTOMERS,
  SELECT_CUSTOMER,
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

export function addInvoice(invoice) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}invoices`
  });

  return {
    type: ADD_INVOICE,
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

  return {
    type: SELECT_CUSTOMER,
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

export function addInvoiceItem(id, item) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}invoices/${id}/items`
  });

  return {
    type: ADD_INVOICE_ITEM,
    payload: request
  };
}
