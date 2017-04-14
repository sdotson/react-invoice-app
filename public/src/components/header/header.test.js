import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Component: Header', () => {
  const props = {};
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toHaveLength(1);
  });

});
