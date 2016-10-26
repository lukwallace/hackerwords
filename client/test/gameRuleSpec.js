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

  it('Should have a button with character a', (done) => {
    setTimeout( () => {
      const upperLeft = gameApp.find('.b0');
      expect(upperLeft).to.exist;
      expect(upperLeft.text()).to.equal('a');
      done();
    }, 500);
  });
});

describe('The game should follow the defined rules', () => {
  var gameApp;
  beforeEach( () => {
    gameApp = mount(<App/>);
    //console.log('gameApp', gameApp.nodes[0].getWrappedInstance().state);
  });


  it('Clicking a letter should add it to the current word', (done) => {

    const upperLeft = gameApp.find('.b0');
    upperLeft.simulate('click');

    const state = gameApp.nodes[0].getWrappedInstance().state;
    //console.dir('gameApp', gameApp);
    expect(state['curWord']).to.equal('a');
    done();


    // setTimeout( () => {
    //   const upperLeft = gameApp.find('.b0');
    //   upperLeft.simulate('click');
    //   expect(gameApp.state.curWord).to.equal('a');
    //   done();
    // }, 500);

    // const upperLeft = gameApp.find('.b0');
    // upperLeft.simulate('click');
    // expect(gameApp.state.curWord).to.equal('a');
  });


  it('Clicking an adjacent letter should add it to the current word', (done) => {
    gameApp.find('.b0').simulate('click');
    gameApp.find('.b1').simulate('click');
    const state = gameApp.nodes[0].getWrappedInstance().state;

    expect(state['curWord']).to.equal('ab');
    done();
  });

  it('Clicking a non-adjacent letter should NOT add it to the current word', (done) => {
    gameApp.find('.b0').simulate('click');
    gameApp.find('.b6').simulate('click');
    const state = gameApp.nodes[0].getWrappedInstance().state;
    expect(state['curWord']).to.equal('a');
    done();
  });

});
