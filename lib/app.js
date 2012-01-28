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
    'Usage:',
    '  box <your-key> <content> - Save a snippet.',
    '  box <your-key>           - Prints a snippet.',
    '  box ls                   - Lists all snippets.',
    '  box rm <key>             - Removes a snippet.',
    '',
    'Author: Veselin Todorov <hi@vesln.com>'
  ]
});