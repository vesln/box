/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Test dependencies.
 */
var fs = require('fs');
var path = require('path');

/**
 * The tested object.
 * 
 * @type {Object}
 */
var storage = require('../lib/storage');

/**
 * Temporary data file.
 * 
 * @type {String}
 */
var file = path.join(__dirname, 'tmp', 'data.json');

/**
 * Removes the tmp file.
 */
function rm() {
  try {
    fs.unlinkSync(file);
  } catch(err) {
    if (err.code !== 'ENOENT') throw err;
  }
};

describe('storage', function() {
  beforeEach(rm);
  afterEach(rm);
  
  describe('.load()', function() {
    it('should load file content', function(done) {
      storage.load(file, function(err) {
        (err === null).should.be.ok;
        done();
      });
    });
  });
  
  describe('.set() \n    .get()', function() {
   it('should access a key value', function(done) {
     storage.set('foo', 'bar', function() {
       storage.get('foo', function(val) {
         val.should.eql('bar');
         done();
       })
     });
   }); 
  });
  
  describe('.del()', function() {
   it('should delete a key', function(done) {
     storage.set('foo', 'bar', function() {
       storage.del('foo', function() {
         storage.get('foo', function(val) {
            (val === null).should.be.true;
            done();
          });
       });
     });
   }); 
  });
  
  describe('.save()', function() {
    it('should save content to file.', function(done) {
      storage.load(file, function(err) {
        (err === null).should.be.ok;
        storage.set('foo', 'bar', function() {
          storage.save(function(err) {
            (err === null).should.be.true;
            fs.readFileSync(file, 'utf8').should.eql('{"foo":"bar"}');
            done();
          })
        });
      });
    }); 
  });
  
  describe('.destroy()', function() {
    it('should destroy the loaded file.', function(done) {
      storage.load(file, function(err) {
        storage.set('foo', 'bar', function() {
          storage.save(function(err) {
            storage.destroy(function(err) {
              (err === null).should.be.true;
              path.existsSync(file).should.be.false;
              done();
            });
          })
        });
      });
    });
  });
});