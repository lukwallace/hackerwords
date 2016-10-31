import React from 'react';
import sinon from 'sinon';
import $ from 'jquery';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../gameComponents/App';
import Score from '../gameComponents/Score';


describe('The Board should be created properly', () => {
  var gameApp;
  var instance;
  var ajaxSpy;
  var server;

  beforeEach(() => {
    ajaxSpy = sinon.stub($, 'ajax');
    gameApp = mount(<App isTest='true' params={{}} />);
    instance = gameApp.nodes[0].getWrappedInstance();
    instance.setState({'boardStr':'abcdppkmnortrekt'});
  });

  afterEach(() => {
    $.ajax.restore();
    gameApp.unmount();
  });

  it('Should call render', () => {
    sinon.spy(App.prototype, 'render');
    gameApp = mount(<App isTest='true' params={{}} />);
    expect(App.prototype.render.calledOnce).to.equal(true);
  });


  // Why isn't this test passing? -- It is now! -Lucas
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

  beforeEach(() => {
    ajaxSpy = sinon.stub($, 'ajax');
    server = sinon.fakeServer.create();
    gameApp = mount(<App isTest='true' params={{}} />);
    instance = gameApp.nodes[0].getWrappedInstance();
    instance.setState({ boardStr: 'abcdppkmnortrekt' });
  });

  afterEach(() => {
    $.ajax.restore();
    gameApp.unmount();
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
    console.log('About to send');
    gameApp.find('.b1').simulate('click');

    expect($.ajax.called).to.be.true;
    var callCount = $.ajax.callCount;
    const ajaxOptions = (typeof $.ajax.args[callCount - 1][0] === 'object') ?
                        $.ajax.args[callCount - 1][0] : $.ajax.args[callCount - 1][1];
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.word).to.equal('ab');

    // manually add it to the state
    instance.setState({ wordsPlayed: ['ab'] });

    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    gameApp.find('.b1').simulate('click');

    expect($.ajax.callCount).to.be.equal(callCount);
  });
});


describe('Should generate board from server', () => {
  var gameApp;
  var instance;
  var ajaxSpy;
  var server;

  beforeEach(() => {
    ajaxSpy = sinon.stub($, 'ajax');
    server = sinon.fakeServer.create();
  });

  afterEach(() => {
    $.ajax.restore();
    gameApp.unmount();
  });

  it('Should request a premade board from the server when given an id', () => {
    gameApp = mount(<App isTest='true' params={{ id: 'dummyID' }} />);
    instance = gameApp.nodes[0].getWrappedInstance();
    console.log(instance.props);

    expect($.ajax.called).to.be.true;
    var callCount = $.ajax.callCount;
    const ajaxOptions = (typeof $.ajax.args[callCount - 1][0] === 'object') ?
                        $.ajax.args[callCount - 1][0] : $.ajax.args[callCount - 1][1];
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.id).to.equal('dummyID');
  });

  it('Should request a new board from the server without an id', () => {
    gameApp = mount(<App isTest='true' params={{}} />);
    instance = gameApp.nodes[0].getWrappedInstance();
    console.log(instance.props);

    expect($.ajax.called).to.be.true;
    var callCount = $.ajax.callCount;
    const ajaxOptions = (typeof $.ajax.args[callCount - 1][0] === 'object') ?
                        $.ajax.args[callCount - 1][0] : $.ajax.args[callCount - 1][1];
    expect(ajaxOptions.type).to.equal('get');
  });
});

