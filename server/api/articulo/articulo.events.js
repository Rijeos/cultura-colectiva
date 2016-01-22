/**
 * Articulo model events
 */

'use strict';

import {EventEmitter} from 'events';
var Articulo = require('../../sqldb').Articulo;
var ArticuloEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ArticuloEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Articulo.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    ArticuloEvents.emit(event + ':' + doc._id, doc);
    ArticuloEvents.emit(event, doc);
    done(null);
  }
}

export default ArticuloEvents;
