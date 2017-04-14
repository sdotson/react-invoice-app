import React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('Component: <App />', () => {
  const props = {};
  props.location = {};
  props.location.pathname = '';

  it('should render', () => {
    const wrapper = shallow(<App {...props}><div /></App>);

    expect(wrapper).toHaveLength(1);
  });

  it('should render its children', () => {
    const wrapper = shallow(<App {...props}><div className="child" /></App>);
    const children = wrapper.find('.child');

    expect(children).toHaveLength(1);
  });
});
