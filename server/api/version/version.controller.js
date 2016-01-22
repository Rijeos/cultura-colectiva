/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/versions              ->  index
 * POST    /api/versions              ->  create
 * GET     /api/versions/:id          ->  show
 * PUT     /api/versions/:id          ->  update
 * DELETE  /api/versions/:id          ->  destroy
 */

 'use strict';

 import _ from 'lodash';
 import {Version,Articulo} from '../../sqldb';

 function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
    .then(updated => {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
      .then(() => {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Versions
export function index(req, res) {
  Version.findAll()
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Gets a single Version from the DB
export function show(req, res) {
  Version.find({
    where: {
      _id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Creates a new Version in the DB
export function create(req, res) {

  let createVersion = () => {
   Version.create(req.body)
   .then(respondWithResult(res, 201))
   .catch(handleError(res));
 };

 if(!req.body.ArticuloId){
  return Articulo.create({})
  .then(a => {
    req.body.ArticuloId= a._id;
    
    return createVersion();    

  }) 
}
createVersion();
}

// Updates an existing Version in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  
  Version.create(req.body)
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Deletes a Version from the DB
export function destroy(req, res) {
  Version.find({
    where: {
      _id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(removeEntity(res))
  .catch(handleError(res));
}
