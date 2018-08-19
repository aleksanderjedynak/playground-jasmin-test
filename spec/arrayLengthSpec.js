var app = require('../app/arrayLength');

describe('Array length', function(){

    it('shoult return 5 when array with 5 elements in given', function(){
        var arr = [1,1,1,1,1];
        expect(app.arrayLength(arr)).toEqual(5);
    });
});