import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';
import AddInvoiceItemForm from './add_invoice_item_form';

class AddInvoice extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
    this.props.fetchProducts();
  }

  handleFormSubmit(input) {
    console.log('form submitted', input);
    // this.props.signinUser({ email, password });
  }

  selectCustomer(customer) {
    console.log('selectCustomer triggered', customer.currentTarget.value);
    this.props.selectCustomer(customer.currentTarget.value);
  }

  render() {
    const { handleSubmit, customers, products, selectedCustomer } = this.props;
    return (
      <div className="add-invoice">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h3>Create new customer</h3>
          <fieldset className="form-group">
            <label>Name:</label>
            <Field name="name" component="input" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Address:</label>
            <Field name="address" component="input" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Phone:</label>
            <Field name="phone" component="input" className="form-control" />
          </fieldset>
          <h3>Or select existing customer</h3>
          <fieldset className="form-group">
            <Field name="customer" component="select" className="form-control" onChange={this.selectCustomer.bind(this)}>
              {customers.map(customer =>
                <option value={customer.id} key={customer.id}>{customer.name}</option>)}
            </Field>
            {selectedCustomer.phone}
            {selectedCustomer.address}
          </fieldset>
          <h3>Discount Amount</h3>
          <fieldset className="form-group">
            <Field name="discount" component="input" className="form-control" />
          </fieldset>
        </form>
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
