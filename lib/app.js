/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */ 
var flatiron = require('flatiron');

/**
 * The application object.
 * 
 * @type {Object}
 */
var app = module.exports = flatiron.app;

// Usage.
app.use(flatiron.plugins.cli, {
  usage: [
    '',
    'box',
    '',
    'Usage:'
  ]
});