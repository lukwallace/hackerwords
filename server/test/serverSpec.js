const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server.js');
const User = require('../users/userModel.js');
const jwt = require('jwt-simple');

const request = supertest.agent(server);

describe('Meta Testing', () => {
  it('Should be a functioning test', () => {
    expect(true).to.equal(true);
  });
});


describe('Server Side APIs', () => {
  var token;
  var decodedToken;
  var decodedToken2;
  var username = 'test';
  var password = 'testword';
  var username2 = 'user';
  var password2 = 'userword';

  before((done) => {
    User.remove({}).exec();
    done();
  });

  it('Should respond with html given a non-api request', (done) => {
    request.get('/').expect(200, /<html/, done);
  });


  it('Should respond with a token on valid sign up', (done) => {
    request.post('/api/signup')
      .send({ username: username, password: password }).end( (err, res) => {
        token = res.body.token;
        decodedToken = jwt.decode(token, 'secret');
        expect(decodedToken.username).to.equal(username);
        done();
      });
  });


  it('Should attach a token for a login post', (done) => {
    request.post('/api/signin')
      .send({ username: username, password: password }).end( (err, res) => {
        token = res.body.token;
        expect(token).to.be.ok;
        done();
      });
  });

  it('Should 403 on invalid user', (done) => {
  request.post('/api/signin')
    .send({ username: 'anotherUser', password: password })
    .end(function(err, res) {
      expect(res.status).to.equal(403);
      done();
    });
  });


  it('Should 403 on invalid password', (done) => {
    request.post('/api/signin')
      .send({ username: username, password: 'wrongpassword' })
      .end(function(err, res) {
        expect(res.status).to.equal(403);
        done();
      });
  });


  it('Should find the user with the database with a matching token in the session', (done) => {
    User.findOne({ username: username})
      .exec((err, user) => {
        if (err) {
          console.error(err);
        }
        //token from sigin in
        expect(decodedToken.username).to.equal(username);
        done();
      });
  });


  it('Should sign up a second user', (done) => {
    request.post('/api/signup')
      .send({ username: username2, password: password2 }).end( (err, res) => {
        decodedToken2 = jwt.decode(res.body.token, 'secret');
        expect(decodedToken2.username).to.equal(username2);
        done();
      });
  });


  it('Should respond with a list of all registered users after signing up', (done) => {
    request.get('/api/getAllUsers')
      .set('x-access-token', token)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        //console.log('res', res.body);
        expect(res.body.allUsers.indexOf(username2)).to.not.equal(-1);
        expect(res.body.allUsers.indexOf('fakeusername')).to.equal(-1);
        done();
      });
  });


});
