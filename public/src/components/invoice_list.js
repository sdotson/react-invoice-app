import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class InvoiceList extends Component {
  componentWillMount() {
    this.props.fetchInvoices();
  }

  renderInvoice(invoice) {
    return (
      <tr key={invoice.id}>
        <td>{invoice.id}</td>
        <td>{invoice.customer_id}</td>
        <td>{invoice.discount}%</td>
        <td>${invoice.total}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <Link to="/add-invoice/select-customer" className="btn btn-primary">Add Invoice</Link>
        <table className="invoice-list table table-striped">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer ID</th>
              <th>Discount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.invoices.map(this.renderInvoice)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoices }
}

export default connect(mapStateToProps, actions)(InvoiceList);
