import React, { Component } from 'react';
import Header from '../components/header';
import SetCustomer from '../components/set_customer';

const SetInvoiceCustomer = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Select Customer" />
      <SetCustomer />
    </div>
  );
}

export default SetInvoiceCustomer;
