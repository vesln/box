/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Commands namespace.
 * 
 * @type {Object}
 */
var commands = module.exports;

/**
 * Print alias.
 */
var print = console.log;

/**
 * The application.
 * 
 * @type {Object}
 */
var app = require('./app');

/**
 * Storage. Just an alias to application config.
 * 
 * @type {Object}
 */
var storage = require('./storage');

/**
 * Prints current version.
 * 
 * @api public
 */
commands.version = function() {
  print(require('../package.json').version);
};

/**
 * Deletes a record.
 * 
 * @param {String} Key.
 * @api public
 */
commands.delete = function(key) {
  storage.del(key, function() {
    storage.save(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Prints a value.
 * 
 * @param {String} Key.
 * @api public
 */
commands.get = function(key) {
  storage.get(key, function(val) {
    print(val || 'Nothing found.');
  });
};

/**
 * Saves a record.
 * 
 * @param {String} Key.
 * @api public
 */
commands.set = function(key, value) {
  storage.set(key, value, function() {
    storage.save(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Lists all records.
 * 
 * @api public
 */
commands.list = function() {
  storage.get(function(data) {
    Object.keys(data).forEach(function(key) {
      print(key + ': ' + data[key]);
    });
  });
};