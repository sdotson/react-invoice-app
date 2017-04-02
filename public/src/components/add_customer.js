import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

class AddCustomerForm extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  handleFormSubmit(event) {
    console.log('form submitted', event);
    this.props.setProduct(event.target.value);
    // this.props.signinUser({ email, password });
  }

  selectCustomer(customer) {
    console.log('selectCustomer triggered', customer.currentTarget.value);
    this.props.selectCustomer(customer.currentTarget.value);
  }

  onSelectChange(event) {
    console.log(event.target.value);
  }

  render() {
    const { products, handleSubmit, customers } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h3>Select existing customer</h3>
        <fieldset className="form-group">
          <Field name="customer" component="select" className="form-control" onChange={this.selectCustomer.bind(this)}>
            {customers.map(customer =>
              <option value={customer.id} key={customer.id}>{customer.name}</option>)}
              </Field>
            </fieldset>
        <h3>Or create new customer</h3>
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
        <h3>Discount Amount</h3>
        <fieldset className="form-group">
          <Field name="discount" component="input" className="form-control" />
        </fieldset>
      </form>
    );
  }
}

AddCustomerForm = reduxForm({
  form: 'addinvoiceitem'
})(AddCustomerForm);

function mapStateToProps(state) {
  return {
    currProduct: state.product,
    products: state.products,
    customers: state.customers
  };
}

export default connect(mapStateToProps, actions)(AddCustomerForm);
