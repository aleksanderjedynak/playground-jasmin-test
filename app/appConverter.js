var request = require('request');
var myDisk = process.env.HOMEDRIVE;
var access_key = require(myDisk +'/API_ACCESS_KEY/API_ACCESS_KEY');
var key = access_key.KEY.FIXER;
// console.log(process.env.HOMEDRIVE);
// console.log(access_key.KEY.FIXER);

module.exports.getLatestRates = function(callback){
    request('http://data.fixer.io/api/latest?access_key='+key, 
        function(error, reponse, body){
            var ratesList = JSON.parse(body);
            return callback(ratesList);
        });
};