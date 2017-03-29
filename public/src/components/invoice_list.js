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
      <div className="card card-block">
        <h4 className="card-title">{invoice.name}</h4>
        <p className="card-text">{invoice.company.name}
        </p>
        <a className="btn btn-primary" href={invoice.website}>Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="invoice-list">
        {this.props.invoices.length > 0 ? this.props.invoices.map(this.renderInvoice) : "There are no invoices at the moment."}
        <div>
          <Link to="/add-invoice">
            <button type="button" className="btn btn-primary">Add Invoice</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoices }
}

export default connect(mapStateToProps, actions)(InvoiceList);
