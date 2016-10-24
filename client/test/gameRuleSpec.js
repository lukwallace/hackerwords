import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../gameComponents/App';


describe('The Board should be created properly', function() {
  var gameApp;
  beforeEach(function() {
    gameApp = mount(<App />);
  });


  
  it('Should call render', () => {
    sinon.spy(App.prototype, 'render');
    gameApp = mount(<App />);
    expect(App.prototype.render.calledOnce).to.equal(true);
  });



  it('Should create the board', function() {
    expect(gameApp.contains(<div className="gameBoardApp" />)).to.equal(true);
  });     




  it('Should have a button with character a', function() {
    const upperLeft = gameApp.find('.b0');
    expect(upperLeft).to.exist;
    expect(upperLeft.text()).to.equal('a');
  });

});



describe('The game should follow the defined rules', function() {
  var gameApp;
  beforeEach(function() {
    gameApp = mount(<App />);
  });


  it('Clicking a letter should add it to the current word', function() {
    const upperLeft = gameApp.find('.b0');
    upperLeft.simulate('click');
    expect(gameApp.state.curWord).to.equal('a');
  });


  it('Clicking an adjacent letter should add it to the current word', function() {
    const upperLeft = gameApp.find('.b0');
    upperLeft.simulate('click');
  });

});