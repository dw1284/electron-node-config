const chai = require('chai');
const should = chai.should();
const proxyquire = require('proxyquire');
const electronStub = require('./electronStub');

describe('electron-node-config', function () {  
  it('should return a json object defined in ./testFiles/config/default.json', function () {
    let config = proxyquire('../index', { 'electron': electronStub });
    config.should.be.json;
    config.should.have.property('tier', 'development');
    config.should.have.property('development');
    config.should.have.property('production');
    config.development.should.be.json;
    config.development.should.have.property('property1', 'devValue1');
    config.development.should.have.property('property2', 'devValue2');
    config.production.should.have.property('property1', 'prodValue1');
    config.production.should.have.property('property2', 'prodValue2');
  });
});