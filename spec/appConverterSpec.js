var app = require('../app/appConverter');
var helpers = require('../app/helpers/helpers');
var nock = require('nock');
var api = require('../api');
var KEY = app.KEY;

describe('Currency Converter', function(){

    describe('GET echange rates', function(){

        beforeEach(function(){
            //Finished in 0.09 seconds vs 1.619 seconds without nock!!
            var ratesResponse = api;
            nock('http://data.fixer.io')
                .get('/api/latest?access_key=' + KEY)
                .reply(200, ratesResponse);
        });

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
                expect(ratesCount).toBeGreaterThan(0);
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