var app = require('../app/stringCheckerv2');

describe('String Checker vol.2', function(){

    it('should return string length when valid string is given', function(){
        var string = "Aleksander";
        expect(app.stringCheckerv2(string)).toEqual(10);
    });
    it('should return false length when invalid string is given', function(){
        var string = {name :"Aleksander"};
            expect(app.stringCheckerv2(string)).toBeFalsy();
    });

});