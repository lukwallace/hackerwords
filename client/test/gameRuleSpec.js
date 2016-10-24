import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../gameComponents/App';



describe('The game should follow built in rules', function() {
  console.log('test');
  it('Should create the board', function() {
    expect(shallow(<App />).contains(<div className="gameBoardApp" />)).to.equal(true);
  });     


  it('calls render', () => {
    sinon.spy(App.prototype, 'render');
    const wrapper = mount(<App />);
    expect(App.prototype.render.calledOnce).to.equal(true);
  });


  it('Clicking a letter should add it to the current word', function() {
    const wrapper = mount(<App />);  
  });

});