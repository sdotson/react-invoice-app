import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import CreateCustomer from './create_customer';

describe('Component: CreateCustomer', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><CreateCustomer {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
