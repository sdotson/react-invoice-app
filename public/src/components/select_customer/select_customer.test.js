import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import SelectCustomer from './select_customer';

describe('Component: SelectCustomer', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><SelectCustomer {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
