import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';
import AddInvoiceItemForm from './add_invoice_item_form';
import AddCustomerForm from './add_customer';

class AddInvoice extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  handleFormSubmit(input) {
    console.log('form submitted', input);
    // this.props.signinUser({ email, password });
  }

  // note to self... make this a multi-step form.
  // first choose or create customer, create new invoice
  // then proceed to next step with customer info and invoice info at top
  // to add invoice items

  render() {
    const { handleSubmit, customers, products, selectedCustomer } = this.props;
    return (
      <div className="add-invoice">
        <AddCustomerForm />
        <h3>Invoice Items</h3>
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
    customers: state.customers,
    products: state.products,
    selectedCustomer: state.selectedCustomer
  };
}

export default connect(mapStateToProps, actions)(AddInvoice);
