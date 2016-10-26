
// import React from 'react';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import { mount, shallow } from 'enzyme';
// import App from '../gameComponents/App';


describe('The Board should be created properly', () => {
  var gameApp;
  beforeEach( () => {
    gameApp = mount(<App />);
  });
  
  it('Should call render', () => {
    sinon.spy(App.prototype, 'render');
    gameApp = mount(<App />);
    expect(App.prototype.render.calledOnce).to.equal(true);
  });


  //Why isn't this test passing? -- It is now! -Lucas
  it('Should create the board', () => {
    expect(gameApp.contains(<div className="gameBoardApp" />)).to.equal(true);
  });

  it('Should have a button with character a', () => {
    const upperLeft = gameApp.find('.b0');
    expect(upperLeft).to.exist;
    expect(upperLeft.text()).to.equal('a');
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

  beforeEach( () => {
    server = sinon.fakeServer.create();
    gameApp = mount(<App/>);
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


  it('Clicking on the same letter twice should send a post request', () => {
    
    server.respondWith('POST', '/api/checkWord',
                       [200, { 'Content-Type': 'application/json' },
                        '{isWord: true}']);


    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    gameApp.find('.b1').simulate('click');

    server.respond();

    expect($.ajax.calledOnce).to.be.true;
    const ajaxOptions = (typeof $.ajax.args[0][0] === 'object') ? $.ajax.args[0][0] : $.ajax.args[0][1];
    expect(ajaxOptions.type).to.equal('post');
    expect(ajaxOptions.data.word).to.equal('ab');
    console.log(instance.state.wordsPlayed);
    //expect(instance.state.wordSplayed)
  });



});
