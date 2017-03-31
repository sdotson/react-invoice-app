import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

class AddInvoiceItemForm extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  handleFormSubmit(input) {
    console.log('form submitted', input);
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
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="product" component="select" className="form-control" onChange={this.handleFormSubmit.bind(this)}>
          {products.map(product =>
            <option value={product.id} key={product.id}>{product.name}</option>)}
          </Field>
        </form>
        </td>
        <td>

        </td>
        <td>

        </td>
        <td>

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
    currInvoiceItem: state.currInvoiceItem,
    products: state.products
  };
}

export default connect(mapStateToProps, actions)(AddInvoiceItemForm);
