import React from 'react';

import CustomerList from '../components/customer_list/customer_list';
import Header from '../components/header/header';

const Customers = (props) => {
  return (
    <div>
      <Header title="Customers" />
      <CustomerList />
    </div>
  );
};

export default Customers;
