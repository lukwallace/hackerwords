const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server/server.js');
const User = require('./userModel.js');

const request = supertest.agent(server);

describe('Meta Testing', () => {
  it('Should be a functioning test', () => {
    expect(true).to.equal(true);
  });
});

describe('Server', () => {
  it('Should respond with html given a non-api request', (done) => {
    request.get('/').expect(200, /<html/, done);
  });

  describe('Server-Database Interaction', () => {
    beforeEach((done) => {


    });
    afterEach();

    it('');
  });
});
