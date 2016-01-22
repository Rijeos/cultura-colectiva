'use strict';

var app = require('../..');
import request from 'supertest';

var newArticulo;

describe('Articulo API:', function() {

  describe('GET /api/articulo', function() {
    var articulo;

    beforeEach(function(done) {
      request(app)
        .get('/api/articulo')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          articulo = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      articulo.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/articulo', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/articulo')
        .send({
          name: 'New Articulo',
          info: 'This is the brand new articulo!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newArticulo = res.body;
          done();
        });
    });

    it('should respond with the newly created articulo', function() {
      newArticulo.name.should.equal('New Articulo');
      newArticulo.info.should.equal('This is the brand new articulo!!!');
    });

  });

  describe('GET /api/articulo/:id', function() {
    var articulo;

    beforeEach(function(done) {
      request(app)
        .get('/api/articulo/' + newArticulo._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          articulo = res.body;
          done();
        });
    });

    afterEach(function() {
      articulo = {};
    });

    it('should respond with the requested articulo', function() {
      articulo.name.should.equal('New Articulo');
      articulo.info.should.equal('This is the brand new articulo!!!');
    });

  });

  describe('PUT /api/articulo/:id', function() {
    var updatedArticulo;

    beforeEach(function(done) {
      request(app)
        .put('/api/articulo/' + newArticulo._id)
        .send({
          name: 'Updated Articulo',
          info: 'This is the updated articulo!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedArticulo = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedArticulo = {};
    });

    it('should respond with the updated articulo', function() {
      updatedArticulo.name.should.equal('Updated Articulo');
      updatedArticulo.info.should.equal('This is the updated articulo!!!');
    });

  });

  describe('DELETE /api/articulo/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/articulo/' + newArticulo._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when articulo does not exist', function(done) {
      request(app)
        .delete('/api/articulo/' + newArticulo._id)
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
