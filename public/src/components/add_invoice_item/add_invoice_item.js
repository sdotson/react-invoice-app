import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';
import FormField from '../form_field/form_field';

class AddInvoiceItem extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.setProduct(1);
  }

  handleFormSubmit(event) {
    this.props.setProduct(event.target.value);
  }

  addNewItem(values) {
    let currTotal = this.props.invoice.total || 0,
      addedExpense = this.props.currProduct.price * values.quantity,
      newTotal = currTotal + addedExpense;
    const invoiceID = this.props.invoice.id,
      newItem = {
        invoice_id: invoiceID,
        product_id: values.product || 1,
        quantity: values.quantity
      },
      customer = {
        total: newTotal,
        discount: this.props.invoice.discount,
        id: this.props.customer.id
      };

    this.props.addInvoiceItem(invoiceID, newItem, customer);
  }

  render() {
    const { currProduct, products, handleSubmit } = this.props;
    return (
      <tr>
        <td>
          <Field name="product" component="select" className="form-control" onChange={this.handleFormSubmit.bind(this)}>
          {products.map(product =>
            <option value={product.id} key={product.id}>{product.name}</option>)}
          </Field>
        </td>
        <td>
          <Field name="quantity" component={FormField} />
        </td>
        <td>
          ${currProduct.price}
        </td>
        <td>
          <button type="submit" className="btn btn-default" aria-label="Left Align" onClick={handleSubmit(this.addNewItem.bind(this))}>
            <span className="lyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}

function validate(values) {
  console.log(values);
  const errors = {};

  if (values.quantity && !values.quantity.match(/[1-9]+/)) {
    errors.quantity = "Quantity must be a number greater than 1";
  }

  return errors;
}

AddInvoiceItem = reduxForm({
  form: 'addinvoiceitem',
  validate
})(AddInvoiceItem);

function mapStateToProps(state) {
  return {
    currProduct: state.product,
    products: state.products,
    customer: state.selectedCustomer,
    invoice: state.currentInvoice
  };
}

export default connect(mapStateToProps, actions)(AddInvoiceItem);
