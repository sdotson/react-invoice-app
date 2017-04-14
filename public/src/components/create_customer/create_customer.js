import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import * as actions from '../../actions';
import FormField from '../form_field/form_field';

class CreateCustomer extends Component {
  handleFormSubmit(values) {
    this.props.createCustomer(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field name="name" label="Name" component={FormField} />
        </fieldset>
        <fieldset className="form-group">
          <Field name="address" label="Address" component={FormField} />
        </fieldset>
        <fieldset className="form-group">
          <Field name="phone" label="Phone" component={FormField} />
        </fieldset>
        <button type="submit" className="btn btn-primary" aria-label="Left Align">
          Create Customer
        </button>
        <Link to="/add-invoice/select-customer" className="btn btn-secondary" aria-label="Left Align">
          Or Select Existing Customer
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required"
  }

  if (!values.address) {
    errors.address = "Address is required"
  }

  if (!values.phone) {
    errors.phone = "Phone is required"
  }

  return errors;
}

CreateCustomer = reduxForm({
  form: 'createcustomer',
  validate
})(CreateCustomer);

export default connect(null, actions)(CreateCustomer);
