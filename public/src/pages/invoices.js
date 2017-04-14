import React from 'react';

import InvoiceList from '../components/invoice_list/invoice_list';
import Header from '../components/header/header';

const Invoices = (props) => {
  return (
    <div>
      <Header title="Invoices" />
      <InvoiceList />
    </div>
  );
};

export default Invoices;
