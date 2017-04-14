import React from 'react';

import AddInvoiceForm from '../components/add_invoice/add_invoice';
import Header from '../components/header/header';

const AddInvoice = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Items" />
      <AddInvoiceForm />
    </div>
  );
};

export default AddInvoice;
