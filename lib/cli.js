/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var path = require('path');

/**
 * The application object.
 * 
 * @type {Object}
 */
var app = module.exports = require('./app');

/**
 * Commands.
 * 
 * @type {Object}
 */
var commands = require('./commands');

/**
 * Storage.
 * 
 * @type {Object}
 */
var storage = require('./storage');

// Initializes the storage.
storage.load(
  path.join(__dirname, '..', 'data', 'config.json'), 
  function(err) {
    if (err) throw err;
  }
);

// Lists all records.
app.cmd(/ls/, commands.list);

// Removes a record.
app.cmd(/rm ([^\s]+)/, commands.delete);

// Version.
app.cmd(/version/, commands.version);

// Returns a record's value.
app.cmd(/([^\s]+$)/, commands.get);

// Sets new record.
app.cmd(/([^\s]+) (.+)/, commands.set);