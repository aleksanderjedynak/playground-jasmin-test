var app = require('../app/findPrefixCode');

describe('DialCodeFinder', function(){

    it('should return 48 when Poland is given', function(){
        expect(app.findPrefixCode('Poland')).toEqual(48);
    });

    it('should return Unknown value when Unknown is given', function(){
        expect(app.findPrefixCode('Unknown')).toEqual('Unknown value');
    });

});