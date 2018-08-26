var app = require('../app/appConverter');
var helpers = require('../app/helpers/helpers');
describe('Currency Converter', function(){

    describe('GET echange rates', function(){

        it('should return object', function(done){
            app.getLatestRates(function(result){
                expect(typeof result).toEqual('object');
                done();
            });
        });

        it('should return success!', function (done) {
            app.getLatestRates(function (result) {
                expect(result.success).toEqual(true);
                done();
            });
        });

        it('should return at least 1 rate', function(done){
            app.getLatestRates(function (result) {
                var ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toBeGreaterThan(1);
                done();
            });
        });

        it('should return at least all rates', function (done) {
            app.getLatestRates(function (result) {
                var ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toEqual(168);
                done();
            });
        });

    });
});