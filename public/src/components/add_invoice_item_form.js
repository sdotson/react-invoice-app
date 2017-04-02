import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

class AddInvoiceItemForm extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.setProduct(1);
  }

  handleFormSubmit(event) {
    console.log('form submitted', event);
    this.props.setProduct(event.target.value);
    // this.props.signinUser({ email, password });
  }

  onSelectChange(event) {
    console.log(event.target.value);
  }

  render() {
    const { products, handleSubmit } = this.props;
    return (
      <tr>
        <td>
          <Field name="product" component="select" className="form-control" onChange={this.handleFormSubmit.bind(this)}>
          {products.map(product =>
            <option value={product.id} key={product.id}>{product.name}</option>)}
          </Field>
        </td>
        <td>
          <Field name="" component="input" className="form-control" />
        </td>
        <td>
          ${this.props.currProduct.price}
        </td>
        <td>
          <button type="button" className="btn btn-default" aria-label="Left Align">
            <span className="lyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}

AddInvoiceItemForm = reduxForm({
  form: 'addinvoiceitem'
})(AddInvoiceItemForm);

function mapStateToProps(state) {
  return {
    currProduct: state.product,
    products: state.products
  };
}

export default connect(mapStateToProps, actions)(AddInvoiceItemForm);
