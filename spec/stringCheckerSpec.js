var app = require('../app/stringChecker');

describe('String Checker', function(){

    it('should return 10 ehen string Aleksander is given', function(){
        expect(app.stringChecker('Aleksander')).toEqual(10);
    });

    it('should throw Error when invalid string is given', function () {
        expect( function(){ app.stringChecker({ name: 'Aleksander' }); } ).toThrow();
    });
});