'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var articuloCtrlStub = {
  index: 'articuloCtrl.index',
  show: 'articuloCtrl.show',
  create: 'articuloCtrl.create',
  update: 'articuloCtrl.update',
  destroy: 'articuloCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var articuloIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './articulo.controller': articuloCtrlStub
});

describe('Articulo API Router:', function() {

  it('should return an express router instance', function() {
    articuloIndex.should.equal(routerStub);
  });

  describe('GET /api/articulos', function() {

    it('should route to articulo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'articuloCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/articulos/:id', function() {

    it('should route to articulo.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'articuloCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/articulos', function() {

    it('should route to articulo.controller.create', function() {
      routerStub.post
        .withArgs('/', 'articuloCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/articulos/:id', function() {

    it('should route to articulo.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'articuloCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/articulos/:id', function() {

    it('should route to articulo.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'articuloCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/articulos/:id', function() {

    it('should route to articulo.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'articuloCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
