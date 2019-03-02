import React from 'react';
import { shallow } from 'enzyme';
import { SamplePage } from '../../../src/features/pluginnameplaceholder';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SamplePage />);
  expect(renderedComponent.find('.pluginnameplaceholder-sample-page').length).toBe(1);
});
