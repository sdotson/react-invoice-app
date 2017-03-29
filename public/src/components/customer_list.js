import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class CustomerList extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  renderProduct(customer) {
    return (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
        <td>{customer.address}</td>
        <td>{customer.phone}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="customer-list table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.customers.map(this.renderProduct)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { customers: state.customers }
}

export default connect(mapStateToProps, actions)(CustomerList);
