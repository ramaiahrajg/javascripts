const assert = require('chai').assert;

const app = require('../app');

describe('Test Suite for app',  ()=> {
    before('hi printed', () => {
        console.log('Before printed');
    });
    it('Test ',  ()=> {
        assert.equal(app(),'hello');
    });

    after(' after printed ', () => {
        console.log('Before printed');
    });
});