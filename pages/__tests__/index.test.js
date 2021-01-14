import React from 'react'
import home from '../index.js'
import { shallow, mount } from 'enzyme'
describe("home component", () => {
   test("it's renders", () => {
   const wrapper = shallow(<home />);
   expect(wrapper.exists()).toBe(true);
   });
});