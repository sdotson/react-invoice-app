import React from 'react';
import { shallow } from 'enzyme';

import Nav from './nav';

describe('Component: Nav', () => {
  const props = {};
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Nav {...props} />);

    expect(wrapper).toHaveLength(1);
  });

});
