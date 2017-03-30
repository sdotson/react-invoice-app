import React from 'react';
import InvoiceList from '../components/invoice_list';
import Header from '../components/header';

const Invoices = (props) => {
  return (
    <div>
      <Header title="Invoices" />
      <InvoiceList />
    </div>
  );
};

export default Invoices;
