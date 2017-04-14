import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockFormStore from '../test_helpers'
import ProductList from './product_list';

describe('Component: ProductList', () => {
  const props = {};
  const store = mockFormStore();
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><ProductList {...props} /></Provider>);

    expect(wrapper).toHaveLength(1);
  });

});
