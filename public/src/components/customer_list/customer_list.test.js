import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import CustomerList from './customer_list';

describe('Component: CustomerList', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><CustomerList {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
