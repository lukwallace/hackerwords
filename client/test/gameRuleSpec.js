import React from 'react';
import sinon from 'sinon';
import $ from 'jquery';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../gameComponents/App';
import Score from '../gameComponents/Score';


describe('The Board should be created properly', () => {
  var gameApp;

  beforeEach( () => {
    gameApp = mount(<App isTest='true' />);
  });
  
  it('Should call render', () => {
    sinon.spy(App.prototype, 'render');
    gameApp = mount(<App isTest='true' />);
    expect(App.prototype.render.calledOnce).to.equal(true);
  });


  //Why isn't this test passing? -- It is now! -Lucas
  it('Should create the board', () => {
    expect(gameApp.contains(<div className="gameBoardApp" />)).to.equal(true);
  });

  it('Should have a button with character s', () => {
    const upperLeft = gameApp.find('.b0');
    expect(upperLeft).to.exist;
    expect(upperLeft.text()).to.equal('s');
  });
});

describe('The game should follow the defined rules', () => {
  var gameApp;
  var instance;
  var ajaxSpy;
  var server;


  before( () => {
    ajaxSpy = sinon.stub($, 'ajax');
  });

  after(() => {
    $.ajax.restore();
  });

  beforeEach( () => {
    server = sinon.fakeServer.create();
    gameApp = mount(<App isTest='true' />);
    instance = gameApp.nodes[0].getWrappedInstance();
    instance.setState({'boardStr':'abcdppkmnortrekt'});
  });


  it('Clicking a letter should add it to the current word', () => {
    gameApp.find('.b0').simulate('click');
    const state = instance.state;
    expect(state['curWord']).to.equal('a');
  });


  it('Clicking an adjacent letter should add it to the current word', () => {
    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    const state = instance.state;
    expect(state['curWord']).to.equal('ab');
  });

  it('Clicking a non-adjacent letter should NOT add it to the current word', () => {
    gameApp.find('.b0').simulate('click');
    gameApp.find('.b6').simulate('click');
    const state = instance.state;
    expect(state['curWord']).to.equal('a');
  });


  it('Clicking on the same letter twice should send a post request but not twice for the same word', () => {

    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    gameApp.find('.b1').simulate('click');

    expect($.ajax.calledOnce).to.be.true;
    const ajaxOptions = (typeof $.ajax.args[0][0] === 'object') ? $.ajax.args[0][0] : $.ajax.args[0][1];
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.word).to.equal('ab');

    //manually add it to the state
    instance.setState({wordsPlayed:['ab']});


    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    gameApp.find('.b1').simulate('click');

    expect($.ajax.calledOnce).to.be.true;


  });




});
