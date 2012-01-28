/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var storage = require('../storage');

/**
 * The tests object.
 * 
 * @type {Object}
 */
var commands = require('../lib/commands');

describe('commands', function() {
  describe('.version()', function() {
    it('should be sane', function() {
      commands.version.should.be.ok
    });
  });
  
  describe('.delete()', function() {
    it('should call storage.delete and storage.save', function() {
      
    });
  });
});