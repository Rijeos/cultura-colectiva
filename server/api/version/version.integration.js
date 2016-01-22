'use strict';

var app = require('../..');
import request from 'supertest';

var newVersion;

describe('Version API:', function() {

  describe('GET /api/version', function() {
    var version;

    beforeEach(function(done) {
      request(app)
        .get('/api/version')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          version = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      version.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/version', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/version')
        .send({
          name: 'New Version',
          info: 'This is the brand new version!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newVersion = res.body;
          done();
        });
    });

    it('should respond with the newly created version', function() {
      newVersion.name.should.equal('New Version');
      newVersion.info.should.equal('This is the brand new version!!!');
    });

  });

  describe('GET /api/version/:id', function() {
    var version;

    beforeEach(function(done) {
      request(app)
        .get('/api/version/' + newVersion._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          version = res.body;
          done();
        });
    });

    afterEach(function() {
      version = {};
    });

    it('should respond with the requested version', function() {
      version.name.should.equal('New Version');
      version.info.should.equal('This is the brand new version!!!');
    });

  });

  describe('PUT /api/version/:id', function() {
    var updatedVersion;

    beforeEach(function(done) {
      request(app)
        .put('/api/version/' + newVersion._id)
        .send({
          name: 'Updated Version',
          info: 'This is the updated version!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedVersion = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVersion = {};
    });

    it('should respond with the updated version', function() {
      updatedVersion.name.should.equal('Updated Version');
      updatedVersion.info.should.equal('This is the updated version!!!');
    });

  });

  describe('DELETE /api/version/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/version/' + newVersion._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when version does not exist', function(done) {
      request(app)
        .delete('/api/version/' + newVersion._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
