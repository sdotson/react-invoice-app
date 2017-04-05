import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../actions';

class SetCustomer extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  handleFormSubmit(event) {
    console.log('form submitted', event);
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
          <Field name="customer" component="select" className="form-control" onChange={this.selectCustomer.bind(this)}>
            {customers.map(customer =>
              <option value={customer.id} key={customer.id}>{customer.name}</option>)}
              </Field>
        </fieldset>
        <button type="button" className="btn btn-primary" aria-label="Left Align">
          Select Customer
        </button>
        <Link to="/add-invoice/create-customer" className="btn btn-secondary" aria-label="Left Align">
          Create New Customer
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
