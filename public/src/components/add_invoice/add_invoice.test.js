import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import { AddInvoice } from './add_invoice';

describe('Component: AddInvoice', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><AddInvoice {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
