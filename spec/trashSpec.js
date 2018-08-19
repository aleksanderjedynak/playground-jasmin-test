var app = require('../app/trash');

describe('Trash', function(){

    it('Random Number Generator', function(){
        expect(app.generateRandInt()).toBeLessThan(1000);
    });

    it('Platform', function(){
        expect(app.getPlatform()).toEqual('win32');
    });
});