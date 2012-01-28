/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var fs = require('fs');
var path = require('path');

/**
 * Storage.
 * 
 * @type {Object}
 */
var storage = module.exports;

/**
 * Sets a value.
 * 
 * @param {String} Key.
 * @param {String} Value.
 * @param {Function} Callback.
 * @api public
 */
storage.set = function(key, value, cb) {
  (this.data[key] = value) && cb();
};

/**
 * Returns a value.
 * 
 * @param {String} Key.
 * @param {Function} Callback.
 */
storage.get = function(key, cb) {
  if (arguments.length === 2) return cb(this.data[key] || null);
  key(this.data);
};

/**
 * Delets a key.
 * 
 * @param {String} Key.
 * @param {Function} Callback.
 * @api public
 */
storage.del = function(key, cb) {
  delete this.data[key] && cb();
};

/**
 * Saves file content.
 * 
 * @param {Function} Callback.
 */
storage.save = function(cb) {
  fs.writeFile(this.source, JSON.stringify(this.data), function(err) {
    cb(err || null)
  });
};

/**
 * Loads file content.
 * 
 * @param {String} Path to file.
 * @param {Function} Callback. 
 * @api public
 */
storage.load = function(file, cb) {
  var self = this;
  this.source = file;
  fs.readFile(file, 'utf8', function(err, data) {
    if (err && err.code !== 'ENOENT') return cb(err);
    self.data = data || {};
    cb(null);
  });
};

/**
 * Destroies a storage.
 * 
 * @param {Function} Callback.
 */
storage.destroy = function(cb) {
  fs.unlink(this.source, function(err) {
    cb(err || null);
  });
};