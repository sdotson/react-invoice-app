import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';
import AddInvoiceItemForm from './add_invoice_item_form';

class AddInvoice extends Component {
  componentWillMount() {
    this.props.addInvoice(this.props.selectedCustomer.id);
  }

  handleDiscountChange(event) {
    console.log('handleDiscountChange', event.target.value);
    this.props.updateInvoice({
      discount: event.target.value,
      customer_id: this.props.selectedCustomer.id,
      id: this.props.currentInvoice.id,
      total: this.props.currentInvoice.total
    });
  }

  render() {
    const { handleSubmit, products, selectedCustomer, currentInvoice, invoiceItems } = this.props;
    return (
      <div className="add-invoice">
        <p>Invoice #{currentInvoice.id}<br />
          {selectedCustomer.name}<br />
        {selectedCustomer.address}</p>
      <label>Discount (%):</label>
        <Field component="input" name="discount" className="form-control" onChange={this.handleDiscountChange.bind(this)} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItems.map((item) => {
                let itemProduct = products.find(product => product.id == item.product_id);
                return (
                  <tr key={item.id}>
                    <td>{itemProduct.name}</td>
                    <td>{item.quantity}</td>
                    <td>${itemProduct.price * item.quantity}</td>
                    <td></td>
                  </tr>
                );
              })
            }
            <AddInvoiceItemForm />
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Subtotal:</td>
              <td>${this.props.currentInvoice.total}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Discount:</td>
              <td>{this.props.currentInvoice.discount}%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><strong>Total:</strong></td>
              <td><strong>${this.props.currentInvoice.total * (1 - this.props.currentInvoice.discount/100)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

AddInvoice = reduxForm({
  form: 'addinvoice'
})(AddInvoice);

function mapStateToProps(state) {
  return {
    products: state.products,
    selectedCustomer: state.selectedCustomer,
    currentInvoice: state.currentInvoice,
    invoiceItems: state.invoiceItems
  };
}

export default connect(mapStateToProps, actions)(AddInvoice);
