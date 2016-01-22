/**
 * Version model events
 */

'use strict';

import {EventEmitter} from 'events';
var Version = require('../../sqldb').Version;
var VersionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VersionEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Version.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    VersionEvents.emit(event + ':' + doc._id, doc);
    VersionEvents.emit(event, doc);
    done(null);
  }
}

export default VersionEvents;
