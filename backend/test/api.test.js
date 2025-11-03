const request = require('supertest');
const app = require('../server.js');

describe('API Test', () => {
  it('should return backend message', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .expect((res) => {
        if (res.body.message !== 'Backend API is working!') {
          throw new Error('Expected message: Backend API is working!');
        }
      })
      .end(done);
  });
});