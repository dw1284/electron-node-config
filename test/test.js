const chai       = require('chai');
const should     = chai.should();
const proxyquire = require('proxyquire');


describe('electron-node-config::browser', function () {
    it('should return a json object defined in ./testFiles/config/default.json', function () {
        const electronStub = require('./electronStub');
        let config         = proxyquire('../index', {'electron': electronStub});
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
describe('electron-node-config::renderer', function () {
    it('should return a json object defined in ./testFiles/config/default.json', function () {
        const rendererStub = require('./rendererStub');
        let config         = proxyquire('../index', {'electron': rendererStub});
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