/*!
 * Box - Powerful key -> value storage for the CLI.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();

/**
 * Test dependencies.
 */
var flatiron = require('flatiron');
var path = require('path');

/**
 * The tests object.
 *
 * @type {Object}
 */
var cli = require('../lib/cli');

/**
 * Support.
 */
var storage = require('../lib/storage');
var commands = require('../lib/commands');

describe('cli', function() {
  it('should expose flatiron app', function() {
    cli.should.eql(flatiron.app);
  });

  it('should configure the storage', function() {
    storage.source.should.eql(path.join(__dirname, '..', 'data', 'config.json'));
  });

  it('should register routes', function() {
    cli.router.routes.ls.on.should.eql(commands.list);
    cli.router.routes.version.on.should.eql(commands.version);
    cli.router.routes.rm['([^\\s]+)'].on.should.eql(commands.delete);
    cli.router.routes.rm['([^\\s]+)'].on.should.eql(commands.delete);
    cli.router.routes['([^\\s]+$)'].on.should.eql(commands.get);
    cli.router.routes['([^\\s]+)']['(.+)'].on.should.eql(commands.set);
  });
});
