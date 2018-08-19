var os = require('os');

exports.generateRandInt = function(){
    return Math.floor(Math.random() * 1000);
};

exports.getPlatform = function(){
    return os.platform();
};
