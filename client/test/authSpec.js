import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Signin from '../userComponents/Signin';
import Signup from '../userComponents/Signup';


// stubbed localstorage
window.localStorage = {
  _storage: {},
  getItem: function (key) {
    return this._storage[key];
  },
  setItem: function (key, val) {
    this._storage[key] = val;
  },
  removeItem: function (key) {
    this._storage[key] = undefined;
  }
};


describe ('Meta Test', () => {
  it ('Should call render', () => {
    sinon.spy(Signin.prototype, 'render');
    const wrapper = mount(<Signin />);
    expect(Signin.prototype.render.calledOnce).to.equal(true);
  });

  it('Should route to the home page on succesful signin', () => {
    Signin.prototype.componentWillUnmount = () => {
      console.log('Unmount!');
    };

    sinon.spy(Signin.prototype, 'componentWillUnmount');
    const wrapper = mount(<Signin />);
    const userInput = wrapper.find('[id="username"]');
    const passInput = wrapper.find('[id="password"]');
    userInput.simulate('change', { target: { value: 'a' } });
    passInput.simulate('change', { target: { value: 'a' } });
    wrapper.find('[id="signin"]').simulate('click');
    expect(Signin.prototype.componentWillUnmount.callCount).to.equal(1);
  });


});
