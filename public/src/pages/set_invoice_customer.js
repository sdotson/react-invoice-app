import React, { Component } from 'react';

import Header from '../components/header/header';
import SelectCustomer from '../components/select_customer/select_customer';

const SelectInvoiceCustomer = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Select Customer" />
      <SelectCustomer />
    </div>
  );
}

export default SelectInvoiceCustomer;
