'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var versionCtrlStub = {
  index: 'versionCtrl.index',
  show: 'versionCtrl.show',
  create: 'versionCtrl.create',
  update: 'versionCtrl.update',
  destroy: 'versionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var versionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './version.controller': versionCtrlStub
});

describe('Version API Router:', function() {

  it('should return an express router instance', function() {
    versionIndex.should.equal(routerStub);
  });

  describe('GET /api/versions', function() {

    it('should route to version.controller.index', function() {
      routerStub.get
        .withArgs('/', 'versionCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/versions/:id', function() {

    it('should route to version.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'versionCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/versions', function() {

    it('should route to version.controller.create', function() {
      routerStub.post
        .withArgs('/', 'versionCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/versions/:id', function() {

    it('should route to version.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'versionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/versions/:id', function() {

    it('should route to version.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'versionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/versions/:id', function() {

    it('should route to version.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'versionCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
