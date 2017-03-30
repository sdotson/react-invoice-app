import React from 'react';
import AddInvoiceForm from '../components/add_invoice';
import Header from '../components/header';

const AddInvoice = (props) => {
  return (
    <div>
      <Header title="Add Invoice" />
      <AddInvoiceForm />
    </div>
  );
};

export default AddInvoice;
