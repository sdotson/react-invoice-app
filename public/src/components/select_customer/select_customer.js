import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import * as actions from '../../actions';

class SelectCustomer extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  handleFormSubmit({id}) {
    this.props.selectCustomer(id);
  }

  render() {
    const { handleSubmit, customers } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field name="id" component="select" className="form-control">
            <option value="">Select a customer...</option>
            {customers.map(customer =>
              <option value={customer.id} key={customer.id}>{customer.name}</option>)}
          </Field>
        </fieldset>
        <button action="submit" className="btn btn-primary" aria-label="Left Align">
          Select Customer
        </button>
        <Link to="/add-invoice/create-customer" className="btn btn-secondary" aria-label="Left Align">
          Or Create New Customer
        </Link>
      </form>
    );
  }
}

SelectCustomer = reduxForm({
  form: 'setcustomer'
})(SelectCustomer);

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

export default connect(mapStateToProps, actions)(SelectCustomer);
