import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../actions';

class CreateCustomer extends Component {
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
        <button type="button" className="btn btn-primary" aria-label="Left Align">
          Create Customer
        </button>
        <Link to="/add-invoice/select-customer" className="btn btn-secondary" aria-label="Left Align">
          Or Select Existing Customer
        </Link>
      </form>
    );
  }
}

CreateCustomer = reduxForm({
  form: 'createcustomer'
})(CreateCustomer);

function mapStateToProps(state) {
  return {
    currProduct: state.product,
    products: state.products,
    customers: state.customers
  };
}

export default connect(mapStateToProps, actions)(CreateCustomer);
