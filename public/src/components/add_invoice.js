import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

import Header from './header';

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
        <Header title="Add Invoice" />
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Customer:</label>
            <Field name="customer" component="select" className="form-control" onChange={this.selectCustomer.bind(this)}>
              {customers.map(customer =>
                <option value={customer.id} key={customer.id}>{customer.name}</option>)}
            </Field>
            {selectedCustomer.phone}
            {selectedCustomer.address}
          </fieldset>
          <fieldset className="form-group">
            <label>Discount:</label>
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
            <tr>
              <td>
                <select name="product" className="form-control">
                  {products.map(product =>
                    <option value={product.id} key={product.id}>{product.name}</option>)}
                </select>
              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
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
