import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';
import AddInvoiceItemForm from '../add_invoice_item/add_invoice_item';
import FormField from '../form_field/form_field';

class AddInvoice extends Component {
  componentDidMount() {
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
        <Field label="Discount (%):" component={FormField} name="discount" onChange={this.handleDiscountChange.bind(this)} />
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
              <td>${currentInvoice.total.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Discount:</td>
              <td>{currentInvoice.discount}%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><strong>Total:</strong></td>
              <td><strong>${(currentInvoice.total * (1 - currentInvoice.discount/100)).toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

function validate(values) {
  console.log('validate', values);
  const errors ={};

  if (values.discount < 0 || values.discount > 100 || (values.discount && !values.discount.match(/[0-9]+/))) {
    errors.discount = "Discount must be a number between 0 and 100";
  }

  return errors;
}

AddInvoice = reduxForm({
  form: 'addinvoice',
  validate
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
