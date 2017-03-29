import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class InvoiceItemsList extends Component {
  componentWillMount() {
    this.props.fetchInvoiceItemss();
  }

  renderProduct(invoiceItem) {
    return (
      <tr key={invoiceItem.id}>
        <td>{invoiceItem.id}</td>
        <td>{invoiceItem.name}</td>
        <td>{invoiceItem.address}</td>
        <td>{invoiceItem.phone}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="invoice-item-list table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.invoiceItems.map(this.renderProduct)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { invoiceItems: state.invoiceItems }
}

export default connect(mapStateToProps, actions)(InvoiceItemsList);
