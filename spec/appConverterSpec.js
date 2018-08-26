var app = require('../app/appConverter');
describe('Currency Converter', function(){

    describe('GET echange rates', function(){

        it('should return object', function(done){
            app.getLatestRates(function(result){
                expect(typeof result).toEqual('object');
                done();
            });
        });

    });
});