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
var clone = require('super');

/**
 * The tests object.
 * 
 * @type {Object}
 */
var commands = clone(require('../lib/commands'), {});

describe('commands', function() {
  describe('.version()', function() {
    it('should be sane', function() {
      commands.version.should.be.ok
    });
  });
  
  describe('.delete()', function() {
    it('should call storage.delete and storage.save', function() {
      sinon.spy(commands.storage, 'del');
      sinon.stub(commands.storage, 'save');
      commands.delete('foo');
      commands.storage.del.calledOnce.should.be.ok;
      commands.storage.del.getCall(0).args[0].should.eql('foo');
      commands.storage.save.calledOnce.should.be.ok;
      commands.storage.del.restore();
      commands.storage.save.restore();
    });
  });
  
  describe('.get()', function() {
    it('should call storage.get', function() {
      sinon.stub(commands.storage, 'get');
      commands.get('foo');
      commands.storage.get.getCall(0).args[0].should.eql('foo');
      commands.storage.get.calledOnce.should.be.ok;
      commands.storage.get.restore();
    });
  });
  
  describe('.set()', function() {
    it('should call storage.set and storage.save', function() {
      sinon.spy(commands.storage, 'set');
      sinon.stub(commands.storage, 'save');
      commands.set('foo', 'bar');
      commands.storage.set.calledOnce.should.be.ok;
      commands.storage.set.getCall(0).args[0].should.eql('foo');
      commands.storage.set.getCall(0).args[1].should.eql('bar');
      commands.storage.save.calledOnce.should.be.ok;
      commands.storage.set.restore();
      commands.storage.save.restore();
    });
  });
  
  describe('.list()', function() {
    it('should call storage.get with no params', function() {
      sinon.stub(commands.storage, 'get');
      commands.get('foo');
      commands.storage.get.calledOnce.should.be.ok;
      commands.storage.get.restore();
    });
  });
});