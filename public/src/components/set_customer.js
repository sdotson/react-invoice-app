import React, { Component } from 'react';
const { DOM: { input, select, textarea } } = React;
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../actions';

class SetCustomer extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  handleFormSubmit({id}) {
    console.log('form submitted', id);
    this.props.selectCustomer(id);
  }

  render() {
    const { handleSubmit, customers } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field name="id" component="select" className="form-control">
            <option value=""></option>
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

SetCustomer = reduxForm({
  form: 'setcustomer'
})(SetCustomer);

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

export default connect(mapStateToProps, actions)(SetCustomer);
