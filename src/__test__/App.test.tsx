import React from 'react';
import App from '../routes/App';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter })

describe('Hello, Enzyme!', () => {
  test('render', () => {
    const wrapper = mount(<App />);
  })
  const header = wrapper.find('header')
  expect(header.text(().toBe())
});
