import React, { Component } from 'react';
import Header from '../components/header';
import CreateCustomer from '../components/create_customer';

const CreateInvoiceCustomer = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Create Customer" />
      <CreateCustomer />
    </div>
  );
}

export default CreateInvoiceCustomer;
