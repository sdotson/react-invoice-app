import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import InvoiceList from './invoice_list';

describe('Component: InvoiceList', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><InvoiceList {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
