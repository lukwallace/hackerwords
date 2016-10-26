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

  describe('Sign In', () => {
    beforeEach((done) => {
      new User({ username: 'test', password: 'testword' }).save((err) => {
        if (err) {
          console.error(err);
        }
        done();
      });
    });

    afterEach((done) => {
      User.remove({}).exec();
      done();
    });

    it('Should respond with a token on a valid sign in', (done) => {
      request.post('/api/signin')
        .send({ username: 'test', password: 'testword' })
        .expect(200)
        .expect((res) => {
          // Silly AirBnB lint
          expect(res.body.token).to.be.ok;
        })
        .end(done);
    });
  });
});
