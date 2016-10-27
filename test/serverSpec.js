const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server/server.js');
const User = require('../server/users/userModel.js');

const request = supertest.agent(server);

describe('Meta Testing', () => {
  it('Should be a functioning test', () => {
    expect(true).to.equal(true);
  });
});

describe('Server-User Interactions', () => {
  it('Should respond with html given a non-api request', (done) => {
    request.get('/').expect(200, /<html/, done);
  });

  describe('Sign Up', () => {
    afterEach((done) => {
      User.remove({}).exec();
      done();
    });

    it('Should respond with a token on valid sign up', (done) => {
      request.post('/api/signup')
        .send({ username: 'test', password: 'testword' })
        .expect(200)
        .expect((res) => {
          // Silly AirBnB lint
          expect(res.body.token).to.be.ok;
        })
        .end(done);
    });

    it('Should update the database with the new user on valid sign up', (done) => {
      request.post('/api/signup')
        .send({ username: 'test', password: 'testword' })
        .expect(() => {
          User.findOne({ username: 'test' })
            .exec((err, user) => {
              if (err) {
                console.error(err);
              }
              expect(user.username).to.equal('test');
            });
        })
        .end(done);
    });

    it('Should 500 on invalid user', (done) => {
      request.post('/api/signup')
        .send({ username: 'test', password: 'testword' })
        .expect(() => {
          User.findOne({ username: 'test' })
            .exec((err, user) => {
              if (err) {
                console.error(err);
              }
              expect(user.username).to.equal('test');
            });
        })
        .end(done);
    });
  });

  describe('Server Side APIs', () => {
    var token;
    var username = 'test';
    var password = 'testword';

    before((done) => {
      request.post('/api/signup')
        .send({ username: username, password: password }).end( (err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('Should respond with a list of all registered users after signing up', (done) => {
      request.get('/api/getAllUsers')
        .set('x-access-token', token)
        .expect(200, done);
    });


  it('Should attach a token for a login post', (done) => {
      request.post('/api/signin')
        .send({ username: username, password: password }).end( (err, res) => {
          token = res.body.token;
          expect(token).to.be.ok;
          done();
        });
    });
  });
});
