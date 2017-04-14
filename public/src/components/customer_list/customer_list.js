import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions';

class CustomerList extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  renderCustomer(customer) {
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
      <div>
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
            {this.props.customers.map(this.renderCustomer)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customers: state.customers }
}

export default connect(mapStateToProps, actions)(CustomerList);
