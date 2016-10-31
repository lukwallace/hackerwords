import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import $ from 'jquery';
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


describe ('Client signin', () => {
  var wrapper;
  var ajaxSpy;

  beforeEach(() => {
    ajaxSpy = sinon.stub($, 'ajax');
  });

  afterEach(() => {
    $.ajax.restore();
  });


  it ('Should call render', (done) => {
    sinon.spy(Signin.prototype, 'render');
    wrapper = mount(<Signin />);
    expect(Signin.prototype.render.calledOnce).to.equal(true);
    done();
  });

  it ('Sign in should send post request', (done) => {
    const username = 'test';
    const password = 'testpass';


    const userInput = wrapper.find('[id="username"]');
    const passInput = wrapper.find('[id="password"]');


    userInput.simulate('change', { target: { value: username} });
    passInput.simulate('change', { target: { value: password } });


    wrapper.find('[id="signin"]').simulate('click');
    expect($.ajax.calledOnce).to.be.true;
    const ajaxOptions = (typeof $.ajax.args[0][0] === 'object') ? $.ajax.args[0][0] : $.ajax.args[0][1];
    
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.username).to.equal(username);
    expect(ajaxOptions.data.password).to.equal(password);
    done();
    
  });

  // it('Should route to the home page on succesful signin', () => {
  //   Signin.prototype.componentWillUnmount = () => {
  //     console.log('Unmount!');
  //   };

  //   sinon.spy(Signin.prototype, 'componentWillUnmount');
  //   wrapper = mount(<Signin />);
  //   const userInput = wrapper.find('[id="username"]');
  //   const passInput = wrapper.find('[id="password"]');
  //   userInput.simulate('change', { target: { value: 'a' } });
  //   passInput.simulate('change', { target: { value: 'a' } });
  //   wrapper.find('[id="signin"]').simulate('click');
  //   expect(Signin.prototype.componentWillUnmount.callCount).to.equal(1);
  // });

});




describe ('Client singup', () => {
  var wrapper;
  var ajaxSpy;

  beforeEach(() => {
    ajaxSpy = sinon.stub($, 'ajax');
  });

  afterEach(() => {
    $.ajax.restore();
  });


  it ('Should call render', (done) => {
    sinon.spy(Signup.prototype, 'render');
    wrapper = mount(<Signup />);
    expect(Signup.prototype.render.calledOnce).to.equal(true);
    done();
  });

  it ('Signup should send post request', (done) => {
    const username = 'test';
    const password = 'testpass';


    const userInput = wrapper.find('[id="username"]');
    const passInput = wrapper.find('[id="password"]');


    userInput.simulate('change', { target: { value: username} });
    passInput.simulate('change', { target: { value: password } });


    wrapper.find('[id="signup"]').simulate('click');
    expect($.ajax.calledOnce).to.be.true;
    const ajaxOptions = (typeof $.ajax.args[0][0] === 'object') ? $.ajax.args[0][0] : $.ajax.args[0][1];
    
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.username).to.equal(username);
    expect(ajaxOptions.data.password).to.equal(password);
    done();
    
  });

});
