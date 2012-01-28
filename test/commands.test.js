/*!
 * Box - Powerful key -> value storage for the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Module dependencies.
 */
var sinon = require('sinon');

/**
 * Support.
 */
var storage = require('../lib/storage');

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
      sinon.spy(storage, 'del');
      sinon.stub(storage, 'save');
      commands.delete('foo');
      storage.del.calledOnce.should.be.ok;
      storage.del.getCall(0).args[0].should.eql('foo');
      storage.save.calledOnce.should.be.ok;
      storage.del.restore();
      storage.save.restore();
    });
  });
  
  describe('.get()', function() {
    it('should call storage.get', function() {
      sinon.stub(storage, 'get');
      commands.get('foo');
      storage.get.getCall(0).args[0].should.eql('foo');
      storage.get.calledOnce.should.be.ok;
      storage.get.restore();
    });
  });
  
  describe('.set()', function() {
    it('should call storage.set and storage.save', function() {
      sinon.spy(storage, 'set');
      sinon.stub(storage, 'save');
      commands.set('foo', 'bar');
      storage.set.calledOnce.should.be.ok;
      storage.set.getCall(0).args[0].should.eql('foo');
      storage.set.getCall(0).args[1].should.eql('bar');
      storage.save.calledOnce.should.be.ok;
      storage.set.restore();
      storage.save.restore();
    });
  });
  
  describe('.list()', function() {
    it('should call storage.get with no params', function() {
      sinon.stub(storage, 'get');
      commands.get('foo');
      storage.get.calledOnce.should.be.ok;
      storage.get.restore();
    });
  });
});