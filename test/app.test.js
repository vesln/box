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

/**
 * The tests object.
 *
 * @type {Object}
 */
var app = require('../lib/app');

describe('app', function() {
  it('should be flatiron app', function() {
    app.should.eql(flatiron.app);
  });
});
