import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import AddInvoiceItem from './add_invoice_item';

describe('Component: AddInvoiceItem', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><AddInvoiceItem {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
