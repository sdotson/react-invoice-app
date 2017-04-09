import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';
import AddInvoiceItemForm from './add_invoice_item_form';

class AddInvoice extends Component {
  componentWillMount() {
    this.props.addInvoice(this.props.selectedCustomer.id);
  }

  handleFormSubmit(input) {
    // this.props.signinUser({ email, password });
  }

  // note to self... make this a multi-step form.
  // first choose or create customer, create new invoice
  // then proceed to next step with customer info and invoice info at top
  // to add invoice items

  render() {
    const { handleSubmit, products, selectedCustomer, currentInvoice, invoiceItems } = this.props;
    console.log('invoiceItems', invoiceItems);
    return (
      <div className="add-invoice">
        <p>Invoice #{currentInvoice.id}<br />
          {selectedCustomer.name}<br />
        {selectedCustomer.address}</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <AddInvoiceItemForm />
            {invoiceItems.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

AddInvoice = reduxForm({
  form: 'addinvoice'
})(AddInvoice);

function mapStateToProps(state) {
  return {
    products: state.products,
    selectedCustomer: state.selectedCustomer,
    currentInvoice: state.currentInvoice,
    invoiceItems: state.invoiceItems
  };
}

export default connect(mapStateToProps, actions)(AddInvoice);
