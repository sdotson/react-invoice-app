import React from 'react';
import { shallow } from 'enzyme';

import FormField from './form_field';

describe('Component: FormField', () => {
  const props = {meta:{}};
  props.location = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<FormField {...props} />);

    expect(wrapper).toHaveLength(1);
  });

  it('renders input and no label if label prop absent', () => {
    const wrapper = shallow(<FormField {...props} />);

    expect(wrapper.find('label')).toHaveLength(0);
  });

  it('renders input and no label if label prop present', () => {
    props.label = "Test Label";
    const wrapper = shallow(<FormField {...props} />);

    expect(wrapper.find('label')).toHaveLength(1);
  });

});
